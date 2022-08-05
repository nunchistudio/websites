import {
  EuiFlexGrid, EuiFlexItem,
  EuiCard, EuiIcon,
} from '@elastic/eui';

import { useTheme } from '@nunchistudio/base';

import ecosystem from '../data/ecosystem.json';

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
  let icon = <EuiIcon size="xxl" type={`/icons/${props.integration.id}-${colorMode}.svg`} />
  if (props.integration.id == 'sqldriver') {
    icon = <EuiIcon size="xxl" type={`/icons/${props.integration.id}-${colorMode}.png`} />;
  }

  if (props.integration.isPinned) {
    return (
      <EuiFlexItem>
        <EuiCard icon={icon}
          title={props.integration.name}
          titleSize="xs"
          href={`/integrations/${props.integration.id}`}
          betaBadgeProps={{
            label: <EuiIcon size="m" type="starFilled" color="primary" />,
            title: "Most used",
          }}
        />
      </EuiFlexItem>
    );
  }

  return (
    <EuiFlexItem>
      <EuiCard icon={icon}
        title={props.integration.name}
        titleSize="xs"
        href={`/integrations/${props.integration.id}`}
      />
    </EuiFlexItem>
  );
}

function Ecosystem(props) {
  return (
    <>
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
