import {
  EuiFlexGrid, EuiFlexGroup, EuiFlexItem,
  EuiCard, EuiTitle, EuiIcon,
  EuiCodeBlock, EuiCode,
  EuiText, EuiLink, EuiButton,
  EuiSpacer,
} from '@elastic/eui';

import { useTheme } from '@nunchistudio/base';

const gist = `import (
  "go.temporal.land/specifications/analytics"
  "go.temporal.land/toolkit/event"
  "go.temporal.land/toolkit/lifecycle"
)

client.ExecuteWorkflow(ctx, opts, "mailchimp.Identify", analytics.InputIdentify{
  Context: event.Context{
    IP: net.ParseIP("192.168.1.1"),
  },
  Policies: &analytics.Policies{
    Request: lifecycle.ActivityPolicy{
      SingleAttemptTimeout: 1 * time.Second,
      RetryPolicy: &lifecycle.RetryPolicy{
        BackoffCoefficient: 2,
        MaximumAttempts:    10,
      },
    },
  },
  Identify: analytics.Identify{
    UserID: "f373b459-0959-4217-a3a6-4d4bf4304682",
    Traits: map[string]any{
      "first_name": "Elliot",
      "last_name":  "Anderson",
      "email":      "elliot.anderson@evil.corp",
    },
  },
})`;

const tsql = `$ tsql migrations rollback --integration warehouse \\
  --version 20220522135835

2 migrations to roll back for warehouse:
- 20220522140548.fix_userid_pk.down.sql (applied)
- 20220522135835.init.down.sql (applied)

Temporal will roll back the migrations as shown above.
Do you confirm? Only 'yes' will be accepted to confirm.
> yes

Executing migrations:

-> Executing 20220522140548.fix_userid_pk.down.sql...
   Success!

-> Executing 20220522135835.init.down.sql...
   Success!`;

function Home(props) {
  const { colorMode } = useTheme();

  let backgroundCode = '#F1F4FA';
  if (colorMode == 'dark') {
    backgroundCode = '#1D1E24';
  }

  return (
    <>
      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem grow={7}>
          <EuiTitle size="l">
            <h1>Invincible integrations</h1>
          </EuiTitle>
          <EuiSpacer size="xl" />
          <EuiText size="m">
            <p>
              Temporal Land is an open-source ecosystem of consistent and
              production-ready workflows and activities for {' '}
              <EuiLink href="https://temporal.io/" external>Temporal</EuiLink>.
              This lets developers benefit consistent Integrations as a Service
              for building reliable and scalable Cloud Platforms and Data Planes.
            </p>
          </EuiText>

          <EuiSpacer size="xl" />
          <EuiFlexGroup>
            <EuiFlexItem grow={false}>
              <EuiButton color="primary" size="m" href="/integrations" iconType="layers">
                Discover integrations
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton color="success" size="m" href="/overview" iconType="arrowRight" iconSide="right">
                Get started
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem grow={3}></EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem>
          <EuiTitle size="s">
            <h2>Use cases</h2>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem>
          <EuiCard title="Integrations as a Service" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="pipelineApp" size="xl" />}
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard title="Reliable Cloud Platform" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="uptimeApp" size="xl" />}
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard title="Consistent Data Plane" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="indexPatternApp" size="xl" />}
          />
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem>
          <EuiTitle size="s">
            <h2>Features</h2>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem>
          <EuiTitle size="xs">
            <h3>Built for Temporal</h3>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiText>
            <p>
              With <EuiLink href="https://temporal.io/" external>Temporal</EuiLink>,
              developers can run fault-tolerant applications out of the box at any
              scale. It's the application state management platform most organizations
              need.
            </p>
          </EuiText>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiTitle size="xs">
            <h3>Production-ready integrations</h3>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiText>
            <p>
              Integrations allow to interact with a third-party service by exposing
              high-level, opiniated, and production-ready Temporal workflows and
              activities.
            </p>
          </EuiText>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiTitle size="xs">
            <h3>Rock-solid specifications</h3>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiText>
            <p>
              Specifications bring strong consistency and a great developer experience
              by providing the same behavior and APIs across integrations of a same
              kind.
            </p>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="l" />
      <EuiSpacer size="l" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem>
          <EuiTitle size="xs">
            <h3>Large ecosystem</h3>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiText>
            <p>
              By designing integrations on top of specifications, we can expand
              our ecosystem quickly and efficiently. Existing specifications are
              only the beginning!
            </p>
          </EuiText>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiTitle size="xs">
            <h3>Consistent event's context</h3>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiText>
            <p>
              Every integrations' input accepts a common <EuiCode>Context</EuiCode>,
              which can then be used by the integration workflows and activities.
              It is a dictionary of extra information that provides useful context
              about an event.
            </p>
          </EuiText>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiTitle size="xs">
            <h3>Lifecycle's policies</h3>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiText>
            <p>
              Workflow and activity lifecycle <EuiCode>Policies</EuiCode> for an
              integration are set when registering it in the Temporal worker. They
              can be overridden by the clients when executing a workflow when
              allowed by the integration to do so.
            </p>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem>
          <EuiTitle size="s">
            <h2>Temporal Land in a Gist</h2>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem>
          <EuiText>
            <p>
              Once registered in a Temporal worker, developers can consume
              Integrations as a Service from any applications such as Go, Node.js,
              Python, Java, or PHP.
            </p>
            <p>
              A consistent <EuiCode>Context</EuiCode> across all integrations can
              be set to provide useful context about an event. The integration
              will automatically apply it.
            </p>
            <p>
              If allowed by the integration when registered, a client can override
              workflows and activities <EuiCode>Policies</EuiCode> to have full
              control over the event's lifecycle.
            </p>
            <p>
              In this example, the <EuiLink href="/integrations/mailchimp">MailChimp</EuiLink> integration
              (registered as <EuiCode>mailchimp</EuiCode>) leverages the analytics specification, which is
              also used by other integrations such as <EuiLink href="/integrations/segment">Segment</EuiLink>.
            </p>
          </EuiText>
        </EuiFlexItem>

        <EuiFlexItem grow={2} style={{ backgroundColor: backgroundCode}}>
          <EuiCodeBlock language="go" transparentBackground={true}>
            {gist}
          </EuiCodeBlock>
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem>
          <EuiTitle size="s">
            <h2>Supercharge your SQL workflow</h2>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={2} gutterSize="xl">
        <EuiFlexItem style={{ backgroundColor: backgroundCode}}>
          <EuiCodeBlock language="bash" transparentBackground={true}>
            {tsql}
          </EuiCodeBlock>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText>
            <p>
              Build on top of SQL integrations, <EuiCode>tsql</EuiCode> is a
              command-line dedicated to manage SQL operations.
            </p>
            <p>
              It allows you to version, run, rollback, and test migrations
              across databases. To avoid access collisions, a remote mutex is
              automatically leveraged and scoped by integration <i>and</i> by
              Temporal namespace.
            </p>
            <p>
              <EuiCode>tsql</EuiCode> follows the same developer experience
              offered by <EuiCode>tctl</EuiCode>. It's the perfect addition for
              engineering teams who want fault-tolerant SQL operations and
              consistency across all their integrations.
            </p>
          </EuiText>
          <EuiSpacer size="xl" />
          <EuiFlexGroup>
            <EuiFlexItem grow={false}>
              <EuiButton disabled size="m" href="/tsql">
                Coming soon
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGrid>
    </>
  );
};

export default Home;
