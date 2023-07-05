---
location: "/errorstack"
title: "errorstack"
---

# errorstack

```go
import "go.nunchi.studio/helix/errorstack"
```

Package errorstack exposes a set of utilities for consistent error handling in the helix.go ecosystem. Every package in helix.go relies on this one.

This package must not import any other package of this ecosystem.

## Index

- [type Error](<#Error>)
  - [func New\(message string, opts ...With\) \*Error](<#New>)
  - [func NewFromError\(existing error, opts ...With\) \*Error](<#NewFromError>)
  - [func \(err \*Error\) Error\(\) string](<#Error.Error>)
  - [func \(err \*Error\) HasChildren\(\) bool](<#Error.HasChildren>)
  - [func \(err \*Error\) HasValidations\(\) bool](<#Error.HasValidations>)
  - [func \(err \*Error\) WithChildren\(children ...error\) error](<#Error.WithChildren>)
  - [func \(err \*Error\) WithValidations\(validations ...Validation\) \*Error](<#Error.WithValidations>)
- [type Validation](<#Validation>)
- [type With](<#With>)
  - [func WithIntegration\(inte string\) With](<#WithIntegration>)


## type [Error](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/error.go#L18-L42>)

Error implements the Go native error type and is designed for handling errors in the helix.go ecosystem. When exposing errors to clients \(such as via HTTP API\), the root error should not give away too much information such as internal messages.

```go
type Error struct {

    // Integration is the name of the integration returning the error, if applicable.
    // Omit integration when working with JSON: we don't want to give internal
    // information to clients consuming HTTP APIs.
    //
    // Examples:
    //
    //   "nats"
    //   "vault"
    Integration string `json:"-"`

    // Message is the top-level message of the error.
    Message string `json:"message"`

    // Validations represents a list of failed configuration validations. This is
    // used when a Integration's configuration encountered errors related to values
    // set by clients.
    Validations []Validation `json:"validations,omitempty"`

    // Children holds child errors encountered in cascade related to the current
    // error. Omit children errors when working with JSON: we don't want to give
    // internal information to clients consuming HTTP APIs.
    Children []error `json:"-"`
}
```

### func [New](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/error.go#L63>)

```go
func New(message string, opts ...With) *Error
```

New returns a new error given the message and options passed.

### func [NewFromError](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/error.go#L79>)

```go
func NewFromError(existing error, opts ...With) *Error
```

NewFromError returns a new error given the existing error and options passed.

### func \(\*Error\) [Error](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/error.go#L131>)

```go
func (err *Error) Error() string
```

Error returns the stringified version of the error, including its validation failures.

### func \(\*Error\) [HasChildren](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/error.go#L123>)

```go
func (err *Error) HasChildren() bool
```

HasChildren indicates if an error caused other \(a.k.a. children\) errors.

### func \(\*Error\) [HasValidations](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/error.go#L107>)

```go
func (err *Error) HasValidations() bool
```

HasValidations indicates if an error encountered validation failures.

### func \(\*Error\) [WithChildren](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/error.go#L115>)

```go
func (err *Error) WithChildren(children ...error) error
```

WithChildren adds a list of child errors encountered related to the current error.

### func \(\*Error\) [WithValidations](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/error.go#L99>)

```go
func (err *Error) WithValidations(validations ...Validation) *Error
```

WithValidations adds validation failures to an error.

## type [Validation](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/error.go#L47-L58>)

Validation holds some details about a validation failure.

```go
type Validation struct {

    // Message is the cause of the validation failure.
    Message string `json:"message"`

    // Path represents the path to the key where the validation failure occurred.
    //
    // Example:
    //
    //   []string{"Options", "Producer", "MaxRetries"}
    Path []string `json:"path,omitempty"`
}
```

## type [With](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/with.go#L6>)

With allows to set optional values when creating a new error with New.

```go
type With func(*Error)
```

### func [WithIntegration](<https://github.com/nunchistudio/helix.go/blob/main/errorstack/with.go#L11>)

```go
func WithIntegration(inte string) With
```

WithIntegration sets the integration at the origin of the error.

