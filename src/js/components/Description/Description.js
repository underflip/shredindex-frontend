import React, { useState } from 'react';
import {
  CCard, CCardBody, CCardHeader, CCollapse, CLink, CListGroup,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilChevronBottom, cilChevronRight } from '@coreui/icons';
import ResortMainInfo from "../config/resort-main-config";

const Description = () => {
  const [statsAll, setStatsAll] = useState(true);
  return (
    <CCard accentColor="primary">
      <CCardHeader onClick={() => setStatsAll(!statsAll)}>
        <CLink className="mr-1">
          <CIcon
            size="sm"
            content={statsAll ? cilChevronBottom : cilChevronRight}
            name={statsAll ? 'cil-chevron-bottom' : 'cil-chevron-right'}
          />
        </CLink>
        <span className="h6">Description</span>
      </CCardHeader>
      <CCollapse show={statsAll}>
        <CCardBody>
          <p>{ResortMainInfo.description}</p>
        </CCardBody>
      </CCollapse>
    </CCard>
  );
};

export default Description;
