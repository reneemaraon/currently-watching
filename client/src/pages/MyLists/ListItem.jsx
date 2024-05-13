import Icon from '../Common/Icon';
import { DeleteIcon, DragIcon } from '../Common/IconList';
import ImageWithOpacityTransition from '../Common/ImageTransition';
import StarIcon from '../Common/Star';
import { getYear } from '../../utils/formatDate';
import Insert from './Insert';
import SearchInItem from './SearchShow';

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
  searchRef,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`w-full ${
        !dragging && 'transition-transform ease-in-out duration-500'
      } flex-col inline-flex gap-1 sm:gap-1.5 justify-end ${
        selected && 'z-[10]'
      }`}
    >
      {insertVisible && !fromTop && <Insert />}
      <div className="bg-theme-base relative transition w-full max-[400px]:h-14 h-16 sm:h-[70px] md:h-20 rounded-2xl border justify-start items-center inline-flex">
        <div className="cursor-pointer group RankNumContainer px-6 sm:px-8 md:px-10 justify-center items-center gap-2.5 flex">
          <div className="RankNumber text-base sm:text-lg md:text-2xl font-base md:font-medium leading-none">
            {order}
          </div>
        </div>
        {show && (
          <div className="hidden min-[400px]:block ShowImage md:w-20 h-full px-1 py-1 sm:py-1.5 md:py-2">
            <div className="w-full h-full overflow-hidden rounded-lg sm:rounded-xl">
              <ImageWithOpacityTransition
                styleAttach="h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${show.tmdbPoster}`}
              />
            </div>
          </div>
        )}

        <div className="ShowDetails pl-2 sm:pl-5 md:pl-7 grow shrink basis-0 self-stretch py-[11px] justify-between items-center flex">
          {show ? (
            <div className="ShowDetailsText flex-col justify-start items-start gap-0.5 sm:gap-1 md:gap-2 inline-flex">
              <div className="Title">
                <span className="gap-1 text-sm sm:text-base md:text-lg">
                  <span className="font-normal sm:font-medium md:font-semibold">
                    {show.title}
                    <span className="font-extralight sm:font-light md:font-normal">
                      {` (${getYear(show.firstAirDate)})`}
                    </span>
                  </span>
                </span>
              </div>
              <div className="sm:inline-flex hidden justify-start items-center gap-1.5">
                <div className="Score info-text font-medium">Score</div>
                <div className="Rating self-stretch info-text font-bold justify-start items-center gap-0.5 flex">
                  {show.totalAverage}
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
          <div className="Right relative px-2 sm:px-5 md:px-7 inline-flex justify-end items-center gap-2 min-[400px]:gap-4 sm:gap-6 md:gap-8">
            {show && (
              <div className="PersonalRating sm:px-0.5 md:px-1.5 justify-end items-center flex">
                <div className="RatingsContainer justify-between items-start flex">
                  {show.myReview && show.myReview.length > 0 && (
                    <div className="StarRating h-full rounded-[30px] justify-center items-center gap-1 flex">
                      <div className="8 text-sm sm:text-base font-normal sm:font-medium leading-[10.50px]">
                        {show.myReview[0].overallRating}
                      </div>
                      <StarIcon sizeRules="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="inline-flex px-1">
              <button
                onClick={() => onDelete(order)}
                className="group cursor-pointer hover:bg-opacity-80 p-1.5 hover:bg-red-500 hover:rounded-xl transition-all ease-out duration-150 rounded-2xl"
              >
                <Icon
                  sizeRules="w-3 h-3 sm:w-4 sm:h-4"
                  fill="opacity-40 group-hover:opacity-100 group-hover:fill-theme-base fill-lighter-text"
                >
                  <DeleteIcon />
                </Icon>
              </button>
            </div>
            <Icon
              fill="cursor-pointer absolute right-1 hover:opacity-70 opacity-20 fill-brand-dark-purple"
              sizeRules="w-3 h-3 sm:w-5 sm:h-5"
            >
              <DragIcon />
            </Icon>
          </div>
        </div>
      </div>
      {insertVisible && fromTop && <Insert />}
    </div>
  );
};

export default ListItem;
