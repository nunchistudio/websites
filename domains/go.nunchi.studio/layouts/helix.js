import {
  EuiIcon, EuiSpacer,
} from '@elastic/eui';

import { DocsLayout } from '@nunchistudio/base';

const Layout = ({ path, markdoc, children }) => {
  const sideNav = [
    {
      name: 'API reference',
      icon: <EuiIcon type="tableOfContents" color="primary" />,
      items: [
        {
          name: 'event',
          href: '/helix/ref/event',
        },
        {
          name: 'errorstack',
          href: '/helix/ref/errorstack',
        },
        {
          name: 'integration',
          href: '/helix/ref/integration',
          forceOpen: true,
          items: [
            {
              name: 'clickhouse',
              href: '/helix/ref/integration/clickhouse',
            },
            {
              name: 'nats',
              href: '/helix/ref/integration/nats',
            },
            {
              name: 'postgres',
              href: '/helix/ref/integration/postgres',
            },
            {
              name: 'rest',
              href: '/helix/ref/integration/rest',
            },
            {
              name: 'vault',
              href: '/helix/ref/integration/vault',
            },
          ]
        },
        {
          name: 'service',
          href: '/helix/ref/service',
        },
        {
          name: 'telemetry/log',
          href: '/helix/ref/telemetry/log',
        },
        {
          name: 'telemetry/trace',
          href: '/helix/ref/telemetry/trace',
        },
      ],
    },
  ];

  return (
    <>
      <DocsLayout path={path} sideNav={sideNav} markdoc={markdoc} disableDefaults={true}
        name="helix.go" repository="helix.go" homepage="/helix/ref"
      >
        <EuiSpacer size="xl" />
        {children}
      </DocsLayout>
      <style jsx global>
        {`
          a[href$='#Index'] + ul {
            margin-left: 0;
          }

          a[href$='#Index'] + ul li {
            list-style-type: none;
          }

          a[href$='#Index'] + ul li ul {
            margin-bottom: 0;
          }
        `}
      </style>
    </>
  )
};

export default Layout;
