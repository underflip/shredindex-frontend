import React from 'react';
import { CTooltip } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilX } from '@coreui/icons';
import PropTypes from 'prop-types';
import useRankedResortFiltersToggleButtonState from '../../hooks/useRankedResortFiltersToggleButtonState';

const FilterToggleButton = ({
  id, label, tooltip, children, className, updateForm,
}) => {
  const [toggleOn, setToggleOn] = useRankedResortFiltersToggleButtonState(id);

  const handleToggle = async () => {
    if (!toggleOn) {
      setToggleOn(true);
      await updateForm(id, true);
    }
  };

  const handleClose = async () => {
    setToggleOn(false);
    await updateForm(id, false);
  };

  function isFunction(value) {
    return !!(value && value.constructor && value.call && value.apply);
  }

  return (
    <div id={id} className={`filter-toggle-button ${className}`}>
      <div
        onClick={handleToggle}
        onKeyPress={handleToggle}
        role="button"
        tabIndex={0}
        className={`btn btn-light filter-toggle-button__frame
      ${!toggleOn ? 'filter-toggle-button__frame--filter-off' : 'filter-toggle-button__frame--filter-on'}`}
      >
        <div className="filter-toggle-button__frame-header d-inline-flex w-100">
          <div className="filter-toggle-button__frame-header-left-align d-inline-flex gap-2 w-100">
            <div className="filter-toggle-button__frame-header-title fw-bold">
              {label}
            </div>
            {toggleOn && (
              <CTooltip content={tooltip}>
                <div className="info-tooltip ms-1 border-radius-large">
                  <span className="info-icon small">?</span>
                </div>
              </CTooltip>
            )}
          </div>
          {toggleOn && (
            <div className="filter-toggle-button__frame-header-right-align d-inline-flex justify-content-end gap-2">
              <div
                onClick={handleClose}
                onKeyPress={handleClose}
                role="button"
                tabIndex={0}
                className="filter-toggle-button__frame-header-close ps-2 pe-1 fw-bold"
              >
                <CIcon icon={cilX} size="lg" />
              </div>
            </div>
          )}
        </div>
        {toggleOn && children && (
          <div className="filter-toggle-button__frame-body p-4 bg-dark">
            {isFunction(children) ? children(id, toggleOn) : children}
          </div>
        )}
      </div>
      {!toggleOn && (
        <CTooltip content={tooltip}>
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
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  className: PropTypes.string,
  updateForm: PropTypes.func.isRequired,
};

export default FilterToggleButton;
