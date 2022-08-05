import React from 'react';
import GitHubButton from 'react-github-btn';

import { useTheme } from './Theme';

const GitHub = (props) => {
  const { colorMode } = useTheme();

  return (
    <>
      <GitHubButton data-color-scheme={colorMode} href="https://github.com/sponsors/nunchistudio" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @nunchistudio on GitHub">Sponsor</GitHubButton>
      <GitHubButton data-color-scheme={colorMode} href="https://github.com/nunchistudio" data-size="large" aria-label="Follow @nunchistudio on GitHub">Follow</GitHubButton>
      {props.repository &&
        <GitHubButton data-color-scheme={colorMode} href={`https://github.com/nunchistudio/${props.repository}`} data-icon="octicon-star" data-size="large" data-show-count="true" aria-label={`Star @nunchistudio/${props.repository} on GitHub`}>Star</GitHubButton>
      }
      <style jsx global>
        {`
          .euiHeaderSectionItem span span {
            margin: 3px 10px 0 0;
            display: inline-block;
          }
        `}
      </style>
    </>
  );
};

export default GitHub;
