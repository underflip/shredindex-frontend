import React, { useState } from 'react';
import { CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSettings } from '@coreui/icons';
import { FormattedMessage } from 'react-intl';
import FilterTray from '../FilterTray/FilterTray';
import LifeStyleTray from '../LifeStyleTray/LifeStyleTray';

const FilterMenu = () => {
  const [showFilterTray, setShowFilterTray] = useState(false);
  const [showLifeStyleTray, setShowLifeStyleTray] = useState(false);

  const handleClose = () => {
    setShowFilterTray(false);
    setShowLifeStyleTray(false);
  };

  return (
    <div className="filter-menu mb-4 d-flex flex-row">
      <FilterTray
        showFilterTray={showFilterTray}
        handleClose={handleClose}
      />
      <LifeStyleTray
        showLifeStyleTray={showLifeStyleTray}
        handleClose={handleClose}
      />
      <CButton
        color="primary"
        aria-roledescription={(
          <FormattedMessage
            id="shredindex.filter.SHOW_LIFESTYLES_TRAY"
            defaultMessage="Show lifestyles tray"
          />
        )}
        className="me-2 w-100 filter-menu__show-lifestyles-tray"
        onClick={() => setShowLifeStyleTray(true)}
      >
        <FormattedMessage
          id="shredindex.filter.LIFESTYLES"
          defaultMessage="Lifestyles"
        />
      </CButton>
      <CButton
        color="light"
        aria-roledescription={(
          <FormattedMessage
            id="shredindex.filter.SHOW_FILTERS_TRAY"
            defaultMessage="Show filters tray"
          />
        )}
        className="ms-2 w-100 filter-menu__show-filters-tray"
        onClick={() => setShowFilterTray(true)}
      >
        <CIcon icon={cilSettings} />
      &nbsp;
        <FormattedMessage
          id="shredindex.filter.FILTERS"
          defaultMessage="Filters"
        />
      </CButton>
    </div>
  );
};

export default FilterMenu;
