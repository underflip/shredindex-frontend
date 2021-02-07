import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from '../Header/Header';
import MobileNav from '../Header/MobileNav';

const Home = () => (
  <>
    <div className="c-app c-default-layout">
      <MobileNav />
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <div className="c-main">
            <h1>
              <FormattedMessage
                id="shredindex.app.TITLE"
                defaultMessage="Shred Index"
              />
            </h1>
            <p>
              <FormattedMessage
                id="shredindex.app.SUBTITLE"
                defaultMessage="Live your best adventure lifestyle"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
