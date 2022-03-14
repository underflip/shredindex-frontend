import PropTypes from 'prop-types';
import React from 'react';
import { withQueryParams, NumberParam } from 'use-query-params';

/**
 * https://github.com/pbeshai/use-query-params/tree/master/packages/use-query-params#withqueryparams
 */
const UseQueryParamsSecondExample = ({ query, setQuery }) => {
  const count = query.secondCount || 1;

  return (
    <>
      <button type="button" onClick={() => setQuery({ secondCount: count + 1 })}>
        { `Increase second count ${count}` }
      </button>
    </>
  );
};

UseQueryParamsSecondExample.propTypes = {
  query: PropTypes.shape({
    secondCount: PropTypes.number,
  }).isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default withQueryParams({ secondCount: NumberParam }, UseQueryParamsSecondExample);
