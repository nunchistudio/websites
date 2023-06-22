import NextHead from 'next/head';

import {
  EuiFlexGroup, EuiFlexItem,
  EuiPageTemplate,
  EuiHeader, EuiSideNav,
  EuiImage, EuiCallOut, EuiText, EuiLink,
  EuiSpacer,
  htmlIdGenerator, useGeneratedHtmlId,
} from '@elastic/eui';

import { ThemeSwitcher, useTheme } from '../../';
import GitHub from '../components/GitHub';
import TableOfContents from '../components/TableOfContents';

import { docsLayout } from './docs.styles';

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

const DocsLayout = (props) => {
  const { colorMode } = useTheme();

  let color = '#000';
  let headerMode = 'default';
  if (colorMode == 'dark') {
    color = '#fff'
    headerMode = 'dark';
  }

  let toc = props.markdoc?.content
    ? collectHeadings(props.markdoc.content)
    : [];

  if (props.disableDefaults) {
    toc = null;
  }

  props.sideNav.forEach(section => {
    section.id = htmlIdGenerator()();

    if (section.items) {
      section.items.forEach(item => {
        item.id = htmlIdGenerator()();
        item.isSelected = props.path == item.href;
      })
    } else {
      if (props.path == section.href || props.path.startsWith(section.href)) {
        section.isSelected = true;
      }
    }
  })

  let homepage = '/';
  if (props.homepage) {
    homepage = props.homepage;
  }

  let link = `https://github.com/nunchistudio/${props.repository}`;
  if (props.markdoc.frontmatter.location != null) {
    if (props.markdoc.frontmatter.location == "/") {
      link += '/tree/main'
    } else {
      link += '/blob/main';
    }

    link += props.markdoc.frontmatter.location;
  }

  const styles = docsLayout();

  return (
    <>
      <NextHead>
        <title>{props.markdoc.frontmatter.title} | {props.name}</title>
        <meta name="title" content={props.markdoc.frontmatter.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.markdoc.frontmatter.title} />
        <meta name="twitter:card" content="summary" />
      </NextHead>
      <div css={styles.wrapper}>
        <EuiHeader
          theme={headerMode}
          position="fixed"
          sections={[
            {
              borders: 'none',
              items: [
                <EuiText style={{ marginLeft: '15px' }}>
                  <EuiLink href={homepage} style={{ color: color }}>
                    <strong>{props.name}</strong>
                  </EuiLink>
                </EuiText>
              ],
            },
            {
              borders: 'none',
              items: [
                <GitHub repository={props.repository} />,
                <ThemeSwitcher key={useGeneratedHtmlId()} />,
              ],
            },
          ]}
        />
        <EuiPageTemplate>
          <EuiPageTemplate.Sidebar sticky={true}>
            <EuiSideNav mobileTitle="Navigation" isOpenOnMobile={true} items={props.sideNav} />
          </EuiPageTemplate.Sidebar>
          <EuiPageTemplate.Section grow={true}>
            <EuiFlexGroup>
              <EuiFlexItem grow={8}>
                {props.before &&
                  <>
                    <EuiSpacer size="xl" />
                    {props.before}
                    <EuiSpacer size="s" />
                  </>
                }
                <EuiText>
                  {props.children}
                </EuiText>
                {props.markdoc && props.markdoc.frontmatter && props.markdoc.frontmatter.location &&
                  <>
                    <EuiSpacer size="xl" />
                    <EuiCallOut iconType="reporter" title="Is something missing?">
                      <EuiText size="s">
                        If you notice something we've missed or could be improved on,
                        please <EuiLink external href={link}>follow this link</EuiLink> and
                        submit a pull request to the repository. Once we merge it, the changes
                        will be reflected on the website the next time it is deployed.
                        Thank you for your contributions!
                      </EuiText>
                    </EuiCallOut>
                  </>
                }
                <EuiSpacer size='xl' />
              </EuiFlexItem>
              {toc &&
                <EuiFlexItem grow={2}>
                  <TableOfContents toc={toc} />
                </EuiFlexItem>
              }
            </EuiFlexGroup>
          </EuiPageTemplate.Section>
        </EuiPageTemplate>

        <div style={{ marginLeft: '27px', position: 'fixed', bottom: '27px' }} className="eui-hideFor--xs eui-hideFor--s">
          <EuiText size="xs"><strong>Built by</strong></EuiText>
          <EuiSpacer size="s" />
          <EuiLink href="https://nunchi.studio">
            <EuiImage src={`/images/nunchi-${colorMode}.svg`} height={20} width={20} alt="Nunchi" />
          </EuiLink>
        </div>
      </div>
    </>
  );
};

export default DocsLayout;
