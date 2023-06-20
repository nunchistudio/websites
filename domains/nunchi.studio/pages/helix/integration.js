import {
  EuiFlexGrid, EuiFlexItem,
  EuiTitle, EuiText,
  EuiCard, EuiIcon,
  EuiSpacer,
} from '@elastic/eui';

import { useTheme } from '@nunchistudio/base';

import ecosystem from '../../data/helix/ecosystem.json';

export async function getStaticProps(context) {
  return {
    props: {
      markdoc: {
        frontmatter: {
          location: '/ecosystem.json',
          title: 'Integrations'
        },
      },
    },
  };
};

function Integration(props) {
  const { colorMode } = useTheme();
  const icon = <EuiIcon size="xxl" type={`/icons/${props.integration.id}-${colorMode}.svg`} />

  return (
    <EuiFlexItem>
      <EuiCard icon={icon}
        title={props.integration.name}
        titleSize="xs"
        titleElement="span"
        href={`/helix/integration/${props.integration.id}`}
        isDisabled={props.integration.soon}
        betaBadgeProps={{
          label: props.integration.soon ? 'Coming soon' : '',
        }}
      >
        <EuiText size="xs">
          {props.integration.description}
        </EuiText>
      </EuiCard>
    </EuiFlexItem>
  );
}

function Ecosystem(props) {
  return (
    <>
      <EuiFlexGrid columns={4}>
        <EuiTitle size="m">
          <h1>Integrations</h1>
        </EuiTitle>
      </EuiFlexGrid>
      <EuiSpacer size="l" />
      <EuiFlexGrid columns={4}>
        {ecosystem.integrations.map(integration => (
          <Integration key={integration.id} integration={integration} />
        ))}
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

export default Ecosystem;
