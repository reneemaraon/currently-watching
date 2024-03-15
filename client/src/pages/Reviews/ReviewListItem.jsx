import stripHtmlTags from '../../utils/stripTags';
import { useNavigate } from 'react-router-dom';
import Icon from '../Common/Icon';
import { HeartIcon, ShareIcon } from '../Common/IconList';
import StarIcon from '../Common/Star';
import renderStars from '../Common/renderStars';

const RatingRow = ({ ratingName, rating }) => {
  const starObject = (
    <div className="w-4 h-4">
      <StarIcon />
    </div>
  );
  return (
    <div className="RatingRow pl-[3px] gap-2 justify-between items-center inline-flex">
      <div className="Acting text-gray-800 text-xs font-medium">
        {ratingName}
      </div>
      <div className="max-[1000px]:hidden Rating justify-center items-center gap-[3px] flex">
        {renderStars(rating, starObject)}
      </div>
      <div className="min-[1001px]:hidden Rating justify-center items-center gap-[3px] max-[600px]:gap-0 flex">
        <div className="Number text-xs font-bold">5</div>
        <div className="w-4 h-4">
          <StarIcon />
        </div>
      </div>
    </div>
  );
};

const ReviewsListItem = ({ noImage, review }) => {
  const navigate = useNavigate();

  const navigateToReview = () => {
    navigate(`/reviews/${review._id}`);
  };

  return (
    <div
      onClick={navigateToReview}
      className={`w-full hover:cursor-pointer hover:bg-opacity-100
            bg-theme-base bg-opacity-70 rounded-[20px] border h-[200px] border-light-stroke justify-start items-start inline-flex
            max-[600px]:flex-col
            ${noImage ? 'max-[600px]:h-[210px]' : 'max-[600px]:h-[270px]'}
            group
            ease-in`}
    >
      <div
        className={`
                Show relative overflow-hidden 
                rounded-l-[20px] h-full w-full flex-col justify-start items-center inline-flex
                max-[600px]:rounded-t-[20px]
                max-[600px]:rounded-bl-[0px]
                min-[601px]:max-w-[220px]
                max-[600px]:w-full
                max-[600px]:h-[220px]
                ${noImage && 'hidden'}
            `}
      >
        <img
          className="group-hover:scale-[1.01] ease-out group-hover:ease-in duration-200 object-cover align-center w-full h-full"
          src={`https://image.tmdb.org/t/p/w500${review.show.tmdbPoster}`}
        />
        <div className="absolute bottom-0 Title w-full h-[60px] pl-[15px] pr-2.5 pt-2.5 pb-[13px] bg-gradient-to-b from-transparent to-black justify-start items-end gap-2.5 inline-flex">
          <div className="Title grow shrink basis-0 text-white text-xs font-light sm:font-semibold">
            {review.show.title}
          </div>
        </div>
      </div>
      <div className="ReviewDetails w-full h-full py-4 px-3 sm:px-4 flex-col justify-start items-start gap-2 inline-flex grow">
        <div className="Author justify-between items-start inline-flex">
          <div className="Profile justify-start gap-2 sm:gap-3 flex">
            <img
              className="ProfilePhoto w-6 h-6 sm:w-8 sm:h-8 relative rounded-full"
              src={review.user.profilePhotoUrl}
            />
            <div className="inline-flex flex-col gap-0">
              <div className="AccDetails max-[600px]:items-center max-[600px]:flex-row gap-1.5 h-5 items-center inline-flex">
                <div className="leading-3 text-sm sm:text-base font-medium font-['Inter']">
                  {review.user.name}
                </div>
                <div className="Username leading-3 font-light text-light-text text-xs sm:text-sm">
                  @{review.user.screenName}
                </div>
              </div>
              <div className="date"></div>
            </div>
          </div>
        </div>
        <div className="max-[400px]:text-sm text-base sm:text-l font-medium">
          {review.title}
        </div>
        <div className="Preview grow text-light-text max-h-[84px] max-[380px]:text-xs text-sm font-normal overflow-hidden">
          {stripHtmlTags(review.body)}
        </div>
        <div className="Footer w-full pt-1 justify-between items-end gap-4 inline-flex">
          <div className="RatingsCont w-full items-start inline-flex">
            <div className="Ratings w-full pt-1 justify-start items-end gap-5 max-[900px]:gap-2 flex">
              <RatingRow rating={review.actingRating} ratingName="Acting" />
              <RatingRow rating={review.plotRating} ratingName="Plot" />
              <RatingRow rating={review.visualsRating} ratingName="Visuals" />
            </div>
          </div>
          <div className="justify-end items-start gap-3 flex">
            <div className="max-[380px]:hidden Like sm:flex-col justify-start items-center gap-0.5 inline-flex">
              <Icon
                sizeRules="sm:w-5 sm:h-5 h-4 w-4"
                fill="fill-none stroke-0.5 stroke-text-dark"
              >
                <HeartIcon />
              </Icon>
              <div className="hidden sm:block info-text font-medium">1234</div>
            </div>
            <div className="max-[380px]:hidden Share sm:flex-col justify-start items-center gap-0.5 inline-flex">
              <Icon
                sizeRules="sm:w-5 sm:h-5 h-4 w-4"
                fill="fill-none stroke-1 stroke-text-dark"
              >
                <ShareIcon />
              </Icon>
              <div className="hidden sm:block info-text font-medium">1234</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsListItem;
