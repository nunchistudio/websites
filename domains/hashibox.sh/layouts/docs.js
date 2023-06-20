import {
  EuiIcon, EuiSpacer,
} from '@elastic/eui';

import { DocsLayout } from '@nunchistudio/base';

const Layout = ({ path, markdoc, children }) => {
  const sideNav = [
    {
      name: 'Onboarding',
      icon: <EuiIcon type="cheer" color="success" />,
      items: [
        {
          name: 'Overview',
          href: '/overview',
        },
        {
          name: 'Installation',
          href: '/installation',
        },
      ],
    },
    {
      name: 'Going further',
      icon: <EuiIcon type="listAdd" color="primary" />,
      items: [
        {
          name: 'Adding Waypoint',
          href: '/waypoint',
        },
        {
          name: 'Maintenance cheatsheet',
          href: '/maintenance',
        },
      ],
    },
    {
      name: 'Resources',
      icon: <EuiIcon type="help" color="accent" />,
      items: [
        {
          name: 'Community',
          href: '/join',
        },
      ],
    },
  ];

  return (
    <DocsLayout path={path} sideNav={sideNav} markdoc={markdoc} name="HashiBox" repository="hashibox">
      <EuiSpacer size="xl" />
      {children}
    </DocsLayout>
  )
};

export default Layout;
