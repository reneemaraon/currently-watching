import StarIcon from "./Star";

const RatingRow = ({ ratingName }) => {
    return (
        <div className="RatingRow pl-[3px] gap-6 justify-between items-center inline-flex">
            <div className="Acting text-gray-800 text-xs font-medium">{ratingName}</div>
            <div className="Rating w-[85.09px] justify-start items-center gap-[3px] flex">
                <div className="w-4 h-4"><StarIcon /></div>
                <div className="w-4 h-4"><StarIcon /></div>
                <div className="w-4 h-4"><StarIcon /></div>
                <div className="w-4 h-4"><StarIcon /></div>
                <div className="w-4 h-4"><StarIcon /></div>
            </div>
        </div>
    );
}
 

const ReviewsListItem = () => {
    return (
        <div className="
            ReviewListItem overflow-hidden max-[600px]:flex-col max-[600px]:h-[400px] min-w-[550px] h-[260px] bg-theme-base bg-opacity-70 rounded-[20px] border border-slate-200 justify-start items-start inline-flex
            max-[600px]:min-w-[320px]  max-[600px]:min-h-[450px] 
        ">
            <div className="
                Show min-w-[250px] max-[600px]:w-full max-[600px]:h-48 h-full relative overflow-hidden self-stretch flex-col justify-start items-center inline-flex
                max-[600px]:min-h-[190px]    
            ">
                <img className="object-cover align-center w-full h-full" src="https://image.tmdb.org/t/p/w500/6KMhKm2ZHG8KUtg4lhsNUdt4iPh.jpg" />
                <div className="absolute bottom-0 Title w-full h-[60px] pl-[15px] pr-2.5 pt-2.5 pb-[13px] bg-gradient-to-b from-transparent to-black justify-start items-end gap-2.5 inline-flex">
                    <div className="Title grow shrink basis-0 text-white text-xs font-semibold">Twenty Five Twenty One</div>
                </div>
            </div>
            <div className="ReviewDetails w-full h-full self-stretch p-4 flex-col justify-start items-start gap-2 inline-flex">
                <div className="Author self-stretch pl-[5px] py-px justify-between items-start inline-flex">
                <div className="Profile h-[31px] justify-start items-center gap-[11px] flex">
                    <img className="ProfilePhoto w-[31px] h-[31px] relative rounded-[40px]" src="https://via.placeholder.com/31x31" />
                    <div className="AccDetails flex-col justify-center items-start inline-flex">
                    <div className="TwtDisplayName text-gray-800 text-[13px] font-medium">Hwang Inyoup</div>
                    <div className="Username text-slate-500 text-[11px] font-normal">@hi_high_hiy</div>
                    </div>
                </div>
                <div className="Frame w-[15px] h-[15px] relative" />
                </div>
                <div className="ReviewSnippets self-stretch grow shrink basis-0 pl-[5px] pt-[5px] flex-col justify-start items-start gap-2 flex">
                <div className="Title self-stretch text-gray-800 text-base font-medium">This was such a great watch</div>
                <div className="Preview overflow-hidden text-ellipsis h-[65px] w-full text-zinc-500 text-sm font-normal">
                    I had a great time watching this drama. Whenever there was something bla ba bla. I had a great time watching this drama. Whenever there was something bla ba bla. I had a great time watching this drama. Whenever there was something bla ba bla.
                </div>
                </div>
                <div className="Footer self-stretch justify-center items-end gap-2.5 inline-flex">
                <div className="RatingsCont grow shrink basis-0 h-[71px] flex-col justify-between items-start inline-flex">
                    <div className="Ratings max-w-28 h-[71px] pl-1 pr-2.5 py-[5px] flex-col justify-start gap-2 flex">
                        <RatingRow ratingName="Acting" />
                        <RatingRow ratingName="Plot" />
                        <RatingRow ratingName="Visuals" />
                    </div>
                </div>
                <div className="Options justify-end items-start gap-3 flex">
                    <div className="Like flex-col justify-start items-center gap-0.5 inline-flex">
                    <div className="Frame w-5 h-5 relative" />
                    <div className=" text-zinc-500 text-xs font-medium">1234</div>
                    </div>
                    <div className="Share flex-col justify-start items-center gap-0.5 inline-flex">
                    <div className="Frame w-5 h-5 relative" />
                    <div className=" text-zinc-500 text-xs font-medium">1234</div>
                    </div>
                </div>
                </div>
            </div>
        </div>  
    );
}
 
export default ReviewsListItem;