import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CModalBody,
} from '@coreui/react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Filters from '../Filters/Filters';

const FilterTray = ({ showFilterTray, handleClose }) => {
  const [visible, setVisible] = useState(showFilterTray);

  useEffect(() => {
    setVisible(showFilterTray);
  }, [showFilterTray]);

  return (

    <CModal
      className="filter-tray"
      fullscreen="lg"
      scrollable
      visible={visible}
      onClose={() => { setVisible(false); handleClose(); }}
    >
      <CModalHeader onClose={() => { setVisible(false); handleClose(); }}>
        <CModalTitle className="h4 text-center mx-auto w-100 fw-bold">
          <FormattedMessage
            id="shredindex.filter.FILTERS"
            defaultMessage="Filters"
          />
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        <Filters />
      </CModalBody>
      <CModalFooter className="justify-content-between" />
    </CModal>
  );
};

FilterTray.propTypes = {
  showFilterTray: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default FilterTray;
