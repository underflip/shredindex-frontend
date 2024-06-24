import { useApolloClient } from '@apollo/client';
import { cilArrowRight, cilChevronBottom } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import queryCMSPage from '../../utility/query-cms-page';
import { QUERY_RESORT } from '../Resort/Resort';

const ResortFetchingLink = ({
  to, resortUrlSegment, className, children,
}) => {
  const client = useApolloClient();

  const queryResort = {
    query: QUERY_RESORT,
    variables: {
      url_segment: resortUrlSegment,
    },
  };

  return (
    <Link
      to={to}
      className={className}
      onMouseOver={() => client.query(queryCMSPage(to)) && client.query(queryResort)}
    >
      { children }
    </Link>
  );
};

ResortFetchingLink.propTypes = {
  to: PropTypes.string.isRequired,
  resortUrlSegment: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};

/**
 * @param url The resort's relative URL e.g /resorts/resort-url-segment
 * @param urlSegment The resort's URL segment
 * @param collapsed
 * @return {JSX.Element}
 * @constructor
 */
const ResortCardFooter = ({ url, urlSegment, collapsed }) => (
  <div className="resort-card__footer d-flex justify-content-between">
    <div className="resort-card__expand">
      <CIcon icon={cilChevronBottom} />
    </div>
    <ResortFetchingLink to={url} resortUrlSegment={urlSegment} className="resort-card__resort-link">
      <div className="resort-card__go-to-resort-button">
        <span className="resort-card__go-to-resort-text me-2 user-select-none">
          {collapsed ? null : (
            <FormattedMessage id="shredindex.resortcard.GO_TO_RESORT" defaultMessage="Go to Resort" />
          )}
        </span>
        <CIcon icon={cilArrowRight} />
      </div>
    </ResortFetchingLink>
  </div>
);

ResortCardFooter.propTypes = {
  url: PropTypes.string.isRequired,
  urlSegment: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
};

export default ResortCardFooter;
