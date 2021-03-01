import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Header from '../Header/Header';
import MobileNav from '../Header/MobileNav';
import MobileNavContext from '../Header/ToggleMobileNavContext';

export default function Home() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="c-app c-default-layout">
      <MobileNavContext.Provider value={{ toggleNav, setToggleNav }}>
        <MobileNav toggle={toggleNav} setToggleNav={setToggleNav} />
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
      </MobileNavContext.Provider>
    </div>
  );
}
