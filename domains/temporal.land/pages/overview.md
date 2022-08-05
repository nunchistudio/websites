---
location: "/documentation/overview.md"
title: "What is Temporal Land"
---

# {% $markdoc.frontmatter.title %}

Welcome to the **Temporal Land** documentation!

[Temporal](https://temporal.io/) makes it simpler to write, run, and scale
reliable cloud applications. At any point in time, failures can happen. You will
encouter challenges such as durability, reliability, and scalability. Temporal
helps you solve all these challenges for you.

Still, you need to design, write, maintain, and test the business-logic in a
consistent way for interacting with third-party services. It can be a database,
a message broker, an HTTP API, etc. We call them *integrations*.

## Scope

This project is a collection of high-level and opiniated integrations packaged
for working with Temporal. The main goal is to give *developers* a suite of
production-ready Temporal workflows and activities so you don't need to maintain
a collection of integrations and can focus on your mission.

This approach allows to use Temporal as the central and unique piece for workflow
orchestration, delivering a unique developer experience for:
- Integrations as a Service;
- Reliable Cloud Platforms;
- Consistent Data Planes.

**This project doesn't aim to improve, simplify, or be a layer on top of Temporal.**
It aims to improve the developer productivity and experience when working with
Temporal, by offering a consistent production-ready collection of *integrations*
in Go. We therefore assume you are familiar with Go and Temporal to dive into
this ecosystem.

## Concepts

This ecosystem is designed around three main concepts:

- **Integrations** are Go modules interacting with third-party services. Each
  integration exposes Temporal workflows and activities ready to be used from
  a *worker* and executed from a *client*, which can be any kind of application.
  For example, the MongoDB integration offers workflows and activities to write,
  put, update, replace, delete documents in MongoDB.

- **Specifications** are Go modules allowing integrations of a same kind to share
  as much similarities as possible. This allows a very strong consistency across
  integrations. For example, the [MongoDB integration](/integrations/mongodb)
  leverages the NoSQL specification, which is also used by
  [AWS DynamoDB](/integrations/aws), [Azure CosmosDB](/integrations/azure), and
  [Google Firestore](/integrations/google). This way, these integrations expose
  the exact same APIs for operating on documents. It's possible for an integration
  to implement multiple specifications, or to expose other methods not shared in
  a specification.

- The **toolkit** is a Go module providing developers best practices to write
  and consume integrations and specifications. These practices are shared across
  the whole ecosystem for the best developer experience. It includes error handling,
  a common event's context, and an opiniated way to set Temporal activity's options.

In the documentation and in the Go API comments, you will see two others concepts
useful to be described here:

- An **end-user** is a developer working with this ecosystem. It must not be
  confused with a *user*, which could be used in other place such as in the
  analytics specification where *users* are *identified*, *tracked*, etc.

- An **overlying integration** describes the integration leveraging the
  specification in use.

## Design decisions

Before diving more into the project and start using an integration, it might be
useful to understand some of the important design decisions made while building
and maintaining this project.

- **Integrations can implement zero, one, or any number of specifications.** A
  specification only allows to have stronger consistency and better experience
  across integrations for similar sets of features. It must not define the
  complete behavior of an integration.

- **Specifications must not `import` or implicitly rely on an integration.**
  This allows developers to create third-party integrations and still rely on
  the specifications of this ecosystem if desired.

- **End-users must not interact with an underlying specification.** Otherwise,
  end-users would be able to bypass the overlying integration's lifecycle,
  context, and validations. The use of a specification by an integration is almost
  transparent for end-users.

- **Integrations' and specifications' `Config` must not ask end-users for types
  not part of the standard library.** It's up to integrations and specifications
  to abstract all the complexity of third-party libraries away (if applicable).
