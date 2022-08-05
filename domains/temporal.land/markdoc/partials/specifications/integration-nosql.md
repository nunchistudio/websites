## Workflows and activities

{% callout title="Integration name" iconType="accessibility" %}
  `custom` is the name of the integration set in `nosql.Config`. See example below
  for details.
{% /callout %}

By leveraging the NoSQL specification, end-users can use {% $name %} as a
fault-tolerant Integration as a Service. They have access to the following
Temporal workflows and activities.

{% accordion title="Create a document" %}
  By using this workflow, you can create a new document in a collection.

  - Workflow name: `custom(nosql).Create`
  - Input type: [`nosql.Input`](https://pkg.go.dev/go.temporal.land/specifications/nosql#Input)
  - Output type: [`nosql.Output`](https://pkg.go.dev/go.temporal.land/specifications/nosql#Output)
  - Activities names:
    - `custom(nosql).Create.Validation` (local)
    - `custom(nosql).Create.Execution`
{% /accordion %}

{% accordion title="Put a document" %}
  By using this workflow, you can put a document (whether or not it already exists)
  in a collection.

  - Workflow name: `custom(nosql).Put`
  - Input type: [`nosql.Input`](https://pkg.go.dev/go.temporal.land/specifications/nosql#Input)
  - Output type: [`nosql.Output`](https://pkg.go.dev/go.temporal.land/specifications/nosql#Output)
  - Activities names:
    - `custom(nosql).Put.Validation` (local)
    - `custom(nosql).Put.Execution`
{% /accordion %}

{% accordion title="Replace a document" %}
  By using this workflow, you can replace a document in a collection.

  - Workflow name: `custom(nosql).Replace`
  - Input type: [`nosql.Input`](https://pkg.go.dev/go.temporal.land/specifications/nosql#Input)
  - Output type: [`nosql.Output`](https://pkg.go.dev/go.temporal.land/specifications/nosql#Output)
  - Activities names:
    - `custom(nosql).Replace.Validation` (local)
    - `custom(nosql).Replace.Execution`
{% /accordion %}

{% accordion title="Update a document" %}
  By using this workflow, you can apply a set of modifications to a document in
  a collection.

  - Workflow name: `custom(nosql).Update`
  - Input type: [`nosql.Input`](https://pkg.go.dev/go.temporal.land/specifications/nosql#Input)
  - Output type: [`nosql.Output`](https://pkg.go.dev/go.temporal.land/specifications/nosql#Output)
  - Activities names:
    - `custom(nosql).Update.Validation` (local)
    - `custom(nosql).Update.Execution`
{% /accordion %}

{% accordion title="Delete a document" %}
  By using this workflow, you can delete a document from a collection.

  - Workflow name: `custom(nosql).Delete`
  - Input type: [`nosql.Input`](https://pkg.go.dev/go.temporal.land/specifications/nosql#Input)
  - Output type: [`nosql.Output`](https://pkg.go.dev/go.temporal.land/specifications/nosql#Output)
  - Activities names:
    - `custom(nosql).Delete.Validation` (local)
    - `custom(nosql).Delete.Execution`
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
  "go.temporal.land/specifications/nosql"
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

  // Register the workflows and activites provided by the NoSQL specification
  // for the integration.
  _ = inte.RegisterWithNoSQL(w, nosql.Config{
    Collection: "{% $config.Collection %}",
    Key:        "{% $config.Key %}",
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
  "go.temporal.land/specifications/nosql"
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

  // Execute the workflow previously registered in the worker. The Key defined
  // in nosql.Config when registering the specification is required on every
  // NoSQL-related workflows.
  _, _ = c.ExecuteWorkflow(ctx, opts, "custom(nosql).Put", nosql.Input{
    Context:  &event.Context{},
    Document: map[string]any{
      "{% $config.Key %}": "y943yr7843yr873",
      "key": "value",
    },
  })
}
```
