---
location: "/integrations/nats/documentation/nats-topic.md"
title: "NATS: Publish messages to a subject"

goref:
  - "integrations/nats"
  - "specifications/topic"
---

# {% $markdoc.frontmatter.title %}

{% partial file="specifications/integration-topic.md" variables={
    mod: "nats",
    name: "NATS",
    config: {
      Topic: "my-subject",
    },
  }
/%} 
