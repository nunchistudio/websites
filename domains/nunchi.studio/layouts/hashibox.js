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
          name: 'Overview',
          key: '/hashibox',
          href: '/hashibox',
        },
        {
          name: 'Installation',
          key: '/hashibox/installation',
          href: '/hashibox/installation',
        },
      ],
    },
    {
      name: 'Going further',
      key: 'going-further',
      icon: <EuiIcon type="listAdd" color="primary" />,
      items: [
        {
          name: 'Maintenance cheatsheet',
          key: '/hashibox/maintenance',
          href: '/hashibox/maintenance',
        },
      ],
    },
    {
      name: 'Resources',
      key: 'resources',
      icon: <EuiIcon type="help" color="accent" />,
      items: [
        {
          name: 'Community',
          key: '/hashibox/community',
          href: '/hashibox/community',
        },
      ],
    },
  ];

  return (
    <DocsLayout path={path} sideNav={sideNav} markdoc={markdoc}
      name="HashiBox" repository="hashibox" homepage="/hashibox"
    >
      <EuiSpacer size="xl" />
      {children}
    </DocsLayout>
  )
};

export default Layout;
