import React from "react";
import CircularButton from "../Common/CircleButton";
import { HeartIcon, ShareIcon } from "../Common/IconList";
import StatContainer from "./StatContainer";
import ReviewsListItem from "../Reviews/ReviewListItem";
import CustomButton from "../Common/CustomButton";

const ShowDetail = () => {
  return (
    <div className="w-full inline-flex flex-col items-center relative">
      <div className="container-center-card pt-4 sm:pt-10">
        {/* Main contentt */}
        <div className="z-10 Main large-white-card py-6 px-3.5 sm:px-6">
          <div className="Details flex-wrap grow shrink basis-0 justify-start items-start gap-3 flex">
            <div className="PosterContainer flex max-[530px]:justify-start max-[530px]:px-4 pb-3 justify-end max-[530px]:max-w-[500px] max-[530px]:w-full w-1/3 max-w-[300px] min-w-[240px] h-auto overflow-hidden">
              <img
                className="object-contain sm:object-cover w-[220px] sm:w-full rounded-xl"
                src="https://via.placeholder.com/299x448"
              />
            </div>
            <div className="ShowDetails min-w-[230px] grow shrink basis-0 px-1 sm:px-3.5 flex-col justify-start items-start gap-3.5 inline-flex">
              <div className="ShowHeader flex-wrap w-full pb-2 gap-3 border-b justify-start items-start inline-flex">
                <div className="TitleGenre grow py-2.5 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="TitleAndViews grow flex-wrap gap-1 sm:gap-2 justify-start items-center inline-flex">
                    <div className="TheGlory2022 title-text">
                      The Glory (2022)
                    </div>
                    <div className="subtext">454k watched</div>
                  </div>
                  <div className="subtext text-brand-tq">
                    2 seasons | PG-13 | Thriller, Revenge
                  </div>
                </div>
                <div className="ReviewActions justify-start items-start pb-2 gap-1.5 sm:gap-2.5 flex">
                  <CircularButton>
                    <HeartIcon />
                  </CircularButton>
                  <CircularButton>
                    <ShareIcon />
                  </CircularButton>
                </div>
              </div>
              <div className="w-full paragraph-text leading-7">
                A young woman, bullied to the point of deciding to drop out of
                school, plans the best way to get revenge. After becoming a
                primary school teacher, she takes in the son of the man who
                tormented her the most to enact her vengeance.
              </div>
              <div className="Cast pb-1.5 justify-start  gap-2.5 inline-flex">
                <div className="subtext text-text-dark font-bold">Cast:</div>
                <div className="subtext text-text-dark">
                  Song Hye Kyo, Lee Dohyun, Lim Jiyeon
                </div>
              </div>
              <div className="w-full hidden sm:block">
                <StatContainer />
              </div>
            </div>
          </div>
          <div className="w-full block sm:hidden py-4">
            <StatContainer />
          </div>
          <div className="Footer w-full py-[30px] rounded-[17px] flex-col justify-center items-start gap-[50px] flex">
            <div className="ReviewSection w-full pt-[30px] border-t border-slate-200 flex-col justify-center items-center gap-3.5 flex">
              <div className="Header px-2 w-full pb-5 justify-between items-start inline-flex">
                <div className="inline-flex gap-2">
                  <span className="text-gray-800 text-2xl font-medium font-['Inter']">
                    Reviews
                  </span>
                  <span className="text-neutral-300 text-2xl font-medium font-['Inter']">
                    (20)
                  </span>
                </div>
                <div className="ActionsList w-[146px] justify-end items-start gap-2.5 flex">
                  <CustomButton styleSet="dark" size="defaultResize">
                    + Add Review
                  </CustomButton>
                </div>
              </div>
              <div className="CommentList w-full sm:px-2 flex-col justify-center items-start gap-4 flex">
                <ReviewsListItem noImage />
                <ReviewsListItem noImage />
                <ReviewsListItem noImage />
                <ReviewsListItem noImage />
                <div className="LoadMorePanel w-full h-[65px] flex-col justify-end items-center gap-2.5 flex">
                  <div className="Button px-5 py-3.5 bg-zinc-100 rounded-[30px] border border-slate-200 justify-center items-center gap-2 inline-flex">
                    <div className="Button grow shrink basis-0 text-center text-gray-800 text-base font-semibold font-['Inter']">
                      Load More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
