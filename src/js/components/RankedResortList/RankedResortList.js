import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  withQueryParams,
  NumberParam,
} from 'use-query-params';
import PropTypes from 'prop-types';
import ResortCard from '../ResortCard/ResortCard';
import Pagination from '../Pagination/Pagination';
import ResortCardError from '../ResortCardError/ResortCardError';
import ResortCardSkeleton from '../SkeletonState/ResortCardSkeleton';
import FilterMenu from '../FilterMenu/FilterMenu';
import { QUERY_RESORTS } from '../../hooks/useQueryResorts';

const RankedResortList = ({ query, cardLimit, maxPages }) => {
  const { page: num } = query;

  const getQueryVariables = (page) => {
    const pageNumber = page || 1;
    return pageNumber;
  };

  const { loading, data, error } = useQuery(
    QUERY_RESORTS,
    {
      variables: {
        first: cardLimit,
        page: getQueryVariables(num),
      },
    },
  );

  if (error) {
    return (
      <ResortCardError
        helpId="shredindex.resortcarderror.HELP"
        help="Looks like we french fried instead of pizza'd."
        titleId="shredindex.resortcarderror.TITLE"
        title="Woah!!... Gnarly Crash"
        errorName={error.name}
        errorMessageId="shredindex.resortcarderror.ERRORMESSAGE"
        errorMessage="There was an error loading the list of resorts."
        suggestionId="shredindex.resortcarderror.SUGGESTION"
        suggestion="Maybe try resetting the filters..."
      />
    );
  }

  if (loading) {
    return (
      <>
        <div className="col-sm-12">
          {Array.from({ length: cardLimit }, (x, i) => i).map((index) => (
            <ResortCardSkeleton key={index} />
          ))}
        </div>
        <Pagination
          size="sm"
          currentPage={num}
          lastPage={maxPages}
        />
      </>
    );
  }

  const { resorts: { data: resorts, paginatorInfo: { currentPage, lastPage } } } = data;

  return (
    <>
      <div className="ranked-resort-list__filters-wrap col-sm-12">
        <FilterMenu />
      </div>
      <div className="ranked-resort-list__resort-card-list-wrap col-sm-12">
        {resorts.map((resort) => (
          <ResortCard key={resort.id} resortData={resort} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        size="sm"
      />
    </>
  );
};

RankedResortList.propTypes = {
  query: PropTypes.shape({
    page: PropTypes.number,
  }).isRequired,
  cardLimit: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
};

export default withQueryParams({
  page: NumberParam,
}, RankedResortList);
