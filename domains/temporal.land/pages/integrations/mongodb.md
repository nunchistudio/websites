---
location: "/integrations/mongodb/documentation/mongodb.md"
title: "MongoDB"

goref:
  - "integrations/mongodb"
---

# {% $markdoc.frontmatter.title %}

Integrating MongoDB in your applications is not an easy task, especially if you
wish to ensure durability, scalability, and reliability.

The Temporal Land MongoDB integration allows to leverage MongoDB as a fault-tolerant
Integration as a Service.

## Configuration

### Environment variables

The following environment variables are required in the Temporal worker:

```bash
# The MongoDB connection string.
MONGO_SERVER_URL=mongodb://user:password@host:27017
```

## Specifications

The MongoDB integration leverages the following specifications. Please refer
to each guide for details and example.

{% card title="NoSQL" href="/integrations/mongodb-nosql" %}
  The MongoDB integration leverages the NoSQL specification.
{% /card %}
