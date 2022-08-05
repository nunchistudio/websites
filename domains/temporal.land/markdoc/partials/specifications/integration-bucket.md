## Workflows and activities

{% callout title="Integration name" iconType="accessibility" %}
  `custom` is the name of the integration set in `bucket.Config`. See example below
  for details.
{% /callout %}

By leveraging the bucket specification, end-users can use {% $name %} as a
fault-tolerant Integration as a Service. They have access to the following
Temporal workflows and activities.

{% accordion title="Write data" %}
  By using this workflow, you can write a file (as bytes) at a given path in a
  bucket. You can also set some options about the file, such as the content
  encoding or language.

  - Workflow name: `custom(bucket).Write`
  - Input type: [`bucket.InputWrite`](https://pkg.go.dev/go.temporal.land/specifications/bucket#InputWrite)
  - Output type: [`bucket.OutputWrite`](https://pkg.go.dev/go.temporal.land/specifications/bucket#OutputWrite)
  - Activities names:
    - `custom(bucket).Write.Validation` (local)
    - `custom(bucket).Write.Execution`
{% /accordion %}

{% accordion title="Delete data" %}
  By using this workflow, you can delete a file at a given path from a bucket.

  - Workflow name: `custom(bucket).Delete`
  - Input type: [`bucket.InputDelete`](https://pkg.go.dev/go.temporal.land/specifications/bucket#InputDelete)
  - Output type: [`bucket.OutputDelete`](https://pkg.go.dev/go.temporal.land/specifications/bucket#OutputDelete)
  - Activities names:
    - `custom(bucket).Delete.Validation` (local)
    - `custom(bucket).Delete.Execution`
{% /accordion %}

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
  "go.temporal.land/specifications/bucket"
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

  // Register the workflows and activites provided by the bucket specification
  // for the integration.
  _ = inte.RegisterWithBucket(w, bucket.Config{
    Bucket: "{% $config.Bucket %}",
  })

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
  "go.temporal.land/specifications/bucket"
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
  _, _ = c.ExecuteWorkflow(ctx, opts, "custom(bucket).Write", bucket.InputWrite{
    Context: &event.Context{},
    Path:    "path/to/file.json",
    Options: bucket.WriteOptions{
      ContentEncoding: "utf-8",
    },
    Blob: []byte(`{ "hello": "world" }`),
  })
}
```
