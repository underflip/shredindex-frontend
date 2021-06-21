import React, { useState, Suspense } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { CContainer, CFade } from '@coreui/react';
import Header from '../Header/Header';
import SidebarNav from '../SidebarNav/SidebarNav';
import ViewContext from '../ViewContext/ViewContext';
import routingConfig from '../config/routing-config';

export default function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <ViewContext.Provider value={{ showSidebar, setShowSidebar }}>
        <main className="c-main">
          <CContainer fluid>
            <Switch>
              {routingConfig.map((
                route, path, exact, name,
              ) => route.component && (
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
          </CContainer>
        </main>
      </ViewContext.Provider>
    </>
  );
}
