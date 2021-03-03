import { CBreadcrumbRouter, CHeader, CSubheader } from '@coreui/react';
import React from 'react';
import NavService from './NavService';

function SubHeader() {
  return (
    <>
      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={NavService}
        />
      </CSubheader>
    </>
  );
}

export default SubHeader;
