import React, { useState } from 'react';
import {
  withQueryParams,
  NumberParam,
} from 'use-query-params';
import PropTypes from 'prop-types';
import ResortCard from '../ResortCard/ResortCard';
import Pagination, { paginationSize } from '../Pagination/Pagination';
import ResortCardError from '../ResortCardError/ResortCardError';
import ResortCardSkeleton from '../SkeletonState/ResortCardSkeleton';
import RankedResortFilterMenu from '../RankedResortFilterMenu/RankedResortFilterMenu';
import useQueryResorts from '../../hooks/useQueryResorts';
import useWindowDimensions from '../../hooks/getWindowDimensions';
import RankedResortResultCount from '../RankedResortResultCount/RankedResortResultCount';
import breakpoints from '../config/breakpoints';
import RankedResortFilterMenuSkeleton from '../RankedResortFilterMenu/RankedResortFilterMenuSkeleton';
import RankedResortResultCountSkeleton from '../RankedResortResultCount/RankedResortResultCountSkeleton';

const RankedResortList = ({ query, cardLimit }) => {
  const { page: num } = query;
  const { width } = useWindowDimensions();
  const { loading, data, error } = useQueryResorts(cardLimit, Number(num) || 1);
  const [maxPageState] = useState({ key: '', maxPages: 0 });
  const key = [cardLimit].join('-');

  if (maxPageState.key !== key) {
    // Update state without re-render
    maxPageState.key = key;
    maxPageState.maxPages = 0;
  }

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
      <div className="ranked-resort-list">
        <div className="ranked-resort-list__filters-wrap col-sm-12 w-100">
          <RankedResortFilterMenuSkeleton />
        </div>
        <div className="ranked-resort-list__result-count-wrap col-sm-12 w-100">
          <RankedResortResultCountSkeleton />
        </div>
        <div className="ranked-resort-list--loading col-sm-12">
          {Array.from({ length: cardLimit }, (x, i) => i).map((index) => (
            <ResortCardSkeleton key={index} />
          ))}
        </div>
        <Pagination
          currentPage={num}
          lastPage={maxPageState.maxPages}
          size={width > breakpoints.sm ? paginationSize.lg : paginationSize.sm}
        />
      </div>
    );
  }

  const { resorts: { data: resorts, paginatorInfo: { currentPage, lastPage, total } } } = data;

  if (maxPageState.maxPages !== lastPage) {
    // Capture max pages for state
    // (also updates if lastPage has changed behind the scenes)
    // Update state without re-render
    maxPageState.maxPages = lastPage;
  }

  return (
    <div className="ranked-resort-list">
      <div className="ranked-resort-list__filters-wrap col-sm-12 w-100">
        <RankedResortFilterMenu />
      </div>
      <div className="ranked-resort-list__result-count-wrap col-sm-12 w-100">
        <RankedResortResultCount total={total} currentPage={currentPage} lastPage={lastPage} />
      </div>
      <div className="ranked-resort-list__resort-card-list-wrap col-sm-12">
        {resorts.map((resort) => (
          <ResortCard key={resort.id} resortData={resort} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        lastPage={maxPageState.maxPages}
        size={width > breakpoints.sm ? paginationSize.lg : paginationSize.sm}
      />
    </div>
  );
};

RankedResortList.propTypes = {
  query: PropTypes.shape({
    page: PropTypes.number,
  }).isRequired,
  cardLimit: PropTypes.number.isRequired,
};

export default withQueryParams({
  page: NumberParam,
}, RankedResortList);
