import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Resorts from './components/Resorts/Resorts';
import langEn from './lang/en.json';
import Resort from './components/Resort/Resort';
import Layout from './components/Layout/Layout';

// Containers
// const Layout = React.lazy(() => import('./components/Layout/Layout'));

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

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <IntlProvider locale={locale} message={t[locale]}>
        <Switch>
          <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
          <Route exact path="/resorts" component={Resorts} />
          <Route exact path="/resorts/:name/:country" component={Resort} />
        </Switch>
      </IntlProvider>
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
