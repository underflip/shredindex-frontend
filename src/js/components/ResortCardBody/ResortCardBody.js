import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilShareAlt } from '@coreui/icons';
import { CImg } from '@coreui/react';
import { number } from 'prop-types';
import Score from '../Score/Score';
import ResortImageCarousel from '../ResortCardImageCarousel/ResortImageCarousel';
import ResortCardCommentCarousel from '../ResortCardCommentCarousel/ResortCardCommetCarousel';
import ScoreList from '../ScoreList/ScoreList';

const ResortCardBody = (props) => {
  const {
    resort: {
      id,
      location: {
        city,
        country: {
          name: countryName,
        },
        state,
      },
      description,
      ratings,
    },
    collapsed,
  } = props;

  const imgKey = parseInt(id, number);

  return (
    <div>
      <div className="resort-card__content0 w-100 d-inline-flex justify-content-between">
        <div className="resort-card__location-description">
          <div className="resort-header-card__location text-left d-inline-flex">
            <div className="country-flag-wrap mr-2">
              <CImg className="country-flag" src="https://www.countryflags.io/CA/flat/64.png" width="40" height="25" align="center" />
            </div>
            <span>
              {`${city},`}
&nbsp;
            </span>
            {(state && state.name) && (
            <span className="resort-header__state-name">
              {`${state.code},`}
&nbsp;
            </span>
            )}
            <span className="resort-header__country-name">{countryName}</span>
          </div>
          <div className="resort-card__description mb-2 mr-2">
            <span className="font-xs m-0">
              {description}
            </span>
          </div>
        </div>
        <div className="share-wrap mr-2">
          <CIcon content={cilShareAlt} name="cilShare" />
        </div>
      </div>
      <div className="resort-card__content-wrap mb-2">
        <div className="resort-card__content-1 d-flex">
          <div className="resort-card__sub-scores-list w-50 mr-2">
            <ScoreList label="highlights" scores={ratings} ascending />
          </div>
          <ResortImageCarousel id={imgKey} />
        </div>
        <div className="resort-card__content-2 d-flex">
          <div className="resort-card__sub-scores-list w-50 mr-2">
            <ScoreList label="lowlights" scores={ratings} />
          </div>
          <ResortCardCommentCarousel />
        </div>
      </div>
    </div>
  );
};

export default ResortCardBody;
