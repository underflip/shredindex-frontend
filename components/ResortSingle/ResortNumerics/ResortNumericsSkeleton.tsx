import React from 'react';
import { FormattedMessage } from 'react-intl';
import StatisticSkeleton from '../../Statistic/StatisticSkeleton';

const ResortNumericsSkeleton = () => (
  <div className="numeric-list">
    <div className="h6 user-select-none mb-2">
      <FormattedMessage id="shredindex.statistics.KEYINSIGHTS" defaultMessage="Key insights" />
    </div>
    <div className="numeric-list__list">
      <div className="d-flex overflow-hidden">
        {[1, 2, 3, 4].map((number) => (
          <div key={number} className="numeric-list__numeric mb-3 me-3" style={{ flexShrink: 0 }}>
            <StatisticSkeleton />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ResortNumericsSkeleton;
