const StatContainer = () => {
  return (
    <div className="StatContainer py-3.5 flex-col justify-start items-start gap-2.5 flex">
      <div className="Ratings px-5 py-3.5 rounded-[10px] border border-slate-200 justify-start items-start gap-[42px] inline-flex">
        <div className="AspectRatings flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="RatingHeader pb-1.5 justify-start items-start gap-2.5 inline-flex">
            <div className="AveragePerAspect text-gray-800 text-sm font-medium font-['Inter']">
              Average per aspect
            </div>
          </div>
          <div className="Right flex-col justify-start items-start gap-3 flex">
            <div className="RatingRow w-[149px] px-2.5 py-2 rounded-[5px] border border-slate-200 justify-between items-start inline-flex">
              <div className="Acting text-gray-800 text-[13px] font-bold font-['Inter']">
                Acting
              </div>
              <div className="Rating w-[37.66px] w-full justify-start items-center gap-0.5 flex">
                <div className="0 text-right text-gray-800 text-[13px] font-medium font-['Inter']">
                  2.6
                </div>
              </div>
            </div>
            <div className="RatingRow w-[149px] px-2.5 py-2 rounded-[5px] border border-slate-200 justify-between items-start inline-flex">
              <div className="Acting text-gray-800 text-[13px] font-bold font-['Inter']">
                Plot
              </div>
              <div className="Rating w-[34.66px] w-full justify-start items-center gap-0.5 flex">
                <div className="0 text-right text-gray-800 text-[13px] font-medium font-['Inter']">
                  3.1
                </div>
              </div>
            </div>
            <div className="RatingRow w-[149px] px-2.5 py-2 rounded-[5px] border border-slate-200 justify-between items-start inline-flex">
              <div className="Acting text-gray-800 text-[13px] font-bold font-['Inter']">
                Visuals
              </div>
              <div className="Rating w-[37.66px] w-full justify-start items-center gap-0.5 flex">
                <div className="0 text-right text-gray-800 text-[13px] font-medium font-['Inter']">
                  2.0
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="AspectRatings w-full flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="RatingHeader pb-1.5 justify-start items-start gap-2.5 inline-flex">
            <div className="AverageTotalRating text-gray-800 text-sm font-medium font-['Inter']">
              Average Total Rating
            </div>
          </div>
          <div className="RatingsContainer w-full py-[5px] justify-center items-center gap-2.5 inline-flex">
            <div className="StarRating w-20 h-20 px-2.5 py-5 rounded-[40px] border-2 border-cyan-500 justify-center items-center gap-[5px] flex">
              <div className="8 text-black text-xl font-bold leading-[14px]">
                4.8
              </div>
            </div>
          </div>
          <div className="From234kReviews w-full text-center">
            <span className="text-gray-800 text-[13px] font-normal leading-normal">
              from{" "}
            </span>
            <span className="text-gray-800 text-[13px] font-bold leading-normal">
              23.4k
            </span>
            <span className="text-gray-800 text-[13px] font-normal leading-normal">
              {" "}
              reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatContainer;
