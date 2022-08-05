import {
  EuiFlexGrid, EuiFlexGroup, EuiFlexItem,
  EuiCard, EuiTitle,
  EuiIcon, EuiImage,
  EuiText, EuiLink, EuiButton,
  EuiSpacer,
} from '@elastic/eui';

import { useTheme } from '@nunchistudio/base';

function Home(props) {
  const { colorMode } = useTheme();

  return (
    <>
      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem grow={7}>
          <EuiTitle size="l">
            <h1>Cloud Platform with HashiCorp</h1>
          </EuiTitle>
          <EuiSpacer size="xl" />
          <EuiText size="m">
            <p>
              HashiBox is a <EuiLink external href="https://www.vagrantup.com/">Vagrant</EuiLink> {' '}
              environment to simulate a highly-available Cloud Platform with {' '}
              <EuiLink external href="https://www.consul.io/">Consul</EuiLink>, {' '}
              <EuiLink external href="https://www.nomadproject.io/">Nomad</EuiLink>,
              and <EuiLink external href="https://www.vaultproject.io/">Vault</EuiLink>.
            </p>
            <p>
              OSS & Enterprise versions are supported for all HashiCorp products.
              <br />
              <EuiLink external href="https://www.waypointproject.io/">Waypoint</EuiLink> can be added but is optional.
            </p>
          </EuiText>

          <EuiSpacer size="xl" />
          <EuiFlexGroup>
            <EuiFlexItem grow={false}>
              <EuiButton color="success" size="m" href="/overview" iconType="arrowRight" iconSide="right">
                Get started
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem grow={3}>

        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={4} gutterSize="xl">
        <EuiFlexItem>
          <EuiTitle size="s">
            <h2>Why HashiBox</h2>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={4} gutterSize="xl">
        <EuiFlexItem>
          <EuiCard title="HashiCorp in a box" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="savedObjectsApp" size="xl" />}
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard title="Production parity" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="regressionJob" size="xl" />}
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard title="Cross-platform" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="fleetApp" size="xl" />}
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard title="Easy customization" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="advancedSettingsApp" size="xl" />}
          />
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem>
          <EuiTitle size="s">
            <h2>Quick overview</h2>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiImage src={`/images/hashibox-${colorMode}.png`} alt="How HashiBox works" />
      </EuiFlexGrid>
    </>
  );
};

export default Home;
