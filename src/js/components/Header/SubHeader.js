import { CBreadcrumbRouter, CHeader, CSubheader } from '@coreui/react';
import React from 'react';
import NavData from './NavData';

function SubHeader() {
  return (
    <>
      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={NavData}
        />
      </CSubheader>
    </>
  );
}

export default SubHeader;
