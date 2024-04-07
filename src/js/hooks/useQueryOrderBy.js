import { atom } from 'recoil';
import { useQuery } from '@apollo/client';
import { QUERY_FILTERS } from './useQueryFilters';

function getCurrentOrderByFromUrl() {
  const params = new URLSearchParams(window.location.search);

  try {
    const orderBy = params.get('orderBy');
    if (orderBy) {
      const parsedOrderBy = JSON.parse(orderBy);

      return { params: parsedOrderBy, paramsLoaded: true };
    }
  } catch (error) { /* empty */ }

  return { params: [], paramsLoaded: false };
}

export const currentOrderByState = atom({
  key: 'showCurrentOrderByState',
  default: getCurrentOrderByFromUrl().params,
});

const UseQueryOrderBy = () => {
  const {
    loading,
    error,
    data,
  } = useQuery(QUERY_FILTERS);

  const orderOptions = [];
  const mappedOptions = [];
  if (data) {
    const scores = data.filters.filter((item) => (item?.category === 'Underflip\\Resorts\\Models\\Rating'));
    const numerics = data.filters.filter((item) => (item?.category === 'Underflip\\Resorts\\Models\\Numeric'));
    const totalScore = [{
      label: 'Total score',
      value: 'total_score',
    }];

    orderOptions.push(...scores);
    orderOptions.push(...numerics);

    mappedOptions.push(...totalScore, ...orderOptions.map((orderType) => ({
      label: orderType.title,
      value: orderType.name,
    })));

    return { loading, error, mappedOptions };
  }

  return { loading, error, mappedOptions };
};

export default UseQueryOrderBy;
