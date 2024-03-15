import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import LoadingAnimation from '../Common/LoadingAnimation';
import { HeartIcon, ShareIcon } from '../Common/IconList';
import RatingRowStars from './RatingRow';
import ShowCardSmall from '../Common/ShowCard';
import CommentsArea from './CommentsArea';
import CircularButton from '../Common/CircleButton';
import { useReviewDetailContext } from '../../context/ReviewDetailContext';
import HTMLRenderer from './HtmlRenderer';

export default function ReviewDetail() {
  const { id } = useParams();
  const { setReviewId, loading, review } = useReviewDetailContext();

  useEffect(() => {
    if (id) {
      setReviewId(id);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="w-full inline-flex h-[400px] justify-center items-center">
        <div className="w-48">
          <LoadingAnimation />
        </div>
      </div>
    );
  }
  if (review) {
    return (
      <div className="relative inline-flex flex-col items-center w-full ">
        <img
          className="object-cover w-full h-auto md:h-[500px] absolute z-0 top-0"
          src={`https://image.tmdb.org/t/p/original${review.show.tmdbBackdrop}`}
        />

        <div className="container-center-card pt-20 sm:pt-36">
          {/* Main contentt */}
          <div className="z-10 Main large-white-card p-4 sm:p-6">
            <div className="w-full pb-4 flex-col justify-start items-start gap-3 flex">
              <div className="w-full pb-2">
                <div className="ReviewActions float-right justify-start items-start gap-2 sm:gap-2.5 flex">
                  <CircularButton>
                    <HeartIcon />
                  </CircularButton>
                  <CircularButton>
                    <ShareIcon />
                  </CircularButton>
                </div>
                <p className="title-text text-wrap">{review.title}</p>
              </div>
              <div className="Profile justify-start items-start gap-3 inline-flex">
                <img
                  className="ProfilePhoto w-8 h-8 relative rounded-full"
                  src={review.user.profilePhotoUrl}
                />
                <div className="Text flex-col justify-start items-start gap-1 inline-flex">
                  <div className="NameUsername justify-center items-center gap-2 inline-flex">
                    <div className="author-name">{review.user.screenName}</div>
                    <div className="info-text">@{review.user.name}</div>
                  </div>
                  <div className="AccDetails justify-start items-center gap-1.5 inline-flex">
                    <div className="info-text">Dec 23, 2023</div>
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
              <div className="Item w-full flex-col justify-center items-start gap-4 flex">
                <div className="Header py-2 flex-col justify-start items-start w-full flex">
                  <div className="text-sm font-medium">
                    Interested? Check out the drama.
                  </div>
                </div>
                <ShowCardSmall show={review.show} />
              </div>
              <CommentsArea />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
