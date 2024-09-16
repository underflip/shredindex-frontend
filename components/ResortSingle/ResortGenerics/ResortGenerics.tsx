import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CIcon from '@coreui/icons-react';
import { cilCheck, cilX } from '@coreui/icons';
import Flickity from 'react-flickity-component';
import flickityOptions from "../../../src/js/components/config/flickity-options";

const options = {
  ...flickityOptions,
  prevNextButtons: false,
  contain: true,
  cellAlign: 'left',
  pageDots: false,
};

const ResortGenerics = ({ generics }) => (
  <div className="generics numeric-list mb-4">
    <h3 className="resort-single-card-heading user-select-none mb-2">
      <FormattedMessage
        id="shredindex.generics.FEATURES"
        defaultMessage="Features"
      />
    </h3>
    <div className="numeric-list__list">
      <Flickity
        className="carousel w-100 h-100"
        elementType="div"
        options={options}
        disableImagesLoaded
        reloadOnUpdate
      >
        {generics?.map(({
                          id,
                          title,
                          value,
                        }) => (
          <div key={id} className="numeric-list__numeric generics-item me-2">
            {value === 'yes'
              ? <CIcon icon={cilCheck} size="md" />
              : <CIcon icon={cilX} size="md" />}
            <span>
              {` ${title}`}
            </span>
          </div>
        ))}
      </Flickity>
    </div>
  </div>
);

const StatisticGenericType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
});

ResortGenerics.propTypes = {
  generics: PropTypes.arrayOf(StatisticGenericType).isRequired,
};

export default ResortGenerics;
