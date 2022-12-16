import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CModalBody,
} from '@coreui/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { atom, useRecoilState } from 'recoil';
import Filters from '../Filters/Filters';

export const showFilterTrayState = atom({
  key: 'showFilterTrayState',
  default: false,
});

const FilterTray = () => {
  const [visible, setVisible] = useRecoilState(showFilterTrayState);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <CModal
      className="filter-tray"
      fullscreen="lg"
      scrollable
      visible={visible}
      onClose={() => handleClose()}
    >
      <CModalHeader>
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

export default FilterTray;
