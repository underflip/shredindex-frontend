import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from '../Header/Header';

const Home = () => (
  <>
    <div className="c-wrapper">
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
  </>
);

export default Home;
