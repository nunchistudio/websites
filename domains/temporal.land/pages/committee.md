---
location: "/COMMITTEE.md"
title: "Temporal Land Committee"
---

# {% $markdoc.frontmatter.title %}

Temporal Land is governed by the **Temporal Land Committee** (TLC). The TLC meets
virtually every month. This charter describes the operations of the TLC.

There is a primary Working Group, where all the main decisions are made regarding
the Temporal Land project. Where an area of the project needs more time or is of
interest to a subset of the Working Group membership, then a sub-Working Group
will be formed for that specific area. The current Sub-Working Groups are:
- `temporal-aas`: CLI and production-ready infrastructure for managing Temporal
  as a Service.
- `temporal-sqlops`: CLI to manage operations and migrations on top of Temporal 
  Land SQL integrations.

## Mission

The TLC's purpose is to discuss, give guidance to, and enable collaboration on
current development efforts for Temporal Land and related projects. The TLC will
also include the discussion of shared community goals for Temporal Land.
Additionally, the TLC will produce supporting materials and best practices for
end-users.

The mission of the TLC is:
- To collaborate on areas related to developing, managing, and operating Temporal
  Land.
- To develop informational resources like guides, tutorials, and white papers to
  give the community an understanding of best practices, trade-offs, and value
  adds as it relates to deploying, operating, and managing applications with
  Temporal Land.
- To identify suitable projects and gaps in the ecosystem for future collaboration
  and coordination with those projects.

### Areas in scope

The TLC focuses on the following end-user related topics:
- Developing, managing, and operating Temporal and Temporal Land.
- Design, definition, and development of new specifications and integrations.
- Temporal Land delivery and release management.
- Temporal Land management and operations.

The Working Group will work on developing best practices, fostering collaboration
between related projects, and working on improving tool interoperability.
Additionally, the Working Group will propose new initiatives and projects when
capability gaps in the current ecosystem are defined.

### Areas out of scope

Anything not explicitly considered in the scope above. Example include:
- Development related to Temporal and Temporal SDKs.

## Governance

### Operations

The TLC Working Group is run and managed by the following Chairs:
- Loïc Saint-Roch (Nunchi, Clearbit)

The referenced names and Chair positions will be edited in-place as Chairs are
added, removed, or replaced. See the « [Roles of Chairs](#role-of-chairs) »
section for more information.

The main [`temporal-land`](https://github.com/nunchistudio/temporal-land)
repository will be the authoritative archive for the primary Working Group
membership list, code, documentation, and decisions made. Each Sub-Working Group
can have its own repository when applicable.

The appropriate Slack channels will be used as a place to call for and publish
group decisions, and to hold discussions in general.

The GitHub Sponsors Email Updates will be used as a place to publish group
decisions as well.

### Membership

To be part of the TLC, a member (or the company they work for) must [sponsor the
Nunchi organisation on GitHub](https://github.com/sponsors/nunchistudio) through
the « **Temporal Land Committee** » tier or higher. Involving a company both
technically and financially leads to a stronger collaboration.

Membership are automatically stopped when sponsorship via GitHub is canceled.

### Decision process

This group will seek consensus decisions. After public discussion and consideration
of different opinions, the Chair and/or Co-Chair will record a decision and
summarize any objections.

All Working Group members who have joined the group at least 21 days prior to
the vote are eligible to vote. This is to prevent people from rallying outside
supporters for their desired outcome.

When the group comes to a decision in a meeting, the decision is tentative. Any
group participant may object to a decision reached at a meeting within 7 days of
publication of the decision on the GitHub Issue and/or announcement on the Slack
channel. That decision must then be confirmed on the GitHub Issue and on the
Slack channel. This is a Call for Agreement.

The Call for Agreement, when a decision is required, will be posted as a GitHub
Issue or Pull Request, and must be announced both on the GitHub Sponsors Email
Updates and the Slack channel. It is an instrument to reach a time-bounded lazy
consensus approval and requires a voting period of no less than 7 days to be
defined (including a specific date and time in UTC).

Each Call for Agreement will be considered independently, except for elections
of Chairs.

The Chairs will submit all Calls for Agreement that are not vague, unprofessional,
off-topic, or lacking sufficient detail to determine what is being agreed.

In the event that a Call for Agreement falls under the delegated authority or
within a chartered Sub-Working Group, the Call for Agreement must be passed
through the Sub-Working Group before receiving Working Group consideration.

A Call for Agreement may require quorum of Chairs under the circumstances outlined
in the Charter and Governing Documents section.

A Call for Agreement is mandatory when:
- A Chair determines that the topic requires a Call for Agreement.
- When petitioned by members of the Working Group and submitted to the Chairs to
  call a vote unless rejected for cause.
- Technical decisions that add, remove, or change dependencies and requirements.
- Revoke a previous decision made by the Call for Agreement process.
- Approval of a Sub-Working Group when such Sub-Working Group has any delegated
  authority.

Once the Call for Agreement voting period has elapsed, all votes are counted,
with at least a 51% majority of votes needed for consensus. A Chair will then
declare the agreement "accepted" or "declined", ending the Call for Agreement.

Once rejected, a Call for Agreement must be revised before re-submission for a
subsequent vote. All rejected Calls for Agreement will be reported to the Working
Group as rejected.

## Organizational roles

### Role of Chairs

The primary role of Chairs is to run operations and the governance of the group.
The Chairs are responsible for:
- Setting the agenda for meetings.
- Extending discussion via asynchronous communication to be inclusive of members
  who cannot attend a specific meeting time.
- Scheduling discussing of proposals that have been submitted.
- Asking for new proposals to be made to address an identified need.
- Oversee disciplinary action for members. The Chairs have the authority to
  declare a member inactive and expel members for cause.
- Chairs will serve for one-year revolving terms and will be approved using the
  Condorcet Method. Upon the expiration of a Chair’s term, it will continue for
  another year, unless challenged.

The terms for founding Chairs start on the approval of this charter.

When no candidate has submitted their name for consideration, the current Chairs
may appoint an acting Chair until a candidate comes forward.

Chairs must be active members. Any inactivity, disability, or ineligibility results
in immediate removal.

Additional Chairs may be added through the Call for Agreement process so long as
the existing number of Chairs is odd.

Chairs may be removed by petition to the Working Group through the Call for
Agreement process outlined above.

### Sub-Working Groups

Each Sub-Working Group must have a Chair working as an active member. Under the
mandate of the Working Group, each Sub-Working Group will have the autonomy to
establish their own meeting times and management processes, while still following
the Working Group membership rules. Each Sub-Working Group will also have the
authority to make in-scope decisions as delegated by the Working Group.
