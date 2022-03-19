import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
import React from 'react';
import {
  withQueryParams,
  NumberParam,
} from 'use-query-params';
import ResortCard from '../ResortCard/ResortCard';
import Pagination from '../Pagination/Pagination';
import ResortCardError from '../ResortCardError/ResortCardError';
import ResortCardSkeleton from '../SkeletonState/ResortCardSkeleton';
import FilterResorts from '../FilterResorts/FilterResorts';

export const QUERY_RESORTS = gql`
query Resorts($first: Int! $page: Int!){
  resorts(
    first: $first
    page: $page
    orderBy: {
      type_name: "total_score",
      direction: "desc"
    }
  ) {
    data {
      id
      title
      url_segment
    }
  paginatorInfo {
    currentPage
    lastPage
    }
  }
}
`;

const RankedResortList = ({ query }) => {
  const { page: num } = query;
  const cardLimit = 5;

  const skeletonList = [];
  for (let i = 1; i <= cardLimit; i++) {
    skeletonList.push(i);
  }

  const getQueryVariables = (num) => {
    const pageNumber = num || 1;
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
        errorStack={error.stack}
        errorInfo={error.message}
        error={error.name}
      />
    );
  }

  if (loading) {
    return (
      <>
        <div className="col-lg-3 col-sm-12" />
        <div className="col-lg-7 col-sm-12">
          {skeletonList.map((index) => (
            <ResortCardSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }

  const { resorts: { data: resorts, paginatorInfo: { currentPage, lastPage } } } = data;

  return (
    <>
      <div className="ranked-resorts__filters-wrap col-lg-3 col-sm-12">
        <FilterResorts />
      </div>
      <div className="ranked-resorts__resort-card-list-wrap col-lg-7 col-sm-12">
        {resorts.map(({ id, url_segment }) => (
          <ResortCard key={id} resortId={id} urlSegment={url_segment} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </>
  );
};

export default withQueryParams({
  page: NumberParam,
}, RankedResortList);
