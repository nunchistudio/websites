import React from 'react';

import { EuiLink } from '@elastic/eui';

const TableOfContents = ({ toc }) => {
  const items = toc.filter((item) => item.id && (item.level === 2 || item.level === 3));

  return (
    <nav className="toc" style={{ position: 'sticky', top: '72px'}}>
      <ul className="flex column">
        {items.map((item) => {
          const href = `#${item.id}`;
          const active = typeof window !== 'undefined' && window.location.hash === href;

          return (
            <li
              key={item.title}
              className={[
                active ? 'active' : undefined,
                item.level === 3 ? 'padded' : undefined
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <EuiLink href={href}>
                {item.title}
              </EuiLink>
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          nav {
            position: sticky;
            top: calc(2.5rem + var(--nav-height));
            max-height: calc(100vh - var(--nav-height));
            flex: 0 0 240px;
            align-self: flex-start;
            margin-bottom: 1rem;
            padding: 0.25rem 0 0;
            border-left: 1px solid var(--toc-border);
          }

          ul {
            margin: 0;
            padding: 0;
          }

          li {
            list-style-type: none;
            margin: 0 0 1rem 1.5rem;
            font-size: 14px;
            font-weight: 400;
          }

          li a {
            text-decoration: none;
          }

          li a:hover,
          li.active a {
            text-decoration: underline !important;
          }

          li.padded {
            padding-left: 1rem;
          }

          @media screen and (max-width: 1000px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default TableOfContents;
