import Icon from "../Common/Icon";
import { BarsIcon } from "../Common/IconList";
import StarIcon from "../Common/Star";

const ListItem = () => {
  return (
    <div className="ShowDetailCard w-full h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
      <div className="RankNumContainer px-5 sm:px-8 md:px-10 justify-center items-center gap-2.5 flex">
        <div className="RankNumber text-lg sm:text-xl md:text-2xl font-medium leading-none">
          4
        </div>
      </div>
      <img
        className="hidden sm:block ShowImage w-20 h-[60px] rounded-[10px]"
        src="https://via.placeholder.com/80x60"
      />
      <div className="ShowDetails grow shrink basis-0 self-stretch px-2 sm:px-5 md:px-7 py-[11px] justify-between items-center flex">
        <div className="ShowDetailsText pt-[5px] flex-col justify-start items-start gap-0.5 sm:gap-1 md:gap-2 inline-flex">
          <div className="Title">
            <span className="gap-1 text-base md:text-lg">
              <span className="font-semibold">
                The Glory
                <span className="font-normal"> (2022)</span>
              </span>
            </span>
          </div>
          <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
            <div className="Score info-text font-medium">Score</div>
            <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
              <div className="info-text font-bold">5.0</div>
              <StarIcon sizeRules="h-3 w-3" />
            </div>
            <div className="NoOfReviews text-slate-500 text-[11px] font-normal">
              (12.5k)
            </div>
          </div>
        </div>
        <div className="Right self-stretch justify-end items-center gap-2 min-[400px]:gap-4 sm:gap-6 md:gap-8 flex">
          <div className="PersonalRating self-stretch px-2.5 justify-end items-center gap-[30px] flex">
            <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
              <div className="StarRating h-full px-2.5  rounded-[30px] justify-center items-center gap-1 flex">
                <div className="8 text-[15px] font-bold leading-[10.50px]">
                  4.8
                </div>
                <StarIcon sizeRules="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="MoveIcon w-9 h-9 justify-center items-center flex">
            <Icon sizeRules="w-7 h-7" fill="stroke-1 stroke-light-text">
              <BarsIcon />
            </Icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
