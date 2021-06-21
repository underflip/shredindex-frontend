import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Resorts from './components/Resorts/Resorts';
import Footer from './components/Footer/Footer';
import FooterNav from './components/FooterNav/FooterNav';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import SidebarNav from './components/SidebarNav/SidebarNav';
import SupportBanner from './components/SupportBanner/SupportBanner';
import ViewContext from './components/ViewContext/ViewContext';
import langEn from './lang/en.json';
import Resort from './components/Resort/Resort';
import Layout from './components/Layout/Layout';

const t = {
  en: langEn,
};

const locale = 'en';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.GRAPHQL_URI,
});

const client = new ApolloClient({
  cache,
  link,
});

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Preloader>
          <IntlProvider locale={locale} message={t[locale]}>
            <div className="c-app c-default-layout">
              <ViewContext.Provider value={{ showSidebar, setShowSidebar }}>
                <SidebarNav />
                <div className="c-wrapper">
                  <Header />
                  <div className="c-body">
                    <Switch>
                      <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
                      <Route exact path="/resorts" component={Resorts} />
                      <Route exact path="/resorts/:name/:title" component={Resort} />
                    </Switch>
                  </div>
                  <SupportBanner />
                  <Footer />
                  <FooterNav />
                </div>
              </ViewContext.Provider>
            </div>
          </IntlProvider>
        </Preloader>
      </ApolloProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
