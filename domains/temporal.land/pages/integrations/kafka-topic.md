---
location: "/integrations/kafka/documentation/kafka-topic.md"
title: "Kafka: Publish messages to a topic"

goref:
  - "integrations/kafka"
  - "specifications/topic"
---

# {% $markdoc.frontmatter.title %}

{% partial file="specifications/integration-topic.md" variables={
    mod: "kafka",
    name: "Kafka",
    config: {
      Topic: "my-topic",
    },
  }
/%} 
