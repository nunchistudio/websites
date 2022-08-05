---
location: "/toolkit/documentation/event.md"
title: "Event's context"

goref:
  - "toolkit/event"
---

# {% $markdoc.frontmatter.title %}

Every inputs in Temporal Land have a `Context`. It provides useful context about
an event and brings consistency across integrations about events in general.

In a `Context`, some information might be related to a Temporal client executing
workflows and activities, while other informations might be specific to an event
itself.

In a client, a *global* context can be created like this:

```go
gctx, _ := event.NewContext(client, WithGit(), WithLibrary())
gctx.Cloud = &event.ContextCloud{
  Provider: "aws",
  Region:   "us-west-2",
}
```

This *global* context can then be used and merged with a context specific to an
event, like this:

```go
client.ExecuteWorkflow(ctx, opts, "mailchimp(analytics).Identify", analytics.InputIdentify{
  Context: gctx.MergeWith(event.Context{
    Subscription: event.ContextSubscription{
      AccountID:      "b8f460ac-1809-497c-8d69-35e263a41763",
      SubscriptionID: "0278f4f1-9830-404c-9b96-f4017adaa6a0",
      Event:          "identify",
      Value:          "elliot.anderson@evil.corp",
      IncrementBy:    1,
    },
    Locale: "en-US",
  }),
})
```
