import React from 'react';
import { CButton } from '@coreui/react';

const FilterResorts = () => (
  <div className="filter-resorts mb-4 d-flex flex-column">
    <CButton color="primary" className="m-2">LifeStyles</CButton>
    <CButton color="dark" className="m-2">Filters</CButton>
  </div>
);

export default FilterResorts;
