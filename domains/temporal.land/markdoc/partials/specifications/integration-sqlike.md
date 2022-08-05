## Workflows and activities

{% callout title="Integration name" iconType="accessibility" %}
  `custom` is the name of the integration set in `sqlike.Config`. See example below
  for details.
{% /callout %}

By leveraging the SQL-like specification, end-users can use {% $name %} as a
fault-tolerant Integration as a Service. They have access to the following
Temporal workflows and activities.

{% accordion title="Execute queries" %}
  By using this workflow, you can run multiple SQL queries inside a single
  transaction and ensure atomicity.

  - Workflow name: `custom(sqlike).Queries`
  - Input type: [`sqlike.InputQueries`](https://pkg.go.dev/go.temporal.land/specifications/sqlike#InputQueries)
  - Output type: [`sqlike.OutputQueries`](https://pkg.go.dev/go.temporal.land/specifications/sqlike#OutputQueries)
  - Activities names:
    - `custom(sqlike).Queries.Validation` (local)
    - `custom(sqlike).Queries.Execution`
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
  "go.temporal.land/specifications/sqlike"
)

func main() {
  ctx := context.Background()

  // Create the Temporal client, as stated in the Temporal documentation.
  c, _ := client.NewClient(client.Options{})
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

  // Register the workflows and activites provided by the SQL-like specification
  // for the integration.
  _ = inte.RegisterWithSQLike(w, sqlike.Config{
    IsolationLevel: {% $config.IsolationLevel %},
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
  "go.temporal.land/specifications/sqlike"
  "go.temporal.land/toolkit/event"
)

func main() {
  ctx := context.Background()

  // Create the Temporal client, as stated in the Temporal documentation.
  c, _ := client.NewClient(client.Options{})
  defer c.Close()

  // Define the workflow options, as stated in the Temporal documentation.
  opts := client.StartWorkflowOptions{
    TaskQueue: "queue",
  }

  // Execute the workflow previously registered in the worker.
  _, _ = c.ExecuteWorkflow(ctx, opts, "custom(sqlike).Queries", sqlike.InputQueries{
    Context: event.Context{},
    Queries: []string{
      `INSERT INTO users (id, first_name, last_name) VALUES
        ('a78c3d1b-e57a-4578-a322-1cdc7219441f', 'Elliot', 'Anderson');`,
    },
  })
}
```
