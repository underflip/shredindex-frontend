import React from 'react';
import { CButton } from '@coreui/react';

const FilterMenu = () => (
  <div className="filter-resorts mb-4 d-flex flex-column">
    <CButton color="primary" className="m-2">Lifestyles</CButton>
    <CButton color="dark" className="m-2">Filters</CButton>
  </div>
);

export default FilterMenu;
