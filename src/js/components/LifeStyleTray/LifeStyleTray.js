import {
  CModal, CModalHeader, CModalTitle, CModalBody,
} from '@coreui/react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const LifeStyleTray = ({ showLifeStyleTray, handleClose }) => {
  const [visible, setVisible] = useState(showLifeStyleTray);

  useEffect(() => {
    setVisible(showLifeStyleTray);
  }, [showLifeStyleTray]);

  return (

    <CModal
      className="lifestyle-tray"
      fullscreen="lg"
      scrollable
      visible={visible}
      onClose={() => { setVisible(false); handleClose(); }}
    >
      <CModalHeader onClose={() => { setVisible(false); handleClose(); }}>
        <CModalTitle className="h4 text-center mx-auto w-100 fw-bold">
          <FormattedMessage
            id="shredindex.filter.LIFESTYLES"
            defaultMessage="LifeStyles"
          />
        </CModalTitle>
      </CModalHeader>
      <CModalBody />
    </CModal>
  );
};

LifeStyleTray.propTypes = {
  showLifeStyleTray: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default LifeStyleTray;
