import PropTypes from 'prop-types';
import React from 'react';
import { withQueryParams, NumberParam } from 'use-query-params';

/**
 * https://github.com/pbeshai/use-query-params/tree/master/packages/use-query-params#withqueryparams
 */
const UseQueryParamsExample = ({ query, setQuery }) => {
  const count = query.count || 1;

  return (
    <>
      <button type="button" onClick={() => setQuery({ count: count + 1 })}>
        { `Increase count ${count}` }
      </button>
    </>
  );
};

UseQueryParamsExample.propTypes = {
  query: PropTypes.shape({
    count: PropTypes.number,
  }).isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default withQueryParams({ count: NumberParam }, UseQueryParamsExample);
