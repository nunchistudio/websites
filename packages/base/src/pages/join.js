import React from 'react';

import {
  EuiFlexGrid, EuiFlexItem,
  EuiCard, EuiIcon,
  EuiButton, EuiTitle, EuiText, EuiLink,
  EuiSpacer,
} from '@elastic/eui';

import { useTheme } from '../components/Theme';

const Join = (props) => {
  const { colorMode } = useTheme();

  return (
    <>
      <EuiTitle size="m">
        <h1>Join us</h1>
      </EuiTitle>
      <EuiSpacer size="s" />

      <EuiText>
        <p>
          {props.name} is an open source project maintained by the {' '}
          <EuiLink external href="https://nunchi.studio">Nunchi</EuiLink> organization
          and a growing community, with the help of sponsors.
        </p>
      </EuiText>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGrid columns={3} gutterSize="xl">
        <EuiFlexItem>
          <EuiCard title="Discord" icon={<EuiIcon size="xxl" type={`/icons/discord-${colorMode}.svg`} />}
            paddingSize="xl"
            footer={
              <EuiButton size="s" color="success" href="/discord">
                Join our community
              </EuiButton>
            }
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard title="Repository" icon={<EuiIcon size="xxl" type={`/icons/github-${colorMode}.svg`} />}
            paddingSize="xl"
            footer={
              <EuiButton size="s" color="primary" href={`https://github.com/nunchistudio/${props.repository}`}>
                Give us a star
              </EuiButton>
            }
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard title="Sponsors" icon={<EuiIcon size="xxl" type={`/icons/sponsors-${colorMode}.png`} />}
            paddingSize="xl"
            footer={
              <EuiButton size="s" color="accent" href="https://github.com/sponsors/nunchistudio">
                Support us
              </EuiButton>
            }
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard title="Twitter" icon={<EuiIcon size="xxl" type={`/icons/twitter-${colorMode}.svg`} />}
            paddingSize="xl"
            footer={
              <EuiButton size="s" color="primary" href="https://twitter.com/nunchistudio">
                Follow us
              </EuiButton>
            }
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard title="LinkedIn" icon={<EuiIcon size="xxl" type={`/icons/linkedin-${colorMode}.svg`} />}
            paddingSize="xl"
            footer={
              <EuiButton size="s" color="primary" href="https://www.linkedin.com/company/nunchistudio/">
                Follow us
              </EuiButton>
            }
          />
        </EuiFlexItem>
      </EuiFlexGrid>

      <style jsx global>
        {`
          .euiCard__top .euiCard__icon {
            display: inline;
          }
        `}
      </style>
    </>
  );
};

export default Join;
