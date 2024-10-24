import React from 'react';
import { useSetRecoilState } from 'recoil';
import { CBadge, CButton } from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { cilSettings } from '@coreui/icons';
import { FormattedMessage } from 'react-intl';
import RankedResortFilterTray from '../RankedResortFilterTray/RankedResortFilterTray';
import { showFilterTrayState } from '../../atoms/showFilterTray';
import RankedResortLifeStyleTray from '../RankedResortLifeStyleTray/RankedResortLifeStyleTray';
import { showLifestyleTrayState } from '../../atoms/showLifestyleTray';
import RankedResortLocationTray from '../RankedResortLocationTray/RankedResortLocationTray';
import { showLocationTrayState } from '../../atoms/showLocationTray';

interface RankedResortFilterMenuProps {
  filterQuantity: number;
}

const RankedResortFilterMenu: React.FC<RankedResortFilterMenuProps> = ({ filterQuantity }) => {
  const setShowFilterTray = useSetRecoilState(showFilterTrayState);
  const setShowLifestyleTray = useSetRecoilState(showLifestyleTrayState);
  const setShowLocationTray = useSetRecoilState(showLocationTrayState);

  return (
    <div className="filter-menu mb-4 d-flex flex-row gap-4">
      <CButton
        color="dark"
        aria-roledescription={(
          <FormattedMessage
            id="shredindex.filter.SHOW_LIFESTYLES_TRAY"
            defaultMessage="Show Location tray"
          />
        ).toString()}
        className="me-2 w-100 filter-menu__show-location-tray"
        onClick={() => setShowLocationTray(true)}
      >
        <FormattedMessage
          id="shredindex.filter.LOCATION"
          defaultMessage="Location"
        />
      </CButton>
      <CButton
        color="dark"
        aria-roledescription={(
          <FormattedMessage
            id="shredindex.filter.SHOW_LIFESTYLES_TRAY"
            defaultMessage="Show lifestyles tray"
          />
        ).toString()}
        className="me-2 w-100 filter-menu__show-lifestyles-tray"
        onClick={() => setShowLifestyleTray(true)}
      >
        <FormattedMessage
          id="shredindex.filter.SORTING"
          defaultMessage="Sorting"
        />
      </CButton>
      <CButton
        color="primary"
        aria-roledescription={(
          <FormattedMessage
            id="shredindex.filter.SHOW_FILTERS_TRAY"
            defaultMessage="Show filters tray"
          />
        ).toString()}
        className="ms-2 w-100 filter-menu__show-filters-tray position-relative"
        onClick={() => setShowFilterTray(true)}
      >
        <CIcon icon={cilSettings} />
        {filterQuantity >= 1 && (
          <CBadge id="filterQuanitity" position="top-end" shape="rounded-pill" color="secondary">
            {filterQuantity}
          </CBadge>
        )}
        &nbsp;
        <FormattedMessage
          id="shredindex.filter.FILTERS"
          defaultMessage="Filters"
        />
      </CButton>
      <RankedResortLocationTray />
      <RankedResortFilterTray />
      <RankedResortLifeStyleTray />
    </div>
  );
};

export default RankedResortFilterMenu;
