import Icon from "../Common/Icon";
import { BarsIcon } from "../Common/IconList";
import ImageWithOpacityTransition from "../Common/ImageTransition";
import StarIcon from "../Common/Star";
import { getYear } from "../../utils/formatDate";
import { useEffect } from "react";
import { isMarkActive } from "@tiptap/react";
import Insert from "./Insert";

const ListItem = ({
  dragging,
  insertVisible,
  selected,
  show,
  order,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`w-full ${
        !dragging && "transition-transform ease-in-out duration-500"
      } flex-col inline-flex gap-1 sm:gap-1.5 justify-end ${
        selected && "z-[10]"
      }`}
    >
      {insertVisible && <Insert />}
      <div className="bg-theme-base transition w-full max-[400px]:h-14 h-16 sm:h-[70px] md:h-20 rounded-2xl border justify-start items-center inline-flex">
        <div className="RankNumContainer px-5 sm:px-8 md:px-10 justify-center items-center gap-2.5 flex">
          <div className="RankNumber text-base sm:text-lg md:text-2xl font-base md:font-medium leading-none">
            {order}
          </div>
        </div>
        <div className="hidden min-[400px]:block ShowImage md:w-20 h-full px-1 py-1 sm:py-1.5 md:py-2">
          <div className="w-full h-full overflow-hidden rounded-lg sm:rounded-xl">
            <ImageWithOpacityTransition
              styleAttach="h-full w-full object-cover"
              src={`https://image.tmdb.org/t/p/w500/${show.tmdbPoster}`}
            />
          </div>
        </div>
        <div className="ShowDetails grow shrink basis-0 self-stretch px-2 sm:px-5 md:px-7 py-[11px] justify-between items-center flex">
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
              <div className="Rating self-stretch justify-start items-center gap-0.5 flex">
                <div className="info-text font-bold">{show.totalAverage}</div>
                <StarIcon sizeRules="h-3 w-3" />
              </div>
              <div className="NoOfReviews text-slate-500 text-[11px] font-normal">
                ({show.reviewCount})
              </div>
            </div>
          </div>
          <div className="Right inline-flex justify-end items-center gap-2 min-[400px]:gap-4 sm:gap-6 md:gap-8">
            <div className="PersonalRating self-stretch sm:px-1.5 md:px-2.5 justify-end items-center flex">
              <div className="RatingsContainer justify-between items-start flex">
                {show.myReview.length > 0 && (
                  <div className="StarRating h-full rounded-[30px] justify-center items-center gap-1 flex">
                    <div className="8 text-sm sm:text-base font-normal sm:font-medium leading-[10.50px]">
                      {show.myReview[0].overallRating}
                    </div>
                    <StarIcon sizeRules="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
            <div className="MoveIcon w-7 h-7 sm:w-9 sm:h-9 justify-center items-center flex">
              <Icon
                sizeRules="h-5 w-5 sm:w-7 sm:h-7"
                fill="stroke-1 stroke-light-text"
              >
                <BarsIcon />
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
