import type {AppType} from 'next/app';
import {trpc} from '../utils/trpc';
import {I18nProvider} from '@/locales';

const MyApp: AppType = ({Component, pageProps}) => {
  return <>
    outside i18n provider
    <I18nProvider locale={(pageProps as any).locale}>
      <Component {...pageProps} />
    </I18nProvider>
  </>;
};

export default trpc.withTRPC(MyApp);
