import React from 'react';
import Error from 'next/error';

const ErrorWrapper = ({ statusCode }) => {
  return <Error statusCode={statusCode} />;
};

ErrorWrapper.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorWrapper;
