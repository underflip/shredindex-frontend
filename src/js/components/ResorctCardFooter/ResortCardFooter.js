import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilArrowRight, cilChevronBottom } from '@coreui/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const ResortCardFooter = ({ url, collapsed }) => (
  <div className="d-flex justify-content-between">
    <div className="resort-card__expand">
      <CIcon icon={cilChevronBottom} />
    </div>
    <Link className="resort-card__resort-link" to={url}>
      <div className="resort-card__go-to-resort">
        {collapsed ? null : (
          <span className="me-2 fade-in user-select-none">
            <FormattedMessage id="shredindex.resortcard.GOTORESORT" defaultMessage="Go to Resort" />
          </span>
        )}
        <CIcon icon={cilArrowRight} />
      </div>
    </Link>
  </div>
);

ResortCardFooter.propTypes = {
  url: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
};

export default ResortCardFooter;
