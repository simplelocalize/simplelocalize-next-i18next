import type {NextPage} from 'next'
import {useTranslation} from "next-i18next";

import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Link from "next/link";

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}

const Home: NextPage = () => {
  //translations from common.json
  const {t} = useTranslation('common');

  //translations from home.json
  const {t: homeT} = useTranslation('home');

  const changeLanguage = (language: string) => {
    window.location.replace("/" + language)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>{homeT("HELLO_WORLD")}</h2>
          <h1>SimpleLocalize.io ⚡️ next-i18next</h1>
          <p>
            {t("USE_BUTTONS_BELOW")}
          </p>
          <div>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("es")}>Spanish</button>
            <button onClick={() => changeLanguage("fr_FR")}>French</button>
            <button onClick={() => changeLanguage("pl")}>Polish</button>
          </div>
          <div>
            <Link href="/about">
              <a className="App-link">
                {t("GO_TO_ABOUT_US")}
              </a>
            </Link>
          </div>
          <hr/>
        </div>

        <img src="/logo.svg" className="App-logo" alt="simplelocalize with next-i18next"/>
        <p>
          {t("DESCRIPTION")}
        </p>

        <div className="App-links">
          <a
            title="How to integrate next-i18next with SimpleLocalize"
            className="App-link"
            href="https://github.com/simplelocalize/simplelocalize-next-i18next"
          >
            Github Repository
          </a>
          <div className="separator">|
          </div>
          <a
            title="Translation Management Software"
            className="App-link"
            href="https://simplelocalize.io"
          >
            SimpleLocalize.io
          </a>
        </div>


      </header>
    </div>
  )
}

export default Home
