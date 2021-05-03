import React, { useState, Suspense } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { CContainer, CFade } from '@coreui/react';
import Header from '../Header/Header';
import SidebarNav from '../Sidebar/SidebarNav';
import ViewContext from '../ViewContext/ViewContext';
import NavConfig from '../config/nav-config';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

export default function Layout() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="c-app c-default-layout">
      <ViewContext.Provider value={{ toggleNav, setToggleNav }}>
        <SidebarNav toggle={toggleNav} setToggleNav={setToggleNav} />
        <div className="c-wrapper">
          <Header />
          <main className="c-main">
            <CContainer fluid>
              <Suspense fallback={loading}>
                <Switch>
                  {NavConfig.map((route) => route.component && (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                  ))}
                </Switch>
              </Suspense>
            </CContainer>
          </main>
        </div>
      </ViewContext.Provider>
    </div>
  );
}
