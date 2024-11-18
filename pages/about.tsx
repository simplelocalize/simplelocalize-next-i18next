import type {NextPage} from 'next'
import {useTranslation} from "next-i18next";

import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps({locale}: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}

const AboutUs: NextPage = () => {

  //translations from common.json
  const {t} = useTranslation('common');

  //translations from about.json
  const {t: aboutT} = useTranslation('about');

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>{aboutT("ABOUT_US_TITLE")}</h1>
        </div>
        <p>
          {aboutT("ABOUT_US_DESCRIPTION")}
        </p>
        <Link href="/">
          <a className="App-link">
            {t("BACK_TO_WELCOME_PAGE")}
          </a>
        </Link>
        <Image src="/logo.svg" className="App-logo" alt="simplelocalize with next-i18next" width={500} height={500} />
      </header>
    </div>
  )
}

export default AboutUs
