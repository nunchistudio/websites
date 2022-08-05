---
location: "/integrations/nats/documentation/nats.md"
title: "NATS"

goref:
  - "integrations/nats"
---

# {% $markdoc.frontmatter.title %}

The Temporal Land NATS integration allows to leverage NATS as a fault-tolerant
Integration as a Service.

## Configuration

### Environment variables

The following environment variables are required in the Temporal worker:

```bash
# The NATS server URL to connect to.
NATS_SERVER_URL=nats://127.0.0.1:4222
```

## Specifications

The NATS integration leverages the following specifications. Please refer
to each guide for details and example.

{% card title="Topic" href="/integrations/nats-topic" %}
  The NATS integration leverages the topic specification.
{% /card %}
