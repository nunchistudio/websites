import {
  EuiIcon, EuiSpacer,
} from '@elastic/eui';

import { DocsLayout } from '@nunchistudio/base';

const Layout = ({ path, markdoc, children }) => {
  const sideNav = [
    {
      name: 'Onboarding',
      key: 'onboarding',
      icon: <EuiIcon type="launch" color="success" />,
      items: [
        {
          name: 'What is helix?',
          key: '/helix',
          href: '/helix',
        },
        {
          name: 'From zero to hero in 20′',
          key: '/helix/from-zero-to-hero',
          href: '/helix/from-zero-to-hero',
        },
      ],
    },
    {
      name: 'Concepts',
      key: 'concepts',
      icon: <EuiIcon type="layers" color="primary" />,
      items: [
        {
          name: 'OpenTelemetry',
          key: '/helix/opentelemetry',
          href: '/helix/opentelemetry',
        },
        {
          name: 'Event propagation',
          key: '/helix/event-propagation',
          href: '/helix/event-propagation',
        },
        {
          name: 'OpenAPI & AsyncAPI',
          key: '/helix/openapi-asyncapi',
          href: '/helix/openapi-asyncapi',
        },
      ],
    },
    {
      name: 'Integrations',
      icon: <EuiIcon type="apmTrace" color="primary" />,
      key: '/helix/integration',
      href: '/helix/integration',
    },
    {
      name: 'API references',
      icon: <EuiIcon type="tableOfContents" color="primary" />,
      key: '/helix/api-references',
      href: '/helix/api-references',
    },
    {
      name: 'Resources',
      key: 'resources',
      icon: <EuiIcon type="help" color="accent" />,
      items: [
        {
          name: 'Community',
          key: '/helix/community',
          href: '/helix/community',
        },
      ],
    },
  ];

  return (
    <DocsLayout path={path} sideNav={sideNav} markdoc={markdoc}
      name="helix" repository="helix" homepage="/helix"
    >
      <EuiSpacer size="xl" />
      {children}
    </DocsLayout>
  )
};

export default Layout;
