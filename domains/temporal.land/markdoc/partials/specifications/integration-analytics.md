## End-to-end example

### Worker

Before being able to consume the integration, it must first be registered in a
Temporal worker:

```go
package main

import (
  "context"

  "go.temporal.io/sdk/client"
  "go.temporal.io/sdk/worker"
  "go.temporal.land/integrations/{% $mod %}"
  "go.temporal.land/specifications/analytics"
  "go.temporal.land/toolkit/integration"
)

func main() {
  ctx := context.Background()

  // Create the Temporal client, as stated in the Temporal documentation.
  c, _ := client.Dial(client.Options{})
  defer c.Close()
  
  // Create the Temporal worker, as stated in the Temporal documentation.
  w := worker.New(c, "queue", worker.Options{})

  // Create a new instance of the integration. You can create different instances
  // of the same integration by providing a custom name in the Config.
  inte, _ := {% $mod %}.New(ctx, {% $mod %}.Config{
    Integration: integration.Config{
      Name: "custom",
    },
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

### Client

This example is written with the Temporal Go SDK, but works as well for any
supported SDK such as TypeScript, Python, Java, or PHP. All you need is to
execute the desired workflow from an application using the Temporal client of
your choice.

```go
package main

import (
  "context"

  "go.temporal.io/sdk/client"
  "go.temporal.land/specifications/analytics"
  "go.temporal.land/toolkit/event"
)

func main() {
  ctx := context.Background()

  // Create the Temporal client, as stated in the Temporal documentation.
  c, _ := client.Dial(client.Options{})
  defer c.Close()

  // Define the workflow options, as stated in the Temporal documentation.
  opts := client.StartWorkflowOptions{
    TaskQueue: "queue",
  }

  // Execute the workflow previously registered in the worker.
  _, _ = c.ExecuteWorkflow(ctx, opts, "custom(analytics).Identify", analytics.InputIdentify{
    Context: &event.Context{},
    UserID:  "a78c3d1b-e57a-4578-a322-1cdc7219441f",
    Traits:  map[string]any{
      "first_name": "Elliot",
      "last_name":  "Anderson",
      "email":      "elliot.anderson@evil.corp",
    },
  })
}
```
