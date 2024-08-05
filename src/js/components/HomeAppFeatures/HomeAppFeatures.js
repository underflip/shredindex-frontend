import React from 'react';
import {
  CButton, CCol, CContainer, CImage, CRow,
} from '@coreui/react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ExpandShot from '../../../images/homepage/expand-shot.svg';
import HighlightsShot from '../../../images/homepage/ratings-shot.svg';
import CommentsShot from '../../../images/homepage/comments-shot.svg';
import breakpoints from '../config/breakpoints';

const FeatureRow = ({
  title, description, image, isReversed,
}) => (
  <div className="mb-5">
    <CRow className="pb-5 flex-column flex-md-row align-items-center gx-4">
      <CCol
        xs={12}
        md={6}
        className={`text-center text-md-${isReversed ? 'end' : 'start'} order-md-${isReversed ? '1' : '2'}`}
      >
        <div className="w-100">
          <h4 className="fw-bold mb-4 order-1 order-md-1">
            <FormattedMessage id={title.id} defaultMessage={title.defaultMessage} />
          </h4>
          <div className="order-3 order-md-2 d-md-block d-none">
            <p>
              <FormattedMessage
                id={description.id}
                defaultMessage={description.defaultMessage}
                values={{ lineBreak: <br /> }}
              />
            </p>
          </div>
        </div>
      </CCol>
      <CCol xs={12} md={6} className={`order-2 order-md-${isReversed ? '2' : '1'} mb-3 mb-md-0 text-center`}>
        <CImage fluid className="w-100 app-features-image" src={image} />
      </CCol>
      <div className="order-3 order-md-2 d-md-none d-sm-block text-center">
        <p>
          <FormattedMessage
            id={description.id}
            defaultMessage={description.defaultMessage}
            values={{ lineBreak: <br /> }}
          />
        </p>
      </div>
    </CRow>
  </div>
);

const features = [
  {
    title: {
      id: 'shredindex.homeFeatures.QUICKVIEW',
      defaultMessage: 'Save time with quick view',
    },
    description: {
      id: 'shredindex.homeFeatures.QUICKVIEWDESCRIPTION',
      defaultMessage: 'Get the vibe of a resort in a flash with the click of a button.{lineBreak}{lineBreak}We\'ve got the top details right where you want them.',
    },
    image: ExpandShot,
    isReversed: true,
  },
  {
    title: {
      id: 'shredindex.homeFeatures.HIGHLIGHTSLOWLIGHTS',
      defaultMessage: 'Highlight & Lowlights',
    },
    description: {
      id: 'shredindex.homeFeatures.HIGHLIGHTSLOWLIGHTSDESCRIPTION',
      defaultMessage: 'Get a sense of the place by the things that suit your lifestyle without having to have a try on the hunch a resort might be your paradise.',
    },
    image: HighlightsShot,
    isReversed: false,
  },
  {
    title: {
      id: 'shredindex.homeFeatures.COMMENTSANDTIPS',
      defaultMessage: 'Comments and tips',
    },
    description: {
      id: 'shredindex.homeFeatures.COMMENTSANDTIPSDESCRIPTION',
      defaultMessage: 'Get the top comments and tips.{lineBreak}{lineBreak}We gather insights from professional athletes, seasons travellers and experienced residents.',
    },
    image: CommentsShot,
    isReversed: true,
  },
];

const Vibe = () => (
  <span className="text-warning">
    ‘
    <FormattedMessage
      id="shredindex.homeFeatures.VIBE"
      defaultMessage="vibe"
    />
    ’
  </span>
);

const HomeAppFeatures = () => (
  <div className="home-app-features mt-5">
    <h3 className="fw-bold text-center mb-5">
      <FormattedMessage
        id="shredindex.homeFeatures.GETTHEVIBE"
        defaultMessage="Get the {vibe} as you scroll..."
        values={{ vibe: <Vibe /> }}
      />
    </h3>
    <CContainer className="px-3 px-sm-4 mw" style={{ maxWidth: `${breakpoints.md}px` }}>
      {features.map((feature) => (
        <FeatureRow key={feature.title.id} {...feature} />
      ))}
    </CContainer>
    <div className="button-group align-items-center text-center mb-5">
      <Link
        to="resorts"
      >
        <CButton className="p-2 pe-4 ps-4" color="warning" variant="">
          <FormattedMessage
            id="shredindex.homeFeatures.STARTSCROLLING"
            defaultMessage="Start scrolling"
          />
        </CButton>
      </Link>
    </div>
  </div>
);

FeatureRow.propTypes = {
  title: PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  isReversed: PropTypes.bool.isRequired,
};

export default HomeAppFeatures;
