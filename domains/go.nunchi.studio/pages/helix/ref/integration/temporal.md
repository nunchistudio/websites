---
location: "/integration/temporal"
title: "temporal"
---

# temporal

```go
import "go.nunchi.studio/helix/integration/temporal"
```

Package temporal exposes an opinionated way to interact with Temporal.

## Index

- [func Connect\(cfg Config\) \(Client, Worker, error\)](<#Connect>)
- [func EventFromActivity\(ctx context.Context\) \(event.Event, bool\)](<#EventFromActivity>)
- [func EventFromWorkflow\(ctx workflow.Context\) \(event.Event, bool\)](<#EventFromWorkflow>)
- [type Client](<#Client>)
- [type Config](<#Config>)
- [type ConfigWorker](<#ConfigWorker>)
- [type ScheduleClient](<#ScheduleClient>)
- [type ScheduleHandle](<#ScheduleHandle>)
- [type Worker](<#Worker>)


## func [Connect](<https://github.com/nunchistudio/helix.go/blob/main/integration/temporal/temporal.go#L33>)

```go
func Connect(cfg Config) (Client, Worker, error)
```

Connect tries to connect to the Temporal server given the Config. Returns an error if Config is not valid or if the connection failed.

## func [EventFromActivity](<https://github.com/nunchistudio/helix.go/blob/main/integration/temporal/context.go#L48>)

```go
func EventFromActivity(ctx context.Context) (event.Event, bool)
```

EventFromActivity tries to retrieve an Event from the activity's context. Returns true if an Event has been found, false otherwise.

If an Event was found, it is added to the span attributes.

## func [EventFromWorkflow](<https://github.com/nunchistudio/helix.go/blob/main/integration/temporal/context.go#L20>)

```go
func EventFromWorkflow(ctx workflow.Context) (event.Event, bool)
```

EventFromWorkflow tries to retrieve an Event from the workflow's context. Returns true if an Event has been found, false otherwise.

If an Event was found, it is added to the span attributes.

## type [Client](<https://github.com/nunchistudio/helix.go/blob/main/integration/temporal/client.go#L27-L51>)

Client exposes an opinionated way to interact with Temporal's client capabilities.

```go
type Client interface {
    ExecuteWorkflow(ctx context.Context, opts client.StartWorkflowOptions, workflowType string, payload ...any) (client.WorkflowRun, error)
    GetWorkflow(ctx context.Context, workflowID string, runID string) client.WorkflowRun
    SignalWorkflow(ctx context.Context, workflowID string, runID string, signalName string, arg any) error
    SignalWithStartWorkflow(ctx context.Context, workflowID string, signalName string, signalArg any, opts client.StartWorkflowOptions, workflowType string, payload any) (client.WorkflowRun, error)
    CancelWorkflow(ctx context.Context, workflowID string, runID string) error
    TerminateWorkflow(ctx context.Context, workflowID string, runID string, reason string) error
    GetWorkflowHistory(ctx context.Context, workflowID string, runID string, isLongPoll bool, filterType enums.HistoryEventFilterType) client.HistoryEventIterator
    CompleteActivity(ctx context.Context, namespace string, workflowID string, runID string, activityID string, result any, err error) error
    RecordActivityHeartbeat(ctx context.Context, namespace string, workflowID string, runID string, activityID string) error

    ListClosedWorkflow(ctx context.Context, request *workflowservice.ListClosedWorkflowExecutionsRequest) (*workflowservice.ListClosedWorkflowExecutionsResponse, error)
    ListOpenWorkflow(ctx context.Context, request *workflowservice.ListOpenWorkflowExecutionsRequest) (*workflowservice.ListOpenWorkflowExecutionsResponse, error)
    ListWorkflow(ctx context.Context, request *workflowservice.ListWorkflowExecutionsRequest) (*workflowservice.ListWorkflowExecutionsResponse, error)
    ListArchivedWorkflow(ctx context.Context, request *workflowservice.ListArchivedWorkflowExecutionsRequest) (*workflowservice.ListArchivedWorkflowExecutionsResponse, error)
    ScanWorkflow(ctx context.Context, request *workflowservice.ScanWorkflowExecutionsRequest) (*workflowservice.ScanWorkflowExecutionsResponse, error)
    CountWorkflow(ctx context.Context, request *workflowservice.CountWorkflowExecutionsRequest) (*workflowservice.CountWorkflowExecutionsResponse, error)
    GetSearchAttributes(ctx context.Context) (*workflowservice.GetSearchAttributesResponse, error)
    QueryWorkflow(ctx context.Context, request *client.QueryWorkflowWithOptionsRequest) (*client.QueryWorkflowWithOptionsResponse, error)
    DescribeWorkflowExecution(ctx context.Context, workflowID string, runID string) (*workflowservice.DescribeWorkflowExecutionResponse, error)
    DescribeTaskQueue(ctx context.Context, taskqueue string, taskqueueType enums.TaskQueueType) (*workflowservice.DescribeTaskQueueResponse, error)
    ResetWorkflowExecution(ctx context.Context, request *workflowservice.ResetWorkflowExecutionRequest) (*workflowservice.ResetWorkflowExecutionResponse, error)

    ScheduleClient() ScheduleClient
}
```

## type [Config](<https://github.com/nunchistudio/helix.go/blob/main/integration/temporal/config.go#L11-L33>)

Config is used to configure the Temporal integration.

```go
type Config struct {

    // Address is the Temporal server address to connect to.
    //
    // Default:
    //
    //   "127.0.0.1:7233"
    Address string `json:"address"`

    // Namespace sets the namespace to connect to.
    //
    // Default:
    //
    //   "default"
    Namespace string `json:"namespace"`

    // Worker configures a Temporal worker if the helix service should run as worker
    // for Temporal.
    Worker ConfigWorker `json:"worker"`

    // TLSConfig configures TLS to communicate with the Temporal server.
    TLS integration.ConfigTLS `json:"tls"`
}
```

## type [ConfigWorker](<https://github.com/nunchistudio/helix.go/blob/main/integration/temporal/config.go#L40-L51>)

ConfigWorker configures a Temporal worker for the helix service running. When enabled, this starts a Temporal worker for the given task queue and namespace \(set in Config\).

```go
type ConfigWorker struct {

    // Enabled creates a Temporal worker, to run workflows and activities.
    Enabled bool `json:"enabled"`

    // TaskQueue is the task queue name you use to identify your client worker,
    // also identifies group of workflow and activity implementations that are hosted
    // by a single worker process.
    //
    // Required when enabled.
    TaskQueue string `json:"taskqueue,omitempty"`
}
```

## type [ScheduleClient](<https://github.com/nunchistudio/helix.go/blob/main/integration/temporal/client_schedule.go#L25-L29>)

ScheduleClient exposes an opinionated way to interact with Temporal scheduling capabilities.

```go
type ScheduleClient interface {
    Create(ctx context.Context, options client.ScheduleOptions) (ScheduleHandle, error)
    List(ctx context.Context, options client.ScheduleListOptions) (client.ScheduleListIterator, error)
    Handle(ctx context.Context, scheduleID string) ScheduleHandle
}
```

## type [ScheduleHandle](<https://github.com/nunchistudio/helix.go/blob/main/integration/temporal/client_schedule.go#L102-L111>)

ScheduleHandle exposes an opinionated way to interact with Temporal scheduling capabilities.

```go
type ScheduleHandle interface {
    GetID(ctx context.Context) string
    Delete(ctx context.Context) error
    Backfill(ctx context.Context, options client.ScheduleBackfillOptions) error
    Update(ctx context.Context, options client.ScheduleUpdateOptions) error
    Describe(ctx context.Context) (*client.ScheduleDescription, error)
    Trigger(ctx context.Context, options client.ScheduleTriggerOptions) error
    Pause(ctx context.Context, options client.SchedulePauseOptions) error
    Unpause(ctx context.Context, options client.ScheduleUnpauseOptions) error
}
```

## type [Worker](<https://github.com/nunchistudio/helix.go/blob/main/integration/temporal/worker.go#L21-L24>)

Worker exposes an opinionated way to interact with Temporal's worker capabilities.

```go
type Worker interface {
    RegisterWorkflow(w any, opts workflow.RegisterOptions)
    RegisterActivity(a any, opts activity.RegisterOptions)
}
```

