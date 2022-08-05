---
location: "/integrations/google/documentation/google-topic.md"
title: "Google Cloud: Publish messages to Pub/Sub"

goref:
  - "integrations/google"
  - "specifications/topic"
---

# {% $markdoc.frontmatter.title %}

{% partial file="specifications/integration-topic.md" variables={
    mod: "google",
    name: "Pub/Sub",
    config: {
      Topic: "projects/myproject/topics/my-topic",
    },
  }
/%} 
