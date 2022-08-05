---
location: "/integrations/aws/documentation/aws-topic.md"
title: "AWS: Publish messages to SNS/SQS"

goref:
  - "integrations/aws"
  - "specifications/topic"
---

# {% $markdoc.frontmatter.title %}

{% partial file="specifications/integration-topic.md" variables={
    mod: "aws",
    name: "SNS/SQS",
    config: {
      Topic: "arn:aws:sns:us-east-2:123456789012:my-topic",
    },
  }
/%} 
