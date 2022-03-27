import {
  CCard, CCardBody, CCardHeader, CImage,
} from '@coreui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import GnarlyCrash from '../../../images/GnarlyCrash.svg';

const ResortCardError = ({
  title, titleId, help, helpId, error: { stack, message, name },
}) => (
  <div className="resort-card resort-card--error d-flex justify-content-center fade-in">
    <CCard className="resort-card__wrap collapsed">
      <CCardHeader className="resort-card__header-wrap pb-0">
        <h1 className="fw-bold fs-3">
          <FormattedMessage id={titleId} defaultMessage={title} />
        </h1>
        <div className="mb-4 error-help">
          {help && <p><FormattedMessage id={helpId} defaultMessage={help} /></p>}
        </div>
      </CCardHeader>
      <CCardBody className="resort-card__body-wrap pt-0 pb-0 mb-3">
        <div className="resort-card__error-details-wrap d-flex mb-2 ps-4 pe-4">
          <div className="resort-card__error-details">
            <div className="resort-card__error-details-title mt-2 mb-2">
              <h3 className="fs-5 text-break">{name}</h3>
              <p className="fs-6 fw-light text-break">{message}</p>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                <p className="fs-6 fw-lighter text-break">{stack}</p>
              </details>
            </div>
          </div>
        </div>
      </CCardBody>
      <CImage className="resort-card__error-image" src={GnarlyCrash} />
    </CCard>
  </div>
);

export default ResortCardError;

ResortCardError.propTypes = {
  title: PropTypes.string.isRequired,
  titleId: PropTypes.string.isRequired,
  help: PropTypes.string.isRequired,
  helpId: PropTypes.string.isRequired,
  error: PropTypes.shape({
    stack: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
