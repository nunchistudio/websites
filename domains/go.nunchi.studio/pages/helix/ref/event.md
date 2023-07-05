---
location: "/event"
title: "event"
---

# event

```go
import "go.nunchi.studio/helix/event"
```

Package event exposes some objects and utilities to get/set contextual information about an event. In a distributed architecture where events are flowing across internal services and third\-party integrations, it is highly encouraged to pass an Event through a context.Context in order to trace them from end\-to\-end. helix.go core and integrations relies on contexts to manage logs and traces across services.

This package must not import any other package of this ecosystem.

## Index

- [Constants](<#constants>)
- [func ContextWithEvent\(ctx context.Context, e Event\) context.Context](<#ContextWithEvent>)
- [func ToFlatMap\(e Event\) map\[string\]string](<#ToFlatMap>)
- [type App](<#App>)
- [type Campaign](<#Campaign>)
- [type Cloud](<#Cloud>)
- [type Device](<#Device>)
- [type Event](<#Event>)
  - [func EventFromContext\(ctx context.Context\) \(Event, bool\)](<#EventFromContext>)
  - [func EventFromJSON\(input json.RawMessage\) \(Event, bool\)](<#EventFromJSON>)
- [type Library](<#Library>)
- [type Location](<#Location>)
- [type Network](<#Network>)
- [type OS](<#OS>)
- [type Page](<#Page>)
- [type Referrer](<#Referrer>)
- [type Screen](<#Screen>)
- [type Subscription](<#Subscription>)


## Constants


Example:

```
{
  "key": "value",
  "event": {
    "name": "subscribed"
  }
}
```

```go
const Key string = "event"
```

## func [ContextWithEvent](<https://github.com/nunchistudio/helix.go/blob/main/event/context.go#L36>)

```go
func ContextWithEvent(ctx context.Context, e Event) context.Context
```

ContextWithEvent returns a copy of the context passed with the Event associated to it.

## func [ToFlatMap](<https://github.com/nunchistudio/helix.go/blob/main/event/json.go#L92>)

```go
func ToFlatMap(e Event) map[string]string
```

ToFlatMap returns a flatten map for a given Event. Keys are prefixed with "event.", and struct level are seperated by a ".". All values are stringified.

This is primarly designed for the telemetry packages, allowing to pass contextual information about an event using Go's context or HTTP headers, but can be useful in some other use cases.

Example:

```
Event{
  Name:   "subscribed",
  UserID: "user_2N6YZQLcYy2SPtmHiII69yHp0WE,
  Params: url.Values{
    "filters": []string{"a", "b", "c"},
  },
  Subscription: Subscription{
    ID:         "sub_2N6YZQXgQAv87zMmvlHxePCSsRs",
    CustomerID: "cus_2N6YZMi3sBDPQBZrZJoYBwhNQNv",
    PlanID:     "plan_2N6YZSE1SkWT9DrlXlswLhJ5K5Q",
  },
}
```

Will produce:

```
map[string]string = {
  "event.name"                     = "subscribed",
  "event.user_id"                  = "user_2N6YZQLcYy2SPtmHiII69yHp0WE,
  "event.params.filters.0"         = "a",
  "event.params.filters.1"         = "b",
  "event.params.filters.2"         = "c",
  "event.subscription.id"          = "sub_2N6YZQXgQAv87zMmvlHxePCSsRs",
  "event.subscription.customer_id" = "cus_2N6YZMi3sBDPQBZrZJoYBwhNQNv",
  "event.subscription.plan_id"     = "plan_2N6YZSE1SkWT9DrlXlswLhJ5K5Q",
}
```

## type [App](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L19-L23>)

App holds the details about the client application executing the event.

```go
type App struct {
    Name    string `json:"name,omitempty"`
    Version string `json:"version,omitempty"`
    BuildID string `json:"build_id,omitempty"`
}
```

## type [Campaign](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L37-L43>)

Campaign holds the details about the marketing campaign from which a client is executing the event from.

```go
type Campaign struct {
    Name    string `json:"name,omitempty"`
    Source  string `json:"source,omitempty"`
    Medium  string `json:"medium,omitempty"`
    Term    string `json:"term,omitempty"`
    Content string `json:"content,omitempty"`
}
```

## type [Cloud](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L60-L66>)

Cloud holds the details about the cloud provider from which the client is executing the event.

```go
type Cloud struct {
    Provider  string `json:"provider,omitempty"`
    Service   string `json:"service,omitempty"`
    Region    string `json:"region,omitempty"`
    ProjectID string `json:"project_id,omitempty"`
    AccountID string `json:"account_id,omitempty"`
}
```

## type [Device](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L71-L79>)

Device holds the details about the user's device.

```go
type Device struct {
    ID            string `json:"id,omitempty"`
    Manufacturer  string `json:"manufacturer,omitempty"`
    Model         string `json:"model,omitempty"`
    Name          string `json:"name,omitempty"`
    Type          string `json:"type,omitempty"`
    Version       string `json:"version,omitempty"`
    AdvertisingID string `json:"advertising_id,omitempty"`
}
```

## type [Event](<https://github.com/nunchistudio/helix.go/blob/main/event/event.go#L27-L51>)

Event is a dictionary of information that provides useful context about an event. An Event shall be present as much as possible when passing data across services, allowing to better understand the origin of an event.

Event should be used for data that you’re okay with potentially exposing to anyone who inspects your network traffic. This is because it’s stored in HTTP headers for distributed tracing. If your relevant network traffic is entirely within your own network, then this caveat may not apply.

This is heavily inspired by the following references, and was adapted to better fit this ecosystem:

- The Segment's Context described at: https://segment.com/docs/connections/spec/common/#context
- The Elastic Common Schema described at: https://www.elastic.co/guide/en/ecs/current/ecs-field-reference.html

```go
type Event struct {
    Name         string            `json:"name,omitempty"`
    Meta         map[string]string `json:"meta,omitempty"`
    Params       url.Values        `json:"params,omitempty"`
    IsAnonymous  bool              `json:"is_anonymous"`
    UserID       string            `json:"user_id,omitempty"`
    GroupID      string            `json:"group_id,omitempty"`
    Subscription Subscription      `json:"subscription,omitempty"`
    App          App               `json:"app,omitempty"`
    Library      Library           `json:"library,omitempty"`
    Campaign     Campaign          `json:"campaign,omitempty"`
    Referrer     Referrer          `json:"referrer,omitempty"`
    Cloud        Cloud             `json:"cloud,omitempty"`
    Device       Device            `json:"device,omitempty"`
    OS           OS                `json:"os,omitempty"`
    Location     Location          `json:"location,omitempty"`
    Network      Network           `json:"network,omitempty"`
    Page         Page              `json:"page,omitempty"`
    Screen       Screen            `json:"screen,omitempty"`
    IP           net.IP            `json:"ip,omitempty"`
    Locale       string            `json:"locale,omitempty"`
    Timezone     string            `json:"timezone,omitempty"`
    UserAgent    string            `json:"user_agent,omitempty"`
    Timestamp    time.Time         `json:"timestamp,omitempty"`
}
```

### func [EventFromContext](<https://github.com/nunchistudio/helix.go/blob/main/event/context.go#L21>)

```go
func EventFromContext(ctx context.Context) (Event, bool)
```

EventFromContext returns the Event found in the context passed, if any. If no Event has been found, it tries to find and build one if a Baggage was found in the context. Returns true if an Event has been found, false otherwise.

### func [EventFromJSON](<https://github.com/nunchistudio/helix.go/blob/main/event/json.go#L30>)

```go
func EventFromJSON(input json.RawMessage) (Event, bool)
```

EventFromJSON returns the Event found at the "event" key in the JSON\-encoded data passed, if any. Returns true if an Event has been found, false otherwise.

## type [Library](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L28-L31>)

Library holds the details of the SDK used by the client executing the event.

```go
type Library struct {
    Name    string `json:"name,omitempty"`
    Version string `json:"version,omitempty"`
}
```

## type [Location](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L93-L100>)

Location holds the details about the user's location.

```go
type Location struct {
    City      string  `json:"city,omitempty"`
    Country   string  `json:"country,omitempty"`
    Region    string  `json:"region,omitempty"`
    Latitude  float64 `json:"latitude,omitempty"`
    Longitude float64 `json:"longitude,omitempty"`
    Speed     float64 `json:"speed,omitempty"`
}
```

## type [Network](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L105-L110>)

Network holds the details about the user's network.

```go
type Network struct {
    Bluetooth bool   `json:"bluetooth,omitempty"`
    Cellular  bool   `json:"cellular,omitempty"`
    WIFI      bool   `json:"wifi,omitempty"`
    Carrier   string `json:"carrier,omitempty"`
}
```

## type [OS](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L84-L88>)

OS holds the details about the user's OS.

```go
type OS struct {
    Name    string `json:"name,omitempty"`
    Arch    string `json:"arch,omitempty"`
    Version string `json:"version,omitempty"`
}
```

## type [Page](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L115-L121>)

Page holds the details about the webpage from which the event is triggered from.

```go
type Page struct {
    Path     string `json:"path,omitempty"`
    Referrer string `json:"referrer,omitempty"`
    Search   string `json:"search,omitempty"`
    Title    string `json:"title,omitempty"`
    URL      string `json:"url,omitempty"`
}
```

## type [Referrer](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L49-L54>)

Referrer holds the details about the marketing referrer from which a client is executing the event from.

```go
type Referrer struct {
    Type string `json:"type,omitempty"`
    Name string `json:"name,omitempty"`
    URL  string `json:"url,omitempty"`
    Link string `json:"link,omitempty"`
}
```

## type [Screen](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L127-L131>)

Screen holds the details about the app's screen from which the event is triggered from.

```go
type Screen struct {
    Density int64 `json:"density,omitempty"`
    Width   int64 `json:"width,omitempty"`
    Height  int64 `json:"height,omitempty"`
}
```

## type [Subscription](<https://github.com/nunchistudio/helix.go/blob/main/event/objects.go#L7-L14>)

Subscription holds the details about the account/customer from which the event has been triggered. It's useful for tracking customer usages.

```go
type Subscription struct {
    ID          string            `json:"id,omitempty"`
    CustomerID  string            `json:"customer_id,omitempty"`
    PlanID      string            `json:"plan_id,omitempty"`
    Usage       string            `json:"usage,omitempty"`
    IncrementBy float64           `json:"increment_by,omitempty"`
    Flags       map[string]string `json:"flags,omitempty"`
}
```

