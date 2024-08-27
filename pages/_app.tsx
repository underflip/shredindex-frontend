import React, { useMemo, useState } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { IntlProvider } from 'react-intl';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import dynamic from 'next/dynamic';
import DynamicSwitch from '../components/DynamicSwitch/DynamicSwitch';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SidebarNav from '../components/SidebarNav/SidebarNav';
import SupportBanner from '../components/SupportBanner/SupportBanner';
import ViewContext from '../components/ViewContext/ViewContext';
import langEn from '../lang/en.json';
import GlobalToast from '../components/GlobalToast/GlobalToast';
import { useApollo } from "../lib/apollo-client";
import 'mapbox-gl/dist/mapbox-gl.css';
import '../src/scss/style.scss';

const DynamicBrowserRouter = dynamic(
  () => import('react-router-dom').then((mod) => mod.BrowserRouter),
  { ssr: false }
);

const t = {
  en: langEn,
};

const locale = 'en';

const layouts = {
  home: dynamic(() => import('./homepage')),
  resorts: dynamic(() => import('./resorts')),
  resort: dynamic(() => import('@/ResortSingle/Resort')),
  about: dynamic(() => import('./about')),
  privacy: dynamic(() => import('./privacy-policy')),
  terms: dynamic(() => import('./terms-and-conditions')),
};

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [showSidebar, setShowSidebar] = useState(false);
  const viewData = useMemo(() => ({ showSidebar, setShowSidebar, layouts }), [showSidebar]);

  return (
    <ApolloProvider client={apolloClient}>
      <DynamicBrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <IntlProvider locale={locale} messages={t[locale]}>
            <RecoilRoot>
              <div className="c-app c-default-layout">
                <ViewContext.Provider value={viewData}>
                  <SidebarNav />
                  <div className="wrapper d-flex flex-column min-vh-100">
                    <Header />
                    <div className="body flex-grow-1 min-vh-100">
                      <GlobalToast />
                      <main className="c-main">
                        <Component {...pageProps} />
                      </main>
                    </div>
                    <SupportBanner />
                    <Footer />
                  </div>
                </ViewContext.Provider>
              </div>
            </RecoilRoot>
          </IntlProvider>
        </QueryParamProvider>
      </DynamicBrowserRouter>
    </ApolloProvider>
  );
}

export default MyApp;
