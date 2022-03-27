import React from 'react';
import { CPagination, CPaginationItem } from '@coreui/react';
import { NumberParam, withQueryParams } from 'use-query-params';
import PropTypes from 'prop-types';

const Pagination = ({
  lastPage,
  paginationTabLimit,
  size,
  query,
  setQuery,
  currentPage,
}) => {
  const currentPageIndex = query.page || currentPage;

  const floor = Math.min(Math.max(1, currentPageIndex - Math.floor(
    paginationTabLimit / 2,
  )), lastPage - paginationTabLimit + 1);
  const pageSeq = Array.from({ length: paginationTabLimit }, (x, i) => i + floor);

  const paginationData = [
    {
      name: '«',
      ariaLabel: 'First',
      disabled: currentPageIndex === 1,
      setPageTo: 1,
    },
    {
      name: '‹',
      ariaLabel: 'Previous',
      disabled: currentPageIndex === 1,
      setPageTo: 1,
    },
    {
      name: '›',
      ariaLabel: 'Next',
      disabled: lastPage === currentPageIndex,
      setPageTo: currentPageIndex + 1,
    },
    {
      name: '»',
      ariaLabel: 'Last',
      disabled: lastPage === currentPageIndex,
      setPageTo: lastPage,
    },
  ];

  pageSeq.map((x, index) => (
    paginationData.splice(2 + index, 0, {
      name: x,
      ariaLabel: x,
      active: currentPageIndex === x,
      setPageTo: x,
    })
  ));

  const morePages = {
    name: '...',
    ariaLabel: '...',
    disabled: true,
    setPageTo: null,
  };

  if (currentPageIndex > 2 && lastPage > 3) {
    paginationData.splice(2, 0, morePages);
  }

  if (currentPageIndex < lastPage - 1 && lastPage > 3) {
    paginationData.splice(-2, 0, morePages);
  }

  return (
    <CPagination align="center" size={size} aria-label="Page navigation">
      {paginationData.map((x) => (
        <CPaginationItem
          key={x.ariaLabel}
          aria-label={x.ariaLabel}
          disabled={x.disabled}
          active={x.active}
          onClick={() => setQuery({ page: x.setPageTo })}
        >
          {x.name}
        </CPaginationItem>
      ))}

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
