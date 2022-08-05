import {
  EuiFlexGrid, EuiFlexItem,
  EuiCard, EuiTitle,
  EuiIcon, EuiBadge, EuiAvatar,
  EuiText, EuiButton, EuiButtonEmpty,
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
            <h1>Helping you deliver Cloud Platforms</h1>
          </EuiTitle>
          <EuiSpacer size="xl" />
          <EuiText size="m">
            <p>
              Nunchi is an organization helping engineering teams deliver reliable,
              durable, and scalable Cloud Platforms and Data Planes.
            </p>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={3}></EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem grow={7}>
          <EuiTitle size="s">
            <h2>Our solutions</h2>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={3}></EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem grow={7}>
          <EuiCard title="Temporal Land" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="securityAnalyticsApp" size="xl" />}
            layout="horizontal" display="transparent"
          >
            <EuiBadge color="success">Development</EuiBadge>
            <EuiSpacer size="l" />
            <EuiText>
              <p>
                Temporal Land is an ecosystem of production-ready workflows and
                activities for Temporal. This lets developers benefit consistent
                Integrations as a Service for building reliable and scalable Cloud
                Platforms and Data Planes.
              </p>
            </EuiText>
            <EuiSpacer size="l" />
            <EuiButton color="primary" size="s" href="https://temporal.land" iconType="arrowRight" iconSide="right">
              Visit website
            </EuiButton>
          </EuiCard>
        </EuiFlexItem>
        <EuiFlexItem grow={3}></EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="l" />
      <EuiSpacer size="l" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem grow={7}>
          <EuiCard title="HashiBox" titleElement="h3" titleSize="xs"
            icon={<EuiIcon type="savedObjectsApp" size="xl" />}
            layout="horizontal" display="transparent"
          >
            <EuiBadge color="accent">Infrastructure</EuiBadge>
            <EuiSpacer size="l" />
            <EuiText>
              <p>
                HashiBox provides a local setup respecting environment parity for
                simulating a high-available Cloud Platform from end-to-end before
                going in production.
              </p>
            </EuiText>
            <EuiSpacer size="l" />
            <EuiButton color="primary" size="s" href="https://hashibox.sh" iconType="arrowRight" iconSide="right">
              Visit website
            </EuiButton>
          </EuiCard>
        </EuiFlexItem>
        <EuiFlexItem grow={3}></EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem grow={7}>
          <EuiTitle size="s">
            <h2>Who are we?</h2>
          </EuiTitle>
          <EuiSpacer size="xl" />
          <EuiText size="m">
            <p>
              As of now, Nunchi is a solo-founded open source organization, also
              maintained by a growing community and the help of sponsors.
            </p>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={3}></EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem grow={7}>
          <EuiCard title="Loïc Saint-Roch" titleElement="h3" titleSize="xs"
            icon={<EuiAvatar name="Loïc Saint-Roch" size="xl" imageUrl="/avatars/loicsaintroch.jpeg" />}
            layout="horizontal" display="transparent"
          >
            <EuiText size="xs">
              <p>
                <b>Software / Cloud Platform Engineer - Freelance</b>
              </p>
            </EuiText>
            <EuiSpacer size="m" />
            <EuiText size="s">
              <p>
                When working with companies, I sometimes have the opportunity to
                deliver something generic enough that it can be leveraged by others.
                When this happens, I do my best to make it open source. Nunchi is
                the organization I publish my professional open source work to.
              </p>
            </EuiText>
            <EuiSpacer size="m" />
            <EuiFlexGrid gutterSize="l">
              <EuiFlexItem>
                <EuiButtonEmpty iconType={`/icons/github-${colorMode}.svg`} href="https://github.com/loicsaintroch">
                  @loicsaintroch
                </EuiButtonEmpty>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButtonEmpty iconType={`/icons/twitter-${colorMode}.svg`} href="https://twitter.com/loicsaintroch">
                  @loicsaintroch
                </EuiButtonEmpty>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButtonEmpty iconType={`/icons/linkedin-${colorMode}.svg`} href="https://linkedin.com/in/loicsaintroch">
                  /in/loicsaintroch
                </EuiButtonEmpty>
              </EuiFlexItem>
            </EuiFlexGrid>
          </EuiCard>
        </EuiFlexItem>
        <EuiFlexItem grow={3}></EuiFlexItem>
      </EuiFlexGrid>
    </>
  );
};

export default Home;
