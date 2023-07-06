import {
  EuiFlexGrid, EuiFlexGroup, EuiFlexItem,
  EuiCard, EuiIcon, EuiTitle,
  EuiText, EuiButton,
  EuiSpacer,
} from '@elastic/eui';

import { useTheme } from '@nunchistudio/base';

function Home(props) {
  const { colorMode } = useTheme();

  return (
    <>
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGroup gutterSize="xl">
        <EuiFlexItem grow={6}>
          <EuiTitle size="l">
            <h1>Delivering custom-made Data Planes and Cloud Platforms for the Enterprise</h1>
          </EuiTitle>
          <EuiSpacer size="xl" />
          <EuiText size="m">
            <p>
              Nunchi is the organization I publish my professional work on to help companies
              deliver reliable, cloud-native, high-performance Data Planes and Cloud Platforms.
            </p>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={4}></EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem grow={7}>
          <EuiTitle size="s">
            <h2>Products</h2>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={3}></EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xxl" />

      <EuiFlexGroup gutterSize="xl">
        <EuiFlexItem grow={6}>
          <EuiCard paddingSize="none" title="helix" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="logsApp" size="xxl" />}
            layout="horizontal" display="transparent"
          >
            <EuiText>
              <p>
                helix provides an opinionated way to build microservices. After years
                of working with different organizations and various technical stacks,
                I've decided to put my knowledge and experiences into helix so I can
                deliver a consistent and high quality of work.
              </p>
              <p>
                Source code is available for anyone who wishes to use it!
              </p>
            </EuiText>
            <EuiSpacer size="l" />
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <EuiButton color="primary" href="/helix/integration" iconType="layers">
                  Discover integrations
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton color="success" href="/helix" iconType="arrowRight" iconSide="right">
                  Get started
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiCard>
        </EuiFlexItem>
        <EuiFlexItem grow={4}></EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem grow={7}>
          <EuiTitle size="s">
            <h2>Open source</h2>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={3}></EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xxl" />

      <EuiFlexGroup gutterSize="xl">
        <EuiFlexItem grow={6}>
          <EuiCard paddingSize="none" title="HashiBox" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="savedObjectsApp" size="xxl" />}
            layout="horizontal" display="transparent"
          >
            <EuiText>
              <p>
                HashiBox is a local environment to simulate a highly-available cloud
                with Consul, Nomad, and Vault. Optional support for Waypoint. OSS and
                Enterprise versions of each product are supported.
              </p>
            </EuiText>
            <EuiSpacer size="l" />
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <EuiButton color="success" href="/hashibox" iconType="arrowRight" iconSide="right">
                  Get started
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiCard>

          <EuiSpacer size="l" />
          <EuiSpacer size="l" />

          <EuiCard paddingSize="none" title="Utilities" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="empty" size="xxl" />}
            layout="horizontal" display="transparent"
          >
            <EuiSpacer size="s" />
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <EuiButton color="transparent" iconType={`/icons/github-${colorMode}.svg`} href="https://github.com/nunchistudio/platform-starter">
                  platform-starter
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton color="transparent" iconType={`/icons/github-${colorMode}.svg`} href="https://github.com/nunchistudio/docker-opentelemetry">
                  docker-opentelemetry
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiCard>
        </EuiFlexItem>
        <EuiFlexItem grow={4}></EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem grow={7}>
          <EuiTitle size="s">
            <h2>Who am I?</h2>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={3}></EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xxl" />

      <EuiFlexGroup gutterSize="xl">
        <EuiFlexItem grow={6}>
          <EuiCard paddingSize="none" title="Loïc Saint-Roch" titleElement="h3" titleSize="xs"
            icon={<EuiIcon title="Loïc Saint-Roch" size="xxl" type="/avatars/loicsaintroch.png" />}
            layout="horizontal" display="transparent"
          >
            <EuiText size="xs">
              <p>
                <b>Software / Platform Engineer</b>
              </p>
            </EuiText>
            <EuiSpacer size="m" />
            <EuiText>
              <p>
                After building and maintaining Data Planes and Cloud Platforms at scale
                for some organizations, I've decided to come with the most elegant solution
                possible to automate recurring work, while still allowing other engineers
                and companies to benefit from it.
              </p>
              <p>
                Nunchi is the organization I publish my professional work on. I hope it
                makes your development a bit easier!
              </p>
            </EuiText>
            <EuiSpacer size="l" />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiButton color="text" iconType={`/icons/github-${colorMode}.svg`} href="https://github.com/loicsaintroch">
                  @loicsaintroch
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="text" iconType={`/icons/twitter-${colorMode}.svg`} href="https://twitter.com/loicsaintroch">
                  @loicsaintroch
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="text" iconType={`/icons/linkedin-${colorMode}.svg`} href="https://linkedin.com/in/loicsaintroch">
                  /in/loicsaintroch
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiCard>
        </EuiFlexItem>
        <EuiFlexItem grow={4}></EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};

export default Home;
