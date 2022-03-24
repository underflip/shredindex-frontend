import React from 'react';
import { CPagination, CPaginationItem } from '@coreui/react';
import { NumberParam, withQueryParams } from 'use-query-params';
import PropTypes from 'prop-types';

const Pagination = ({
  lastPage,
  currentPage,
  paginationTabLimit,
  size,
  query,
  setQuery,
}) => {
  const currentPageIndex = currentPage || query.page;

  const pageList = [];
  for (let i = 1; i <= lastPage; i += 1) {
    pageList.push(i);
  }

  const showPageList = () => {
    if (currentPageIndex === 1) {
      return pageList.splice(currentPageIndex - 1, paginationTabLimit);
    }
    if (currentPageIndex === lastPage) {
      return pageList.splice(currentPageIndex - 3, paginationTabLimit);
    }
    return pageList.splice(currentPageIndex - 2, paginationTabLimit);
  };

  return (
    <CPagination align="center" size={size} aria-label="Page navigation">
      <CPaginationItem
        aria-label="First"
        disabled={currentPageIndex === 1}
        onClick={() => setQuery({ page: 1 })}
      >
        &laquo;
      </CPaginationItem>
      <CPaginationItem
        aria-label="Previous"
        disabled={currentPageIndex === 1}
        onClick={() => setQuery({ page: currentPageIndex - 1 })}
      >
        ‹
      </CPaginationItem>
      {currentPageIndex > 2
    && (
      <CPaginationItem
        disabled
        onClick={() => setQuery({ page: currentPageIndex - 1 })}
      >
        …
      </CPaginationItem>
    )}
      {showPageList().map((number) => (
        <CPaginationItem
          key={number}
          active={number === currentPageIndex}
          onClick={() => setQuery({ page: number })}
        >
          {number}
        </CPaginationItem>
      ))}
      {currentPageIndex < lastPage - 1
    && (
      <CPaginationItem
        disabled
        onClick={() => setQuery({ page: currentPageIndex - 1 })}
      >
        …
      </CPaginationItem>
    )}
      <CPaginationItem
        aria-label="Next"
        disabled={lastPage === currentPageIndex}
        onClick={() => setQuery({ page: currentPageIndex + 1 })}
      >
        ›
      </CPaginationItem>
      <CPaginationItem
        aria-label="Last"
        disabled={currentPageIndex === lastPage}
        onClick={() => setQuery({ page: lastPage })}
      >
        &raquo;
      </CPaginationItem>
    </CPagination>
  );
};

Pagination.defaultProps = {
  paginationTabLimit: 3,
  currentPage: 1,
  size: 'sm',
};

Pagination.propTypes = {
  query: PropTypes.shape({
    page: PropTypes.number,
  }).isRequired,
  setQuery: PropTypes.func.isRequired,
  lastPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  paginationTabLimit: PropTypes.number,
  size: PropTypes.string,
};

export default withQueryParams({
  page: NumberParam,
}, Pagination);
