import stripHtmlTags from "../../utils/stripTags";
import { useNavigate } from "react-router-dom";
import Icon from "../Common/Icon";
import { CommentIcon, HeartIcon, OptionsIcon } from "../Common/IconList";
import StarIcon from "../Common/Star";
import renderStars from "../Common/renderStars";
import formatDateTime from "../../utils/formatDate";
import { useAuthContext } from "../../context/AuthContext";
import Dropdown, { Option } from "../Common/Dropdown";
import { useEffect, useRef, useState } from "react";
import { useToast } from "../../context/ToastContext";

const RatingRow = ({ ratingName, rating }) => {
  const starObject = (
    <StarIcon sizeRules="max-[400px]:w-1.5 max-[400px]:h-1.5 w-2 h-2 sm:w-4 sm:h-4" />
  );
  return (
    <div className="RatingRow pl-[3px] max-[400px]:gap-1.5 gap-2 justify-between items-center inline-flex">
      <div className="max-[400px]:text-[10px] text-xs font-medium">
        {ratingName}
      </div>
      <div className="max-[1000px]:hidden Rating justify-center items-center gap-[3px] flex">
        {renderStars(rating, starObject)}
      </div>
      <div className="min-[1001px]:hidden max-[400px]:gap-[1px] Rating justify-center items-center gap-[3px] max-[600px]:gap-0 flex">
        <div className="max-[400px]:text-[10px] text-xs font-bold">
          {rating}
        </div>
        <div className="w-3 h-3 sm:w-4 sm:h-4">
          <StarIcon />
        </div>
      </div>
    </div>
  );
};

