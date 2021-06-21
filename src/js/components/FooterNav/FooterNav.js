import React from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CNav,
  CNavLink,
} from '@coreui/react';
import routingConfig from '../config/routing-config';

const FooterNav = () => (
  <CRow>
    <CCol xs="12">
      <CCard className="bg-gradient-dark m-0 border-0">
        <CCardBody>
          <CNav className="justify-content-center">
            <FooterNavList />
          </CNav>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
);

const FooterNavList = () => routingConfig.map((nav) => (
  <CNavLink key={nav.path} to={nav.path} className="text-light">
    {nav.name}
  </CNavLink>
));

export default FooterNav;
