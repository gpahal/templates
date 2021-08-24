import 'setimmediate';

import React from 'react';
import type { AppProps } from 'next/app';

const NextApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default NextApp;
