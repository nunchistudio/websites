---
location: "/integrations/rabbitmq/documentation/rabbitmq.md"
title: "RabbitMQ"

goref:
  - "integrations/rabbitmq"
---

# {% $markdoc.frontmatter.title %}

The Temporal Land RabbitMQ integration allows to leverage RabbitMQ as a
fault-tolerant Integration as a Service.

## Configuration

### Environment variables

The following environment variables are required in the Temporal worker:

```bash
# The RabbitMQ server URL to connect to.
RABBIT_SERVER_URL=amqp://guest:guest@127.0.0.1:5672/
```

## Specifications

The RabbitMQ integration leverages the following specifications. Please refer
to each guide for details and example.

{% card title="Topic" href="/integrations/rabbitmq-topic" %}
  The RabbitMQ integration leverages the topic specification.
{% /card %}
