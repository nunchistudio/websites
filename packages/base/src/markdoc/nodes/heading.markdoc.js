import React from 'react';
import { useRouter } from 'next/router';

import { nodes, Tag } from '@markdoc/markdoc';
import { EuiTitle, EuiSpacer } from '@elastic/eui';

function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === 'string') {
    return attributes.id;
  }

  return children
    .filter((child) => typeof child === 'string')
    .join(' ')
    .replace(/[?]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
};

const Heading = (props) => {
  const router = useRouter();
  const Heading = `h${props.level}`;

  let id = props.id;
  if (!id) {
    id = '';
  }

  const isDocs = router.pathname !== '/';
  const link = (
    <>
      <EuiSpacer size="s" />
      <EuiTitle size="m">
        <Heading className={['heading', props.className].filter(Boolean).join(' ')} id={id} size={props.level == 1 ? 'l' : 'm'}>
          {props.children}
          <style jsx>
            {`
              a {
                text-decoration: none;
              }
              a:hover {
                opacity: 1;
              }
            `}
          </style>
        </Heading>
      </EuiTitle>
      <EuiSpacer size="s" />
    </>
  );

  return isDocs && props.level !== 1 ? (
    <a href={`#${id}`}>
      {link}
      <style jsx>
        {`
          a {
            text-decoration: none;
            color: inherit;
          }

          a:hover {
            opacity: 1;
          }

          a :global(.heading::after) {
            opacity: 0;
            color: var(--toc-border);
            content: '  #';
            transition: opacity 250ms ease;
          }

          a :global(.heading:hover::after) {
            opacity: 1;
          }
        `}
      </style>
    </a>
  ) : (
    link
  );
};

export default {
  render: Heading,
  children: nodes.heading.children,
  attributes: nodes.heading.attributes,
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);

    const level = node.attributes['level'];

    return new Tag(this.render, { ...attributes, level, id }, children);
  },
};
