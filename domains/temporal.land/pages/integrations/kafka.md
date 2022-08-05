---
location: "/integrations/kafka/documentation/kafka.md"
title: "Kafka"

goref:
  - "integrations/kafka"
---

# {% $markdoc.frontmatter.title %}

The Temporal Land Kafka integration allows to leverage Kafka as a fault-tolerant
Integration as a Service.

## Configuration

### Environment variables

The following environment variables are required in the Temporal worker:

```bash
# The Kafka broker URLs to connect to.
KAFKA_BROKERS=127.0.0.1:9092,127.0.0.1:9093,127.0.0.1:9094
```

## Specifications

The Kafka integration leverages the following specifications. Please refer
to each guide for details and example.

{% card title="Topic" href="/integrations/kafka-topic" %}
  The Kafka integration leverages the topic specification.
{% /card %}