const ReviewsListItem = ({ noImage, review, onDelete }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useAuthContext();
  const { showToast } = useToast();

  const navigate = useNavigate();

  const navigateToReview = () => {
    navigate(`/reviews/${review._id}`);
  };

  const navigateToShow = (event) => {
    event.stopPropagation();
    navigate(`/shows/${review.show._id}`);
  };

  const onClickUser = (event) => {
    event.stopPropagation();
    navigate(`/users/${review.user._id}`);
  };

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const copyPathToClipboard = () => {
    const baseUrl = window.location.origin;
    navigator.clipboard
      .writeText(baseUrl + `/reviews/${review._id}`)
      .then(() => {
        showToast("Path to review is copied to clipboard", "success");
      })
      .catch((error) => {
        console.error("Failed to copy path to clipboard", error);
      });
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      onClick={navigateToReview}
      className={`w-full hover:cursor-pointer 
            white-bg-hover rounded-[10px] sm:rounded-[20px] border border-light-stroke justify-start items-start inline-flex
            max-[600px]:flex-col min-[601px]:h-[190px] max-w-[900px]
            group
            ease-in`}
    >
      <div
        className={`
                Show relative overflow-hidden 
                rounded-l-[20px] h-full w-full flex-col justify-start items-start inline-flex
                max-[600px]:rounded-t-[10px]
                max-[600px]:rounded-bl-[0px]
                min-[601px]:max-w-[180px]
                
                max-[600px]:w-full
                max-[600px]:h-[150px]
                ${noImage && "hidden"}
            `}
      >
        <img
          className="min-[601px]:hidden group-hover:scale-[1.01] ease-out group-hover:ease-in duration-200 object-cover align-center w-full h-full"
          src={`https://image.tmdb.org/t/p/original${review.show.tmdbBackdrop}`}
        />
        <img
          className="max-[600px]:hidden group-hover:scale-[1.01] ease-out group-hover:ease-in duration-200 object-cover align-center w-full h-full"
          src={`https://image.tmdb.org/t/p/w500${review.show.tmdbPoster}`}
        />
        <div className="absolute bottom-0 Title w-full h-[60px] pl-[15px] pr-2.5 pt-2.5 pb-[13px] bg-gradient-to-b from-transparent to-black justify-start items-end gap-2.5 inline-flex">
          <div
            onClick={navigateToShow}
            className="Title hover:underline grow shrink basis-0 text-white text-xs font-light sm:font-light truncate"
          >
            {review.show.title}
          </div>
        </div>
      </div>
      <div className="relative min-[601px]:h-full w-full max-[600px]:max-h-48 max-[600px]:py-3 py-4 px-3 sm:px-4 flex-col justify-start items-start gap-1 inline-flex grow">
        <div className="text-nowrap w-full justify-between items-start inline-flex overflow-hidden max-[600px]:min-h-9 min-h-6">
          <div className="hover:cursor-pointer justify-start grow max-[600px]:items-center items-start gap-2.5 flex">
            <img
              className="ProfilePhoto w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 relative rounded-full"
              onClick={onClickUser}
              src={review.user.profilePhotoUrl}
            />
            <span className="max-[600px]:gap-1.5 max-[600px]:flex-col flex text-sm sm:text-base py-1 sm:leading-3 leading-[10px] font-medium">
              <span
                onClick={onClickUser}
                className="hover:text-brand-dark-purple mr-1 sm:mr-2"
              >
                {review.user.name}
              </span>
              <span className="font-light max-[600px]:gap-1 leading-[10px] sm:leading-3 text-light-text text-[10px] sm:text-xs">
                <span
                  className="hover:text-brand-dark-purple"
                  onClick={onClickUser}
                >
                  @{review.user.screenName}
                </span>
                <span className="mx-0.5 min-[600px]:mx-1">&#183;</span>
                {formatDateTime(review.createdAt)}
              </span>
            </span>
          </div>
          <div className="absolute sm:right-2 top-1.5 right-1.5">
            <div
              onClick={toggleDropdown}
              ref={dropdownRef}
              className="rounded-full ease-in duration-200 transition-colors hover:bg-main-bg relative p-2 justify-center items-center cursor-pointer flex"
            >
              <Icon size="h-1 w-1 sm:h-2 sm:w-2">
                <OptionsIcon />
              </Icon>
              {isDropdownVisible && (
                <div className="absolute w-40 top-full right-0 mt-1 z-40">
                  <Dropdown>
                    {user && user._id == review.user._id && (
                      <Option
                        key="Delete"
                        text="Delete"
                        onSelect={() => onDelete(review._id)}
                      />
                    )}
                    <Option
                      key="copy"
                      text="Copy Link"
                      onSelect={copyPathToClipboard}
                    />
                  </Dropdown>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="max-[500px]:text-sm max-[500px]:min-h-5 mt-1 text-base min-h-6 line-clamp-1 font-medium">
          {review.title}
        </div>
        <div className="Preview grow text-light-text my-1 max-h-[84px] max-[380px]:text-xs text-sm font-normal overflow-hidden">
          {stripHtmlTags(review.body)}
        </div>
        <div className="Footer w-full pt-1 justify-between items-end gap-4 inline-flex">
          <div className="RatingsCont w-full items-start inline-flex">
            <div className="Ratings w-full pt-1 justify-start items-end gap-6 max-[900px]:gap-4 flex">
              <RatingRow rating={review.actingRating} ratingName="Acting" />
              <RatingRow rating={review.plotRating} ratingName="Plot" />
              <RatingRow rating={review.visualsRating} ratingName="Visuals" />
            </div>
          </div>
          <div className="justify-end items-start gap-4 flex">
            <div className="max-[380px]:hidden Like justify-start items-center gap-1 inline-flex">
              <Icon
                sizeRules="sm:w-5 sm:h-5 h-4 w-4"
                fill="fill-none stroke-0.5 stroke-text-dark"
              >
                <HeartIcon />
              </Icon>
              <div className="hidden sm:block info-text font-medium">
                {review.likeCount}
              </div>
            </div>
            <div className="max-[380px]:hidden Share justify-start items-center gap-1 pr-0.5 inline-flex">
              <Icon
                sizeRules="sm:w-5 sm:h-5 h-4 w-4"
                fill="fill-none stroke-0.5 stroke-text-dark"
              >
                <CommentIcon />
              </Icon>
              <div className="hidden sm:block info-text font-medium">
                {review.commentCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsListItem;
