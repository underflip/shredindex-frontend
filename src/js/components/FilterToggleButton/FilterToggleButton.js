import React, { useState } from 'react';
import { CTooltip } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilX } from '@coreui/icons';
import PropTypes from 'prop-types';

const FilterToggleButton = ({
  label, tooltip, children, className,
}) => {
  const [toggleOn, setToggleOn] = useState(false);

  const hideContainer = () => {
    setToggleOn(false);
  };

  const showContainer = () => {
    if (!toggleOn) {
      setToggleOn(true);
    }
  };

  return (
    <div className={`filter-toggle-button ${className}`}>
      <div
        onClick={showContainer}
        onKeyPress={showContainer}
        role="button"
        tabIndex={0}
        className={`btn btn-light filter-toggle-button__frame
      ${!toggleOn ? 'filter-toggle-button__frame--filter-off' : 'filter-toggle-button__frame--filter-on'}`}
      >
        <div
          className="filter-toggle-button__frame-header d-inline-flex w-100"
        >
          <div className="filter-toggle-button__frame-header-left-align d-inline-flex gap-2 w-100">
            <div className="filter-toggle-button__frame-header-title fw-bold">
              {label}
            </div>
            {toggleOn
              && (
                <CTooltip
                  content={tooltip}
                >
                  <div className="info-tooltip ms-1 border-radius-large">
                    <span className="info-icon small">?</span>
                  </div>
                </CTooltip>
              )}
          </div>
          {toggleOn
            && (
            <div className="filter-toggle-button__frame-header-right-align d-inline-flex justify-content-end gap-2">
              <div
                onClick={hideContainer}
                onKeyPress={hideContainer}
                role="button"
                tabIndex={0}
                className="filter-toggle-button__frame-header-close ps-2 pe-1 fw-bold"
              >
                <CIcon icon={cilX} size="md" />
              </div>
            </div>
            )}
        </div>
        {toggleOn && children
          && (
          <div className="filter-toggle-button__frame-body p-4 bg-dark">
            {children}
          </div>
          )}
      </div>
      {!toggleOn
        && (
          <CTooltip
            content={tooltip}
          >
            <div className="info-tooltip ms-2 border-radius-large">
              <span className="info-icon fw-bold small">?</span>
            </div>
          </CTooltip>
        )}
    </div>
  );
};

FilterToggleButton.defaultProps = {
  children: null,
  className: null,
};

FilterToggleButton.propTypes = {
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FilterToggleButton;