---
location: "/integrations/mailchimp/documentation/mailchimp-analytics.md"
title: "MailChimp: Manage customer data"

goref:
  - "integrations/mailchimp"
  - "specifications/analytics"
---

# {% $markdoc.frontmatter.title %}

## Workflows and activities

{% callout title="Integration name" iconType="accessibility" %}
  `custom` is the name of the integration set in `analytics.Config`. See example
  below for details.
{% /callout %}

The MailChimp integration recognizes `first_name`, `last_name` and `email` as
special traits, so we will translate those for you to match the Mailchimp accepted
field names. Mailchimp includes these fields by default when you create a list.

By leveraging the analytics specification, end-users can use MailChimp as a
fault-tolerant Integration as a Service. They have access to the following
Temporal workflows and activities.

{% accordion title="Identify a user" %}
  This workflow lets you subscribe a user to a list. If double optin is enabled,
  it will send a confirmation email to that user before subscribing them and that
  email will not be tagged with a subscriber status of pending

  - Workflow name: `custom(analytics).Identify`
  - Input type: [`analytics.InputIdentify`](https://pkg.go.dev/go.temporal.land/specifications/analytics#InputIdentify)
  - Output type: [`analytics.OutputIdentify`](https://pkg.go.dev/go.temporal.land/specifications/analytics#OutputIdentify)
  - Activities names:
    - `custom(analytics).Identify.Validation` (local)
    - `custom(analytics).Identify.Execution`
{% /accordion %}

{% accordion title="Delete a user" %}
  This workflow lets you remove a user from a list.

  - Workflow name: `custom(analytics).Delete`
  - Input type: [`analytics.InputDelete`](https://pkg.go.dev/go.temporal.land/specifications/analytics#InputDelete)
  - Output type: [`analytics.OutputDelete`](https://pkg.go.dev/go.temporal.land/specifications/analytics#OutputDelete)
  - Activities names:
    - `custom(analytics).Delete.Validation` (local)
    - `custom(analytics).Delete.Execution`
{% /accordion %}

{% partial file="specifications/integration-analytics.md" variables={
    mod: "mailchimp",
    name: "MailChimp",
  }
/%} 
