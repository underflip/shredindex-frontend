import React from 'react';
import ResortCardSkeleton from './ResortCardSkeleton';

const ResortCardSkeletonList = () => (
  <>
    <div className="opacity-1">
      <ResortCardSkeleton />
    </div>
    <div className="opacity-6">
      <ResortCardSkeleton />
    </div>
    <div className="opacity-4">
      <ResortCardSkeleton />
    </div>
    <div className="opacity-2">
      <ResortCardSkeleton />
    </div>
    <div className="opacity-2">
      <ResortCardSkeleton />
    </div>
  </>
);

export default ResortCardSkeletonList;
