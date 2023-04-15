import {Inter} from 'next/font/google'
import {trpc} from '@/utils/trpc';
import {getLocaleProps, useI18n} from '@/locales';

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const hello = trpc.hello.useQuery({text: 'client'});
  const t = useI18n();
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>inside i18n provider</p>
      <p>trpc: {hello.data.greeting}</p>
      <p>i18n: {t('hello')}</p>
    </div>
  );
}

export const getServerSideProps = getLocaleProps()
