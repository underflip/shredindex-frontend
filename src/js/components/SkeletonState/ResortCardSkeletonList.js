import React from 'react';
import { CButton } from '@coreui/react';
import ResortCardSkeleton from './ResortCardSkeleton';

const ResortCardSkeletonList = () => (
  <>

    {[{ id: 1, opacity: 'opacity-1' },
      { id: 2, opacity: 'opacity-6' },
      { id: 3, opacity: 'opacity-4' },
      { id: 4, opacity: 'opacity-2' },
      { id: 5, opacity: 'opacity-2' },
    ].map((opacity, id) => (
      <div key={id} className={opacity}>
        <ResortCardSkeleton />
      </div>
    ))}
  </>
);

export default ResortCardSkeletonList;
