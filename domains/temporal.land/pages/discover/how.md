---
title: End-to-end example
goref:
  - integrations/mailchimp
  - specifications/analytics
  - toolkit/integration
  - toolkit/lifecycle
---

# {% $markdoc.frontmatter.title %}

In this concrete example, you will use your first integration with a specification
in a *worker*. Then, you will execute a workflow of the integration from a *client*.

The integration is [MailChimp](/integrations/mailchimp-analytics), and it relies
on the analytics specification. The example should be clear andexplicit enough
to not actually have a MailChimp account and run it.

## Within Temporal worker

{% side-by-side %}
{% item %}
As stated in the previous guide, Temporal Land is not an additional layer on top
of Temporal. It *only* allows to enforce best practices and leverage
Integrations as a Service. We assume you are familiar with Go, Temporal, and
already have a running Temporal server.

That being said, the first piece you need to continue is a Temporal worker.

In the example on the right we create a Temporal client and worker in Go.
We strongly advise you to [refer to the Temporal documentation for more
details](https://docs.temporal.io/application-development-guide#run-worker-processes)
if you are not familiar with this concept.

{% callout type="warning" title="Error handling" %}
Errors are voluntarily omitted in the documentation for better readability.
They should be handled in a real application.
{% /callout %}
{% /item %}

```go
package main

import (
  "os"
  "time"

  "go.temporal.io/sdk/client"
  "go.temporal.io/sdk/worker"
  "go.temporal.land/integrations/mailchimp"
  "go.temporal.land/specifications/analytics"
  "go.temporal.land/toolkit/integration"
  "go.temporal.land/toolkit/lifecycle"
)

func() {
  c, _ := client.NewClient(client.Options{
    // ...
  })

  defer c.Close()
  w := worker.New(c, "queue", worker.Options{
    // ...
  })
```
{% /side-by-side %}

{% side-by-side %}
{% item %}
The first step related to Temporal Land is to create a new instance of the
`*mailchimp.Handler` with `mailchimp.New()` and the configuration you wish to
interact with the MailChimp API. The context passed will be used during the whole
integration's lifecycle.

Each integration has its own `Config`, embedding the common `integration.Config`.
{% /item %}

```go
  m, _ := mailchimp.New(ctx, mailchimp.Config{
    Integration: integration.Config{
      Name:                  "mailchimp",
      AllowPoliciesOverride: true,
    },
    APIKey:            os.Getenv("MAILCHIMP_API_KEY"),
    DatacenterID:      "us1",
    AudienceID:        os.Getenv("MAILCHIMP_AUDIENCE_ID"),
    EnableDoubleOptIn: true,
    RegulationType:    mailchimp.RegulationArchive,
  })
```
{% /side-by-side %}

{% side-by-side %}
{% item %}
Make sure to close the integration when done to free resources.
{% /item %}

```go
  defer m.Close()
```
{% /side-by-side %}

{% side-by-side %}
{% item %}
The MailChimp integration uses the analytics specification. It therefore exposes
`RegisterWithAnalytics`, used to register Temporal workflows and activities in
the worker previously created.

Each specification has its own policies and are shared by all integrations
complying to it.
{% /item %}

```go
  _ = m.RegisterWithAnalytics(w, analytics.Config{
    Policies: analytics.Policies{
      Request: lifecycle.ActivityPolicy{
        SingleAttemptTimeout: 2 * time.Second,
      },
    },
  })
```
{% /side-by-side %}

{% side-by-side %}
{% item %}
After the desired specifications have been registered for the integration, you
must initialize it.
{% /item %}

```go
  _ = m.Init()
```
{% /side-by-side %}

{% side-by-side %}
{% item %}
You can now run the worker, as you usually do with the Go SDK.
{% /item %}

```go
  _ = w.Run(worker.InterruptCh())
}
```
{% /side-by-side %}

## Within Temporal client

Once an integration is registered in a Temporal worker, end-users have access to
the Temporal workflows and activities exposed by this integration. Workflows and
activities are opiniated and production-ready.

You must refer to the [documentation of each integration](/ecosystem) to discover
their workflows and activities.

In this example, by leveraging the analytics specification end-users can use
MailChimp as a fault-tolerant Integration as a Service. They have access to the
following Temporal workflows and activities.

- `mailchimp(analytics).Identify` lets you tie a user to their actions and record
  traits about them. It includes a unique user ID and any optional traits you
  know about the user, like their email, name, etc.
  It uses the following activities:
  - `mailchimp(analytics).Identify.Validation` (local)
  - `mailchimp(analytics).Identify.Request`

- `mailchimp(analytics).Delete` lets you delete a user and all its data.
  It uses the following activities:
  - `mailchimp(analytics).Delete.Validation` (local)
  - `mailchimp(analytics).Delete.Request`

These workflows and activities can be executed from any application with a
Temporal SDK, as explained in the example below.

Start the worker like you usually run a Go application:
```bash
go run main.go
```

In the examples below, we assume the value of `input` is the as follow:
```go
input := analytics.InputIdentify{
  Context: event.Context{
    IP: net.ParseIP("192.168.1.1"),
  },
  Policies: &analytics.Policies{
    Request: lifecycle.ActivityPolicy{
      SingleAttemptTimeout: 1 * time.Second,
      RetryPolicy: &lifecycle.RetryPolicy{
        BackoffCoefficient: 2,
        MaximumAttempts:    10,
      },
    },
  },
  Identify: analytics.Identify{
    UserID: "f373b459-0959-4217-a3a6-4d4bf4304682",
    Traits: map[string]any{
      "first_name": "Elliot",
      "last_name":  "Anderson",
      "email":      "elliot.anderson@evil.corp",
    },
  },
}
```

### Execute a workflow

Workflows are mainly designed to be run as child workflows, but can also be
executed as traditional workflows like so:
```go
_, _ = c.ExecuteWorkflow(ctx, opts, "mailchimp(analytics).Identify", input)
```

### Execute an activity

Activities are exposed so you can use them inside your own workflows as well. In
a single line of code within a workflow you can leverage an activity exposed by
this ecosystem so you don't need to maintain and test its business logic:
```go
var result analytics.OutputIdentify
_ = workflow.ExecuteActivity(ctx, "mailchimp(analytics).Identify.Request", input).Get(ctx, &result)
```

If doing so, we strongly advise to call the local activity `Validation` first!
Otherwise the input might not be valid.
