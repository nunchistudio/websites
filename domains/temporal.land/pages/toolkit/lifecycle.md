---
location: "/toolkit/documentation/lifecycle.md"
title: "Lifecycle's policies"

goref:
  - "toolkit/lifecycle"
---

# {% $markdoc.frontmatter.title %}

When registering a specification for an integration, a suite of `Policies` can
be set. These lifecycle policies are applied by the Temporal Land workflows when
executing their respective activities. This means they are not applied when
executing activities directly outside the workflows provided.

In the example introduced earlier, we set the timeout of the request to 2 seconds:

```go
_ = m.RegisterWithAnalytics(w, analytics.Config{
  Policies: analytics.Policies{
    Request: lifecycle.ActivityPolicy{
      SingleAttemptTimeout: 2 * time.Second,
    },
  },
})
```

This means the Temporal activity executing the HTTP request against the MailChimp
has a timeout for a single attempt of 2 seconds.

Clients can override the `Policies` defined in the worker by the integration.
First, the integration must allow this behavior in the worker:

```go
m, _ := mailchimp.New(ctx, mailchimp.Config{
  Integration: integration.Config{
    Name:                  "mailchimp",
    AllowPoliciesOverride: true,
  },
})
```

Then, a client is able to set custom `Policies` each time a workflow of the
integration (and specification) is executed:

```go
input := analytics.InputIdentify{
  Policies: &analytics.Policies{
    Request: lifecycle.ActivityPolicy{
      SingleAttemptTimeout: 5 * time.Second,
      RetryPolicy: &lifecycle.RetryPolicy{
        BackoffCoefficient: 2,
        MaximumAttempts:    10,
      },
    },
  },
}

_, _ = c.ExecuteWorkflow(ctx, opts, "mailchimp(analytics).Identify", input)
```

`Policies` set by the client are merged and take precedence over the ones defined
in the worker by the integration.
