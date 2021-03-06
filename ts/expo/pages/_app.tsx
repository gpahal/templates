import 'setimmediate';

import { AppProps } from 'next/app';

const NextApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default NextApp;
