---
location: "/integrations/segment/documentation/segment-analytics.md"
title: "Segment: Manage customer data"

goref:
  - "integrations/segment"
  - "specifications/analytics"
---

# {% $markdoc.frontmatter.title %}

## Workflows and activities

{% callout title="Integration name" iconType="accessibility" %}
  `custom` is the name of the integration set in `analytics.Config`. See example
  below for details.
{% /callout %}

By leveraging the analytics specification, end-users can use Segment as a
fault-tolerant Integration as a Service. They have access to the following
Temporal workflows and activities.

{% accordion title="Identify a user" %}
  This workflow allows to forward the `Identify` method to the Segment API.

  - Workflow name: `custom(analytics).Identify`
  - Input type: [`analytics.InputIdentify`](https://pkg.go.dev/go.temporal.land/specifications/analytics#InputIdentify)
  - Output type: [`analytics.OutputIdentify`](https://pkg.go.dev/go.temporal.land/specifications/analytics#OutputIdentify)
  - Activities names:
    - `custom(analytics).Identify.Validation` (local)
    - `custom(analytics).Identify.Execution`
{% /accordion %}

{% accordion title="Track a user" %}
  This workflow allows to forward the `Track` method to the Segment API.

  - Workflow name: `custom(analytics).Track`
  - Input type: [`analytics.InputTrack`](https://pkg.go.dev/go.temporal.land/specifications/analytics#InputTrack)
  - Output type: [`analytics.OutputTrack`](https://pkg.go.dev/go.temporal.land/specifications/analytics#OutputTrack)
  - Activities names:
    - `custom(analytics).Track.Validation` (local)
    - `custom(analytics).Track.Execution`
{% /accordion %}

{% accordion title="Group a user" %}
  This workflow allows to forward the `Group` method to the Segment API.

  - Workflow name: `custom(analytics).Group`
  - Input type: [`analytics.InputGroup`](https://pkg.go.dev/go.temporal.land/specifications/analytics#InputGroup)
  - Output type: [`analytics.OutputGroup`](https://pkg.go.dev/go.temporal.land/specifications/analytics#OutputGroup)
  - Activities names:
    - `custom(analytics).Group.Validation` (local)
    - `custom(analytics).Group.Execution`
{% /accordion %}

{% accordion title="Alias a user" %}
  This workflow allows to forward the `Alias` method to the Segment API.

  - Workflow name: `custom(analytics).Alias`
  - Input type: [`analytics.InputAlias`](https://pkg.go.dev/go.temporal.land/specifications/analytics#InputAlias)
  - Output type: [`analytics.OutputAlias`](https://pkg.go.dev/go.temporal.land/specifications/analytics#OutputAlias)
  - Activities names:
    - `custom(analytics).Alias.Validation` (local)
    - `custom(analytics).Alias.Execution`
{% /accordion %}

{% accordion title="Page view" %}
  This workflow allows to forward the `Page` method to the Segment API.

  - Workflow name: `custom(analytics).Page`
  - Input type: [`analytics.InputPage`](https://pkg.go.dev/go.temporal.land/specifications/analytics#InputPage)
  - Output type: [`analytics.OutputPage`](https://pkg.go.dev/go.temporal.land/specifications/analytics#OutputPage)
  - Activities names:
    - `custom(analytics).Page.Validation` (local)
    - `custom(analytics).Page.Execution`
{% /accordion %}

{% accordion title="Screen view" %}
  This workflow allows to forward the `Screen` method to the Segment API.

  - Workflow name: `custom(analytics).Screen`
  - Input type: [`analytics.InputScreen`](https://pkg.go.dev/go.temporal.land/specifications/analytics#InputScreen)
  - Output type: [`analytics.OutputScreen`](https://pkg.go.dev/go.temporal.land/specifications/analytics#OutputScreen)
  - Activities names:
    - `custom(analytics).Screen.Validation` (local)
    - `custom(analytics).Screen.Execution`
{% /accordion %}

{% accordion title="Delete a user" %}
  This workflow allows to remove and suppress a user using the Segment Config API.

  - Workflow name: `custom(analytics).Delete`
  - Input type: [`analytics.InputDelete`](https://pkg.go.dev/go.temporal.land/specifications/analytics#InputDelete)
  - Output type: [`analytics.OutputDelete`](https://pkg.go.dev/go.temporal.land/specifications/analytics#OutputDelete)
  - Activities names:
    - `custom(analytics).Delete.Validation` (local)
    - `custom(analytics).Delete.Execution`
{% /accordion %}

{% partial file="specifications/integration-analytics.md" variables={
    mod: "segment",
    name: "Segment",
  }
/%} 
