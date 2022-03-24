import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
import React from 'react';
import {
  withQueryParams,
  NumberParam,
} from 'use-query-params';
import PropTypes from 'prop-types';
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
      url
      affiliate_url
      description
      location {
        id
        city
        country {
          id
          code
          name
        }
        state {
          id
          code
          name
        }
      }
      total_score {
        value
      }
      highlights {
        id
        title
        value
      }
      lowlights {
        id
        title
        value
      }
      resort_images {
        id
        name
        alt
        sort_order
        image {
          path
          content_type
        }
      }
      comments {
        id
        comment
        author
      }
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
  const lastPageStore = 10;

  const skeletonList = [];
  for (let i = 1; i <= cardLimit; i += 1) {
    skeletonList.push(i);
  }

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
        errorStack={error.stack}
        errorInfo={error.message}
        error={error.name}
      />
    );
  }

  if (loading) {
    return (
      <>
        <div className="col-sm-12">
          {skeletonList.map((index) => (
            <ResortCardSkeleton key={index} />
          ))}
        </div>
        <Pagination
          currentPage={num}
          lastPage={lastPageStore}
        />
      </>
    );
  }

  const { resorts: { data: resorts, paginatorInfo: { currentPage, lastPage } } } = data;

  return (
    <>
      <div className="ranked-resort-list__filters-wrap col-sm-12">
        <FilterResorts />
      </div>
      <div className="ranked-resort-list__resort-card-list-wrap col-sm-12">
        {resorts.map((resort) => (
          <ResortCard key={resort.id} resortData={resort} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </>
  );
};

RankedResortList.propTypes = {
  query: PropTypes.shape({
    page: PropTypes.number,
  }).isRequired,
};

export default withQueryParams({
  page: NumberParam,
}, RankedResortList);
