---
location: "/documentation/specifications.md"
title: "Specifications"
---

# {% $markdoc.frontmatter.title %}

Specifications are Go modules allowing integrations of a same kind to share as
much similarities as possible. This allows a very strong consistency across
integrations. For example, the [MongoDB integration](/integrations/mongodb)
leverages the NoSQL specification, which is also used by
[AWS DynamoDB](/integrations/aws), [Azure CosmosDB](/integrations/azure), and
[Google Firestore](/integrations/google). This way, these integrations expose
the exact same APIs for operating on documents. It's possible for an integration
to implement multiple specifications, or to expose other methods not shared in
a specification.

## List of specifications

### Analytics

The `analytics` specification provides a consistent and unique API for integrations
related to customer data. It's heavily inspired by the well-known
[Segment API](https://segment.com/docs/connections/spec/), giving access to the
following methods:

- **Identify:** Who is the customer?
- **Track:** What are they doing?
- **Group:** What account or organization are they part of?
- **Alias:** What was their past identity?
- **Page:** What web page are they on?
- **Screen:** What application screen are they on?
- **Delete:** Suppress (and optionally deletes) all data related to a user.

{% callout iconType="iInCircle" %}
  The analytics specification is not implemented as originally described in the
  Segment documentation. We have updated it to better match the requirements and
  consistency of the Temporal Land ecosystem.
{% /callout %}

### Bucket

The `bucket` specification provides a consistent and unique API for bucket
integrations. It mainly allows to write to and delete from a bucket. This gives
access to the following methods:
- **Write** writes data to a bucket at a given path.
- **Delete** deletes data from a bucket.

### NoSQL

The `nosql` specification provides a consistent and unique API for NoSQL
integrations, allowing to manage documents. This gives access to the following
methods:
- **Create** creates a new document.
- **Put** puts a document whether or not it already exists.
- **Replace** replaces an existing document.
- **Update** applies a set of modifications to a document.
- **Delete** deletes a document.

### SQL-like

The `sqlike` specification provides a consistent and unique API for SQL-like
integrations. This gives access to the following methods:
- **Queries** executes a list of queries within a transaction to ensure atomicity.

{% callout iconType="iInCircle" %}
  This package could have been designed as an integration. But we would have lost
  the possibility for a SQL-like database to easily leverage other specifications
  such as Analytics or Infrastructure-as-Code (coming soon).
{% /callout %}

### Topic

The `topic` specification provides a consistent and unique API for Pub/Sub
integrations, allowing to publish messages to a topic. This gives access to the
following methods:
- **Publish** publishes a message to a topic.
