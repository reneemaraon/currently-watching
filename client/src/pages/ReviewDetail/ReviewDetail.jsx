import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FullPageLoading from '../Common/FullPageLoading';
import RatingRowStars from './RatingRow';
import ShowCardSmall from '../Common/ShowCard';
import CommentsArea from './CommentsArea';
import { useReviewDetailContext } from '../../context/ReviewDetailContext';
import HTMLRenderer from './HtmlRenderer';
import formatDateTime from '../../utils/formatDate';
import ImageWithOpacityTransition from '../Common/ImageTransition';
import ReviewActions from './ReviewActions';
import { useDeleteReviewContext } from '../../context/DeleteReviewContext';

export default function ReviewDetail() {
  const { id } = useParams();
  const { setReview, setReviewId, loading, review } = useReviewDetailContext();
  const { deleteLoading } = useDeleteReviewContext();

  useEffect(() => {
    if (id) {
      if (review && id != review._id) {
        setReview(null);
      }
      setReviewId(id);
    }
  }, [id]);

  if (loading) {
    return <FullPageLoading />;
  }

  return (
    <div className="w-full">
      {review && (
        <div
          className={`${
            review && !deleteLoading ? 'opacity-100' : 'opacity-0'
          } ${
            deleteLoading && 'opacity-50'
          } ease-in transition-opacity duration-500 relative inline-flex bg-fixed flex-col items-center w-full pb-40 overflow-hidden`}
        >
          <ImageWithOpacityTransition
            styleAttach="object-cover absolute h-96 w-full top-0"
            src={`https://image.tmdb.org/t/p/original${review.show.tmdbBackdrop}`}
          />
          <div className="container-center-card pt-32 sm:pt-40">
            {/* Main contentt */}
            <div className="z-10 Main large-white-card p-4 sm:p-6">
              <div className="w-full pb-4 flex-col justify-start items-start gap-3 flex">
                <div className="w-full pb-2">
                  <ReviewActions />
                  <p className="title-text text-wrap">{review.title}</p>
                </div>
                <div className="Profile justify-start items-start gap-3 inline-flex">
                  <ImageWithOpacityTransition
                    styleAttach="ProfilePhoto w-8 h-8 relative rounded-full"
                    src={review.user.profilePhotoUrl}
                  />
                  <div className="Text flex-col justify-start items-start gap-1 inline-flex">
                    <div className="NameUsername justify-center items-center gap-2 inline-flex">
                      <div className="author-name">{review.user.name}</div>
                      <div className="info-text">@{review.user.screenName}</div>
                    </div>
                    <div className="AccDetails justify-start items-center gap-1.5 inline-flex">
                      <div className="info-text">
                        {formatDateTime(review.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2 text-sm font-medium">
                This user rated{' '}
                <span className=" text-brand-tq">{review.show.title}</span>:
              </div>
              <div className="Right w-full flex-wrap justify-start items-start gap-3 py-2 inline-flex">
                <RatingRowStars rating={review.actingRating} name="Acting" />
                <RatingRowStars rating={review.plotRating} name="Plot" />
                <RatingRowStars rating={review.visualsRating} name="Visuals" />
              </div>
              <div className="NarrativeContent w-full  py-5 flex-col justify-center items-start gap-5 flex">
                <HTMLRenderer htmlString={review.body} />
              </div>
              <div className="Footer w-full pt-12 pb-7 rounded-lg flex-col justify-center items-start gap-[50px] flex">
                <CommentsArea />
                <div className="Item w-full flex-col justify-center items-start gap-4 flex">
                  <div className="Header py-2 flex-col justify-start items-start w-full flex">
                    <div className="text-sm font-medium">
                      Interested? Check out the drama.
                    </div>
                  </div>
                  <ShowCardSmall show={review.show} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
