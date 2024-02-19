import React, { useState, useEffect } from 'react';

import {
  EuiFlyout, EuiFlyoutBody, EuiFlyoutHeader,
  EuiButton, EuiTitle,
  EuiCodeBlock, EuiSpacer,
  useGeneratedHtmlId,
} from '@elastic/eui';

const Schema = (props) => {
  let title = '';
  if (props.specification) {
    title += `${props.specification}: `
  }

  if (props.type) {
    title += `${props.type} `
  }

  title += props.name

  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const simpleFlyoutTitleId = useGeneratedHtmlId({
    prefix: props.object,
  });

  let flyout;
  const [token, setToken] = useState(null);
  useEffect(() => {
    async function getToken() {
      const response = await fetch(props.file);
      const body = await response.text();

      setToken(body)
    }
    getToken();
  }, [])

  if (isFlyoutVisible) {
    flyout = (
      <EuiFlyout ownFocus onClose={() => setIsFlyoutVisible(false)} aria-labelledby={simpleFlyoutTitleId}>
        <EuiFlyoutHeader hasBorder>
          <EuiTitle size="m">
            <h2 id={simpleFlyoutTitleId}>{title}</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiCodeBlock language="yaml" isCopyable>{token}</EuiCodeBlock>
          <EuiSpacer size="l" />
        </EuiFlyoutBody>
      </EuiFlyout>
    );
  }

  return (
    <>
      <EuiButton style={{ marginRight: '10px', marginBottom: '30px' }} color={props.color} onClick={() => setIsFlyoutVisible(true)}>
        {props.name}
      </EuiButton>
      {flyout}
    </>
  );

};

export default {
  render: Schema,
  attributes: {
    specification: {
      type: String,
    },
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    color: {
      type: String,
    },
    object: {
      type: String,
    },
    file: {
      type: String,
    },
  },
};
