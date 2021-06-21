import { CCard } from '@coreui/react';
import React from 'react';

const LoadingSkeleton = (
  <div className="container resort-container skeleton">
    <CCard className="bg-gradient-dark p-5" />
    <CCard className="bg-gradient-dark p-5" />
    <CCard className="bg-gradient-dark p-5" />
    <CCard className="bg-gradient-dark p-5" />
  </div>
);

export default LoadingSkeleton;
