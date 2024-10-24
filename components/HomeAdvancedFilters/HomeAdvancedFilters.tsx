import React from 'react';
import { CButton } from '@coreui/react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import HeroDesktop from '../../images/homepage/advanced-filter-background-desktop.svg';
import HeroTablet from '../../images/homepage/advanced-filter-background-tablet.svg';
import HeroMobile from '../../images/homepage/advanced-filter-background-mobile.svg';
import AdvancedFilterSystem from '../../images/homepage/advanced-filter-filter.svg';

const AdvancedWord: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-secondary">{children}</span>
);

AdvancedWord.propTypes = {
  children: PropTypes.node.isRequired,
};

const HomeAdvancedFilters: React.FC = () => (
  <div className="advanced-filters-hero hero">
    <div className="hero__image">
      <div className="hero__svg hero__svg--desktop">
        <HeroDesktop alt="Desktop Hero" />
      </div>
      <div className="hero__svg hero__svg--tablet">
        <HeroTablet alt="Tablet Hero" />
      </div>
      <div className="hero__svg hero__svg--mobile">
        <HeroMobile alt="Mobile Hero" />
      </div>
    </div>
    <div className="advanced-filters-content hero__heading text-center">
      <h3 className="fw-bolder">
        <FormattedMessage
          id="shredindex.homeAdvancedFilters.ADVANCED_FILTERING"
          defaultMessage="Use our {advanced} filtering system."
          values={{
            advanced: <AdvancedWord>advanced</AdvancedWord>,
          }}
        />
      </h3>
      <div className="mw-100 h-auto w-100 p-2 mb-4 mt-4">
        <AdvancedFilterSystem />
      </div>
      <div className="w-100 text-center">
        <Link href="/resorts" passHref>
          <CButton className="p-2 pe-4 ps-4 text-white" color="secondary" >More filters</CButton>
        </Link>
      </div>
    </div>
  </div>
);

export default HomeAdvancedFilters;
