---
location: "/toolkit/documentation/errorstack.md"
title: "Errors, SLOs and SLAs"

goref:
  - "toolkit/errorstack"
  - "toolkit/integration"
---

# {% $markdoc.frontmatter.title %}

You might have agreed on SLOs with your internal teams and SLAs with your
customers. Workflows' and activities' lifecycle policies allow you to define
technical decisions Temporal must apply on timeouts and retries, helping you
define and comply to your SLOs and SLAs. But what your teams should do when such
errors occur? What are the technical and organizational consequences you must
apply when a SLO or SLA is breached?

This is very specific to each organization but Temporal Land helps you reach your
different Service Levels. In addition to consistent error handling across
integrations, we provide a unique experience to react on errors that happened in
workflows and activities allowing you to customize the behavior when an error
occurs, such as when a timeout is reached.

## Configuration

When registering an integration in a worker, developers have access to the
following functions in the integration's `Config`:
- `OnWorkflowError` is the function called *from* a workflow of the integration
  in case the said workflow has encountered an error. If the error comes from an
  activity, `OnActivityError` will be called first. Most of the time, you would
  want to execute an activity inside this function to notify of a workflow execution
  error based on the number of attempts made or based on timeouts reached.
- `OnActivityError` is the function called *from* an activity of the integration
  in case the said activity has encountered an error.

These functions give you access to the workflow or activity's `Context`, as well
as the error that occured. Depending on the context and error, you might react
differently: send an email, send a notification on Slack, publish a message to
a topic (such as Kafka), write a file into a blob storage (such as AWS S3), etc.

## End-to-end example

### Worker

```go
package main

import (
  "context"
  "fmt"

  "go.temporal.io/sdk/activity"
  "go.temporal.io/sdk/client"
  "go.temporal.io/sdk/worker"
  "go.temporal.io/sdk/workflow"
  "go.temporal.land/integrations/mailchimp"
  "go.temporal.land/specifications/analytics"
  "go.temporal.land/toolkit/integration"
  "go.temporal.land/toolkit/lifecycle"
)

// onWorkflowError is the function called when a workflow execution of the
// registered integration failed. In this example, we execute an activity if a
// workflow has reached 80% or more of maximum attempts desired.
func onWorkflowError(ctx workflow.Context, err error) {
  info := workflow.GetInfo(ctx)

  ctx = workflow.WithActivityOptions(ctx, options)
  if ((info.Attempt * 100) / info.RetryPolicy.MaximumAttempts) >= 80 {
    _ = workflow.ExecuteActivity(ctx, "activity.ToExecute", input).Get(ctx, nil)
  }
}

// onActivityError is the function called when an activity in a workflow execution
// of the registered integration failed. In this example, we simply inform via 
// the logger that an activity has failed 3 or more times during a single workflow
// execution.
func onActivityError(ctx context.Context, err error) {
  logger := activity.GetLogger(ctx)
  info := activity.GetInfo(ctx)

  if info.Attempt >= 3 {
    msg := fmt.Sprintf("Activity already failed %v times during a single workflow execution", info.Attempt)
    logger.Warn(msg)
  }
}

func main() {
  ctx := context.Background()

  // Create the Temporal client, as stated in the Temporal documentation.
  c, _ := client.Dial(client.Options{})
  defer c.Close()

  // Create the Temporal worker, as stated in the Temporal documentation.
  w := worker.New(c, "queue", worker.Options{})

  // Create a new instance of the integration. You can create different instances
  // of the same integration by providing a custom name in the Config.
  // In this example we also pass the functions to execute in case of errors.
  inte, _ := mailchimp.New(ctx, mailchimp.Config{
    Integration: integration.Config{
      Name:            "custom",
      OnWorkflowError: onWorkflowError,
      OnActivityError: onActivityError,
    },
    DatacenterID: "FAKE_TO_TRY_ERROR_HANDLING",
    APIKey:       "FAKE_TO_TRY_ERROR_HANDLING",
    AudienceID:   "FAKE_TO_TRY_ERROR_HANDLING",
  })

  // Make sure to release the resources consumed by the integration when process
  // is done.
  defer inte.Close()

  // Register the workflows and activites provided by the analytics specification
  // for the integration.
  _ = inte.RegisterWithAnalytics(w, analytics.Config{})

  // Initialize the integration. This will initialize resources of the said
  // integration and the specifications registered.
  _ = inte.Init()

  // Start the worker!
  _ = w.Run(worker.InterruptCh())
}
```
