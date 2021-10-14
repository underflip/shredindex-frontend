import React from 'react';

const ResortCardCommentCarousel = (props) => {
  const comment = 'Kia ora.. Spit the dummy, this crook cuzzie is as pearler as a heaps good housie.';

  return (
    <>
      <div className="resort-card__comment-wrap w-50 ml-2 mt-2">
        <p className="w-100 font-xs mb-0">
          {comment}
        </p>
      </div>
    </>
  );
};

export default ResortCardCommentCarousel;
