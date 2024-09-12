import Icon from "../Common/Icon";
import { DeleteIcon, DragIcon } from "../Common/IconList";
import ImageWithOpacityTransition from "../Common/ImageTransition";
import StarIcon from "../Common/Star";
import { getYear } from "../../utils/formatDate";
import Insert from "./Insert";
import SearchInItem from "./SearchShow";
import { useNavigate } from "react-router-dom";
import Tooltip from "../Common/Tooltip";
import formatRating from "../../utils/formatRating";

const ListItem = ({
  dragging,
  insertVisible,
  selected,
  show,
  order,
  fromTop,
  setShowToItem,
  onDelete,
  onEdit,
  isOwner,
  searchRef,
  ...rest
}) => {
  const navigate = useNavigate();
  const navigateToShow = () => {
    navigate(`/shows/${show._id}`);
  };

  return (
    <div
      {...rest}
      className={`w-full ${
        !dragging && "transition-transform ease-in-out duration-500"
      } flex-col inline-flex gap-1 sm:gap-1.5 justify-end ${
        selected && show && "z-10"
      }
      ${!show && "z-30"}`}
    >
      {insertVisible && !fromTop && <Insert />}
      <div className="bg-theme-base relative transition w-full max-[400px]:h-14 h-16 sm:h-[70px] md:h-20 rounded-2xl border-light-stroke border justify-start items-center inline-flex">
        <div
          className={`${
            isOwner && "cursor-grab"
          } group RankNumContainer px-5 sm:px-8 md:px-10 justify-center items-center gap-2.5 flex`}
        >
          <div className="RankNumber text-base sm:text-lg md:text-2xl font-base md:font-medium leading-none">
            {order}
          </div>
        </div>
        {show && (
          <div className="hidden min-[400px]:block ShowImage w-12 sm:w-16 md:w-24  h-full px-1 py-1.5 md:py-2">
            <div className="cursor-pointer w-full h-full overflow-hidden rounded sm:rounded-lg">
              <ImageWithOpacityTransition
                onClick={navigateToShow}
                styleAttach="min-[400px]:hidden hover:opacity-90 h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${show.tmdbPoster}`}
              />
              <ImageWithOpacityTransition
                onClick={navigateToShow}
                styleAttach="max-[401px]:hidden hover:opacity-90 h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${show.tmdbBackdrop}`}
              />
            </div>
          </div>
        )}

        <div className="ShowDetails pl-2 sm:pl-5 md:pl-7 grow shrink basis-0 self-stretch py-[11px] justify-between items-center flex">
          {show ? (
            <div
              onClick={navigateToShow}
              className="group cursor-pointer ShowDetailsText flex-col justify-start items-start gap-0.5 sm:gap-1 md:gap-2 inline-flex"
            >
              <div className="Title">
                <span className="gap-1 text-sm sm:text-base md:text-lg">
                  <span className="group-hover:text-brand-dark-purple font-normal sm:font-medium md:font-semibold">
                    {show.title}
                    <span className="font-extralight sm:font-light md:font-normal">
                      {` (${getYear(show.firstAirDate)})`}
                    </span>
                  </span>
                </span>
              </div>
              <div className="sm:inline-flex hidden justify-start items-center gap-1.5">
                <div className="Score info-text font-medium">Score</div>
                <div className="w-full info-text font-bold justify-start items-center gap-0.5 flex">
                  {show.totalAverage.toFixed(1)}
                  <StarIcon sizeRules="h-3 w-3" />
                </div>
                <div className="NoOfReviews text-slate-500 text-[11px] font-normal">
                  ({show.reviewCount})
                </div>
              </div>
            </div>
          ) : (
            <SearchInItem
              searchRef={searchRef}
              order={order}
              setShowToItem={setShowToItem}
            />
          )}
          <div className="Right h-full relative px-2 sm:px-5 md:px-7 inline-flex justify-end items-center gap-1 min-[400px]:gap-2 sm:gap-6 md:gap-8">
            {show && (
              <div className="PersonalRating min-w-16 sm:px-0.5 md:px-1.5 justify-end items-center flex">
                <div className="RatingsContainer justify-between items-start flex">
                  {show.myReview && show.myReview.length > 0 && (
                    <Tooltip text="Author's rating">
                      <div
                        onClick={() =>
                          navigate(`/reviews/${show.myReview[0]._id}`)
                        }
                        className="StarRating cursor-pointer h-full rounded-[30px] justify-center items-center gap-1 flex"
                      >
                        <ImageWithOpacityTransition
                          styleAttach="mx-1 hover:opacity-80 cursor-pointer w-3 h-3 sm:w-5 sm:h-5 relative rounded-full"
                          src={show.myReview[0].user.profilePhotoUrl}
                        />
                        <div className="text-xs sm:text-sm md:text-base font-normal sm:font-medium leading-[10.50px]">
                          {formatRating(show.myReview[0].overallRating)}
                        </div>
                        <StarIcon sizeRules="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </Tooltip>
                  )}
                </div>
              </div>
            )}
            {isOwner && (
              <div className="inline-flex px-1">
                <Tooltip position="top" text="Delete">
                  <button
                    onClick={() => onDelete(order)}
                    className="group cursor-pointer hover:bg-opacity-80 p-1.5 hover:bg-red-500 hover:rounded-xl transition-all ease-out duration-150 rounded-2xl"
                  >
                    <Icon
                      sizeRules="w-3 h-3 sm:w-4 sm:h-4"
                      fill="opacity-40 group-hover:opacity-100 group-hover:fill-white fill-lighter-text"
                    >
                      <DeleteIcon />
                    </Icon>
                  </button>
                </Tooltip>
              </div>
            )}
            {isOwner && (
              <div
                className={`${
                  isOwner && "cursor-grab"
                } absolute right-1 hover:opacity-70 opacity-20 h-full w-6 inline-flex items-center justify-center`}
              >
                <Icon
                  fill="fill-brand-dark-purple"
                  sizeRules="w-3 h-3 sm:w-5 sm:h-5"
                >
                  <DragIcon />
                </Icon>
              </div>
            )}
          </div>
        </div>
      </div>
      {insertVisible && fromTop && <Insert />}
    </div>
  );
};

export default ListItem;
