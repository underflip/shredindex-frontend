import React from 'react';
import { useSetRecoilState } from 'recoil';
import { CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSettings } from '@coreui/icons';
import { FormattedMessage } from 'react-intl';
import FilterTray, { showFilterTrayState } from '../FilterTray/FilterTray';
import LifeStyleTray, { showLifestyleTrayState } from '../LifeStyleTray/LifeStyleTray';

const FilterMenu = () => {
  const setShowFilterTray = useSetRecoilState(showFilterTrayState);
  const setShowLifestyleTray = useSetRecoilState(showLifestyleTrayState);

  return (
    <div className="filter-menu mb-4 d-flex flex-row gap-4">
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
      <CButton
        color="primary"
        aria-roledescription={(
          <FormattedMessage
            id="shredindex.filter.SHOW_LIFESTYLES_TRAY"
            defaultMessage="Show lifestyles tray"
          />
        )}
        className="me-2 w-100 filter-menu__show-lifestyles-tray"
        onClick={() => setShowLifestyleTray(true)}
      >
        <FormattedMessage
          id="shredindex.filter.LIFESTYLES"
          defaultMessage="Lifestyles"
        />
      </CButton>
      <FilterTray />
      <LifeStyleTray />
    </div>
  );
};

export default FilterMenu;
