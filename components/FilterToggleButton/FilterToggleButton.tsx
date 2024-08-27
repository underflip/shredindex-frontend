import React, { useState } from 'react';
import { CTooltip } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilX } from '@coreui/icons';
import getTypeIcon from '../../hooks/getTypeIcon';

interface FilterToggleButtonProps {
  id: string;
  label: string;
  name: string;
  tooltip: React.ReactNode;
  children?: React.ReactNode | ((id: string, toggleOn: boolean) => React.ReactNode);
  className?: string;
  updateForm: (id: string, value: boolean) => Promise<void>;
  toggle: boolean;
}

const FilterToggleButton: React.FC<FilterToggleButtonProps> = ({
                                                                 id,
                                                                 label,
                                                                 name,
                                                                 tooltip,
                                                                 children,
                                                                 className,
                                                                 updateForm,
                                                                 toggle,
                                                               }) => {
  const [toggleOn, setToggleOn] = useState(toggle);

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

  const isFunction = (value: unknown): value is Function => {
    return typeof value === 'function';
  };

  return (
    <div id={id} className={`filter-toggle-button ${className || ''}`}>
      <div
        onClick={handleToggle}
        onKeyPress={handleToggle}
        role="button"
        tabIndex={0}
        className={`btn btn-dark filter-toggle-button__frame
      ${!toggleOn ? 'filter-toggle-button__frame--filter-off' : 'filter-toggle-button__frame--filter-on'}`}
      >
        <div className="filter-toggle-button__frame-header d-flex w-100">
          <div className="filter-toggle-button__frame-header-left-align d-flex align-items-center gap-2 w-100">
            <CIcon size="lg" className="statistic__icon" icon={getTypeIcon(name)} />
            {' '}
            <div className="filter-toggle-button__frame-header-title">
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
                aria-label="filter-toggle-button"
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

export default FilterToggleButton;
