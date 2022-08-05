import React from 'react';
import { useRouter } from 'next/router';

import {
  EuiEmptyPrompt, EuiImage,
  EuiButton,
} from '@elastic/eui';

import { useTheme } from '../components/Theme';

const NotFoundPage = () => {
  const { colorMode } = useTheme();

  const router = useRouter();
  const handleClick = e => {
    e.preventDefault();
    router.back();
  };

  return (
    <EuiEmptyPrompt titleSize="m" title={<h2>Page not found</h2>}
      layout="vertical"
      icon={<EuiImage alt="Not Found" size="fullWidth" src={`/images/404-${colorMode}.png`} />}
      actions={[
        <EuiButton color="primary" fill onClick={handleClick} key="404-goback">
          Go back
        </EuiButton>,
      ]}
      body={
        <p>
          Sorry, we can&apos;t find the page you&apos;re looking for. It might
          have been removed or renamed, or maybe it never existed.
        </p>
      }
    />
  );
};

export default NotFoundPage;
