import React from 'react';
import { CLink } from '@coreui/react';
import { Resort, Score } from '../../../types/resortTypes';
import RatingList from '../../RatingList/RatingList';
import ResortCardCommentCarousel from '../ResortCardCommentCarousel/ResortCardCommentCarousel';
import ResortCardImageCarousel from '../ResortCardImageCarousel/ResortCardImageCarousel';
import ResortCardLocation from '../ResortCardLocation/ResortCardLocation';
import NumericList from '../../NumericList/NumericList';
import ShareButton from '../../ShareButton/ShareButton';

const isDifferentRatings = (a: Score[], b: Score[]): boolean =>
  a.every(({ id }) => b.find((i) => i.id === id));

interface ResortCardBodyProps {
  resort: Resort;
}

const ResortCardBody: React.FC<ResortCardBodyProps> = ({
  resort: {
    url,
    title,
    affiliate_url,
    location,
    description,
    numerics,
    highlights,
    lowlights,
    resort_images,
    comments,
  },
}) => (
  <div className="resort-card__body">
    <div className="resort-card__content-0 w-100 d-inline-flex justify-content-between">
      <div className="resort-card__location-wrap">
        <div className="resort-card__location text-left d-inline-flex user-select-none">
          <CLink className="resort-card__affiliate-link link-unstyled" rel="noreferrer noopener" target="_blank" href={affiliate_url}>
            <ResortCardLocation location={location} />
          </CLink>
        </div>
        {description && (
          <div className="resort-card__description mb-3 me-2 user-select-none">
            <CLink className="resort-card__affiliate-link link-unstyled" rel="noreferrer noopener" target="_blank" href={affiliate_url}>
              <span className="m-0">
                {description}
              </span>
            </CLink>
          </div>
        )}
      </div>
      <ShareButton title={title} resortUrl={url} />
    </div>
    <div className="resort-card__content-wrap">
      {numerics?.length > 1 && (
        <div className="resort-card__content-1 mb-2 d-flex">
          <div className="w-100">
            <NumericList
              labelMessageId="shredindex.statistics.KEYINSIGHTS"
              label="Key insights"
              numerics={numerics}
            />
          </div>
        </div>
      )}
      <div className="resort-card__content-1 mb-2 d-flex">
        <div className="resort-card__sub-ratings-list me-2">
          {!isDifferentRatings(highlights, lowlights)
            ? (
              <RatingList
                labelMessageId="shredindex.ratinglist.HIGHLIGHTS"
                label="Highlights"
                ratings={highlights.slice(0, 3)}
                affiliateUrl={affiliate_url}
              />
            ) : (
              <RatingList
                labelMessageId="shredindex.ratinglist.RATINGS"
                label="Ratings"
                ratings={highlights}
                affiliateUrl={affiliate_url}
              />
            )}
        </div>
        <ResortCardImageCarousel images={resort_images} />
      </div>
      <div className="resort-card__content-2 mb-2 d-flex">
        <div className="resort-card__sub-ratings-list me-2">
          {!isDifferentRatings(highlights, lowlights) && (
            <RatingList
              labelMessageId="shredindex.ratinglist.LOWLIGHTS"
              label="Lowlights"
              ratings={lowlights.slice()
                .sort((a, b) => (a.value > b.value ? -1 : 1))}
              affiliateUrl={affiliate_url}
            />
          )}
        </div>
        <ResortCardCommentCarousel comments={comments} />
      </div>
    </div>
  </div>
);

export default ResortCardBody;
