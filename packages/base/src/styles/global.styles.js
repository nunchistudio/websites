import { css } from '@emotion/react';

export const globalStyles = css`
  #__next,
  .guideBody {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  article ul {
    margin-bottom: 34px;
  }

  article img {
    max-width: 100%;
  }

  div[role="tabpanel"] {
    padding-top: 20px;
  }
`;
