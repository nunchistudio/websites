import {
  EuiIcon, EuiSpacer,
} from '@elastic/eui';

import { DocsLayout } from '@nunchistudio/base';

const Layout = ({ path, markdoc, children }) => {
  const sideNav = [
    {
      name: 'Onboarding',
      icon: <EuiIcon type="launch" color="success" />,
      items: [
        {
          name: 'What is helix?',
          href: '/helix',
        },
        {
          name: 'From zero to hero in 20′',
          href: '/helix/from-zero-to-hero',
        },
      ],
    },
    {
      name: 'Concepts',
      icon: <EuiIcon type="layers" color="primary" />,
      items: [
        {
          name: 'OpenTelemetry',
          href: '/helix/opentelemetry',
        },
        {
          name: 'Event propagation',
          href: '/helix/event-propagation',
        },
        {
          name: 'OpenAPI & AsyncAPI',
          href: '/helix/openapi-asyncapi',
        },
      ],
    },
    {
      name: 'Integrations',
      icon: <EuiIcon type="apmTrace" color="primary" />,
      href: '/helix/integration',
    },
    {
      name: 'API references',
      icon: <EuiIcon type="tableOfContents" color="primary" />,
      href: '/helix/api-references',
    },
    {
      name: 'Resources',
      icon: <EuiIcon type="help" color="accent" />,
      items: [
        {
          name: 'Licensing',
          href: '/helix/licensing',
        },
        {
          name: 'Community',
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
