import React, { useState } from 'react';
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
import useQueryResorts from '../../hooks/useQueryResorts';
import useWindowDimensions from '../../hooks/getWindowDimensions';

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
      <>
        <div className="ranked-resort-list ranked-resort-list--loading col-sm-12">
          {Array.from({ length: cardLimit }, (x, i) => i).map((index) => (
            <ResortCardSkeleton key={index} />
          ))}
        </div>
        <Pagination
          currentPage={num}
          lastPage={maxPageState.maxPages}
          size={width > 590 ? 'lg' : 'sm'}
        />
      </>
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
    <>
      <div className="ranked-resort-list ranked-resort-list__filters-wrap col-sm-12">
        <FilterMenu />
      </div>
      <div className="ranked-resort-list ranked-resort-list__list-info col-sm-12 ">
        <div className="d-flex flex-column">
          <p className="ranked-resort-list__results-text me-auto">
            {total}
            {' '}
            results
          </p>
          <p className="ranked-resort-list__page-info-text me-auto">
            Page
            {' '}
            {currentPage}
            {' '}
            of
            {' '}
            {lastPage}
          </p>
        </div>
      </div>
      <div className="ranked-resort-list ranked-resort-list__resort-card-list-wrap col-sm-12">
        {resorts.map((resort) => (
          <ResortCard key={resort.id} resortData={resort} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        lastPage={maxPageState.maxPages}
        size={width > 590 ? 'lg' : 'sm'}
      />
    </>
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
