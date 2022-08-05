---
location: "/integrations/rabbitmq/documentation/rabbitmq-topic.md"
title: "RabbitMQ: Publish messages to an exchange"

goref:
  - "integrations/rabbitmq"
  - "specifications/topic"
---

# {% $markdoc.frontmatter.title %}

{% partial file="specifications/integration-topic.md" variables={
    mod: "rabbitmq",
    name: "RabbitMQ",
    config: {
      Topic: "my-exchange",
    },
  }
/%} 
