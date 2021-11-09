import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilArrowRight, cilChevronBottom } from '@coreui/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ResortCardFooter = (props) => {
  const { url_segment, collapsed } = props;

  return (
    <div className="d-flex justify-content-between">
      <div className="resort-card__expand">
        <CIcon icon={cilChevronBottom} />
      </div>
      <Link className="resort-link" to={`resorts/${url_segment}`}>
        <div className="resort-card__go-to-resort">
          {collapsed ? null : <span className="me-2 fade-in">Go to resort </span>}
          <CIcon icon={cilArrowRight} />
        </div>
      </Link>
    </div>
  );
};

ResortCardFooter.propTypes = {
  url_segment: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
};

export default ResortCardFooter;
