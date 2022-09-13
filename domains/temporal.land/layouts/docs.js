import {
  EuiText, EuiLink,
  EuiCallOut, EuiIcon,
  EuiSpacer,
} from '@elastic/eui';

import { DocsLayout } from '@nunchistudio/base';

const goref = (markdoc) => {
  if (markdoc && markdoc.frontmatter && markdoc.frontmatter.goref) {
    return (
      <EuiCallOut color="success" iconType="inspect" title="Go packages">
      <EuiText>
        We advise to complete this guide side-by-side with the following Temporal
        Land API references:
        <EuiSpacer size="s" />
        <ul>
          {markdoc.frontmatter.goref.map((ref) => {
            const link = "https://pkg.go.dev/go.temporal.land/" + ref

            return (
              <li key={ref}>
                <EuiLink href={link} external>{ref}</EuiLink>
              </li>
            );
          })}
        </ul>
      </EuiText>
    </EuiCallOut>
    );
  }

  return null;
};

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
      ],
    },
    {
      name: 'Ecosystem',
      icon: <EuiIcon type="layers" color="primary" />,
      items: [
        {
          name: 'Specifications',
          href: '/specifications',
        },
        {
          name: 'Integrations',
          href: '/integrations',
        },
      ],
    },
    {
      name: 'Toolkit',
      icon: <EuiIcon type="analyzeEvent" color="success" />,
      items: [
        {
          name: 'Event\'s context',
          href: '/toolkit/event',
        },
        {
          name: 'Lifecycle policies',
          href: '/toolkit/lifecycle',
        },
        {
          name: 'Errors, SLOs and SLAs',
          href: '/toolkit/errorstack',
        },
      ],
    },
    {
      name: 'Community',
      icon: <EuiIcon type="heart" color="accent" />,
      items: [
        {
          name: 'Committee',
          href: '/committee',
        },
        {
          name: 'Join us',
          href: '/join',
        },
      ],
    },
  ];

  return (
    <DocsLayout path={path} sideNav={sideNav} markdoc={markdoc} before={goref(markdoc)} name="Temporal Land" repository="temporal-land">
      <EuiSpacer size="xl" />
      {children}
    </DocsLayout>
  )
};

export default Layout;
