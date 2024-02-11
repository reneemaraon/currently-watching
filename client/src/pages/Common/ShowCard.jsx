import StarIcon from "./Star";

const ShowCardSmall = () => {
    return (
        <div className="overflow-hidden w-64 shrink-0 h-[214px] bg-theme-base bg-opacity-70 rounded-[17px] flex-col justify-start items-start inline-flex">
            <img className="Show h-[135px]" src="https://via.placeholder.com/262x135" />
            <div className="ShowDetails w-full px-[13px] py-[11px] justify-between items-start inline-flex">
                <div className="ShowDetailsText w-40 h-[50px] pl-[5px] pt-[5px] flex-col justify-between items-start inline-flex">
                    <div className="inline-flex gap-1">
                        <span className="text-sm font-bold">
                            The Glory 
                        </span>
                        <span className="text-sm font-normal">
                            (2022)
                        </span>
                    
                    </div>
                <div className="NoOfReviews text-slate-500 text-xs font-medium">
                    12333 reviews
                </div>
            </div>
            <div className="StarRating w-14 h-14 rounded-full border-2 border-brand-tq justify-center items-center gap-0.5 flex">
                <div className="text-[15px] font-bold leading-[10.50px]">
                    4.8
                </div>
                <div className="w-4 h-4">
                    <StarIcon />
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default ShowCardSmall;