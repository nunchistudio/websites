---
location: "/integration/rest"
title: "rest"
---

# rest

```go
import "go.nunchi.studio/helix/integration/rest"
```

Package rest exposes opinionated HTTP REST resources respecting the standards of the net/http package. In addition to a strong association with OpenTelemetry, it comes with OpenAPI support as well for request/response validation.

## Index

- [func ParamsFromContext\(ctx context.Context\) \(map\[string\]string, bool\)](<#ParamsFromContext>)
- [type Config](<#Config>)
- [type ConfigOpenAPI](<#ConfigOpenAPI>)
- [type REST](<#REST>)
  - [func New\(cfg Config\) \(REST, error\)](<#New>)
- [type Response](<#Response>)


## func ParamsFromContext

```go
func ParamsFromContext(ctx context.Context) (map[string]string, bool)
```

ParamsFromContext returns request's params found in the context passed, if any. Returns true if some params are present, false otherwise.

## type Config

Config is used to configure the HTTP REST integration.

```go
type Config struct {

    // Address is the HTTP address to listen on.
    //
    // Default:
    //
    //   ":8080"
    Address string `json:"address"`

    // Middleware allows to wrap the built-in HTTP handler with a custom one, for
    // adding a chain of middlewares.
    Middleware func(next http.Handler) http.Handler `json:"-"`

    // Healthcheck allows to define custom logic for the healthcheck endpoint at:
    //
    //   GET /health
    //
    // It should return 200 if service is healthy, or 5xx if an error occured.
    // Returns 200 by default.
    Healthcheck func(req *http.Request) int `json:"-"`

    // OpenAPI configures OpenAPI behavior within the REST API.
    OpenAPI ConfigOpenAPI `json:"openapi"`

    // TLSConfig configures TLS for the HTTP server. Only CertFile and KeyFile
    // are took into consideration. Filenames containing a certificate and matching
    // private key for the server must be provided. If the certificate is signed
    // by a certificate authority, the CertFile should be the concatenation of the
    // server's certificate, any intermediates, and the CA's certificate.
    TLS integration.ConfigTLS `json:"tls"`
}
```

## type ConfigOpenAPI

ConfigOpenAPI configures OpenAPI behavior within the REST API. When enabled, HTTP requests and responses are automatically validated againt the description passed. If a request is not valid, a 4xx error is returned to the client. If a response is not valid, an error is logged but the response is still returned to the client.

```go
type ConfigOpenAPI struct {

    // Enabled enables OpenAPI within the REST API.
    Enabled bool `json:"enabled"`

    // Description is a path to a local file or a URL containing the OpenAPI
    // description.
    //
    // Examples:
    //
    //   "./descriptions/openapi.yaml"
    //   "http://domain.tld/openapi.yaml"
    Description string `json:"description,omitempty"`
}
```

## type REST

REST exposes the HTTP REST API functions.

```go
type REST interface {
    GET(path string, handler http.HandlerFunc)
    HEAD(path string, handler http.HandlerFunc)
    DELETE(path string, handler http.HandlerFunc)
    OPTIONS(path string, handler http.HandlerFunc)
    PATCH(path string, handler http.HandlerFunc)
    POST(path string, handler http.HandlerFunc)
    PUT(path string, handler http.HandlerFunc)
}
```

### func New

```go
func New(cfg Config) (REST, error)
```

New tries to build a new HTTP API server for Config. Returns an error if Config or OpenAPI description are not valid.

## type Response

Response is the JSON object every HTTP responses shall return.

```go
type Response struct {
    Status string            `json:"status"`
    Error  *errorstack.Error `json:"error,omitempty"`
    Data   any               `json:"data,omitempty"`
}
```

