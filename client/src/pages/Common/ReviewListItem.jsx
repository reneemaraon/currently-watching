import stripHtmlTags from '../../utils/stripTags';
import ImageWithOpacityTransition from './ImageTransition';
import StarIcon from './Star';
import { useNavigate } from 'react-router-dom';
import renderStars from './renderStars';
import Icon from './Icon';
import { CommentIcon, HeartIcon } from './IconList';

const RatingRow = ({ ratingName, rating }) => {
  const starObject = (
    <div className="w-4 h-4">
      <StarIcon />
    </div>
  );
  return (
    <div className="RatingRow pl-[3px] gap-6 justify-between items-center inline-flex">
      <div className="Acting text-text-dark text-xs font-medium">
        {ratingName}
      </div>
      <div className="Rating w-[85.09px] justify-start items-center gap-[3px] flex">
        {renderStars(rating, starObject)}
      </div>
    </div>
  );
};

const ReviewsListItem = ({ review }) => {
  const navigate = useNavigate();

  const {
    _id: id,
    title,
    body,
    actingRating,
    plotRating,
    visualsRating,
    likeCount,
    commentCount,
    user: { _id: userId, profilePhotoUrl, screenName, name },
    show: { _id: showId, title: showTitle, tmdbPoster },
  } = review;

  const onClickNavigate = () => {
    navigate(`/reviews/${id}`);
  };

  const onClickUser = (event) => {
    event.stopPropagation();
    navigate(`/users/${userId}`);
  };

  const onClickShow = (event) => {
    event.stopPropagation();
    navigate(`/shows/${showId}`);
  };

  return (
    <div
      onClick={onClickNavigate}
      className="
            white-bg-hover group cursor-pointer overflow-hidden max-[600px]:flex-col max-[600px]:h-[400px] max-[600px]:w-[320px] w-[450px] h-[260px] rounded-[20px] border justify-start items-start inline-flex
            max-[600px]:min-h-[450px] 
        "
    >
      <div
        className="
                min-w-[180px] max-[600px]:w-full max-[600px]:h-48 h-full relative overflow-hidden self-stretch flex-col justify-start items-center inline-flex
                max-[600px]:min-h-[190px]    
            "
      >
        <ImageWithOpacityTransition
          styleAttach="object-cover align-center w-full h-full group-hover:scale-[1.01]"
          src={`https://image.tmdb.org/t/p/w500${tmdbPoster}`}
        />
        <div className="absolute bottom-0 Title w-full h-[60px] pl-[15px] pr-2.5 pt-2.5 pb-[13px] bg-gradient-to-b from-transparent to-black justify-start items-end gap-2.5 inline-flex">
          <div
            onClick={onClickShow}
            className="Title hover:underline grow shrink overflow-truncate basis-0 text-white text-xs font-semibold"
          >
            {showTitle}
          </div>
        </div>
      </div>
      <div className="ReviewDetails w-full h-full self-stretch p-4 flex-col justify-start items-start gap-2 inline-flex">
        <div
          onClick={onClickUser}
          className="rounded-lg hover:cursor-pointer Author self-stretch pl-[5px] py-px justify-between items-start inline-flex"
        >
          <div className="Profile h-[31px]  justify-start items-center gap-[11px] flex">
            <ImageWithOpacityTransition
              styleAttach="ProfilePhoto w-9 h-9 relative hover:opacity-70 rounded-full"
              src={profilePhotoUrl}
            />
            <div className="AccDetails transition-colors duration-500 group flex-col justify-center items-start inline-flex">
              <div className="TwtDisplayName line-clamp-1 text-text-dark hover:text-brand-dark-purple text-[13px] font-medium">
                {name}
              </div>
              <div className="Username hover:text-brand-dark-purple text-light-text text-[11px] font-normal">
                @{screenName}
              </div>
            </div>
          </div>
          <div className="Frame w-[15px] h-[15px] relative" />
        </div>
        <div className="ReviewSnippets w-full grow shrink basis-0 pl-[5px] pt-[5px] flex-col justify-start items-start gap-2 flex">
          <div className="Title overflow-truncate line-clamp-1 w-full text-base font-medium">
            {title}
          </div>
          <div className="Preview overflow-hidden text-ellipsis h-[65px] w-full text-zinc-500 text-sm font-normal">
            {stripHtmlTags(body)}
          </div>
        </div>
        <div className="Footer self-stretch justify-center items-end gap-2.5 inline-flex">
          <div className="RatingsCont grow shrink basis-0 h-[71px] flex-col justify-between items-start inline-flex">
            <div className="Ratings max-w-28 h-[71px] pl-1 pr-2.5 py-[5px] flex-col justify-start gap-2 flex">
              <RatingRow rating={actingRating} ratingName="Acting" />
              <RatingRow rating={plotRating} ratingName="Plot" />
              <RatingRow rating={visualsRating} ratingName="Visuals" />
            </div>
          </div>
          <div className="Options justify-end items-start gap-3 flex">
            <div className="Share flex-col justify-start items-center gap-0.5 inline-flex">
              <Icon
                sizeRules="sm:w-5 sm:h-5 h-4 w-4"
                fill="fill-none stroke-0.5 stroke-text-dark"
              >
                <CommentIcon />
              </Icon>
              <div className=" info-text font-medium">{commentCount}</div>
            </div>
            <div className="Like flex-col justify-start items-center gap-0.5 inline-flex">
              <Icon
                sizeRules="sm:w-5 sm:h-5 h-4 w-4"
                fill="fill-none stroke-0.5 stroke-text-dark"
              >
                <HeartIcon />
              </Icon>
              <div className=" info-text font-medium">{likeCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsListItem;
