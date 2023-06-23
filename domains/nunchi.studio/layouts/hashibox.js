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
          name: 'Overview',
          href: '/hashibox',
        },
        {
          name: 'Installation',
          href: '/hashibox/installation',
        },
      ],
    },
    {
      name: 'Going further',
      icon: <EuiIcon type="listAdd" color="primary" />,
      items: [
        {
          name: 'Adding Waypoint',
          href: '/hashibox/waypoint',
        },
        {
          name: 'Maintenance cheatsheet',
          href: '/hashibox/maintenance',
        },
      ],
    },
    {
      name: 'Resources',
      icon: <EuiIcon type="help" color="accent" />,
      items: [
        {
          name: 'Community',
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
