import StarIcon from "../Common/Star";

const RatingRow = ({ ratingName }) => {
    return (
        <div className="RatingRow pl-[3px] gap-2 justify-between items-center inline-flex">
            <div className="Acting text-gray-800 text-xs font-medium">{ratingName}</div>
            <div className="max-[1000px]:hidden Rating w-[85.09px] justify-center items-center gap-[3px] flex">
                <div className="w-4 h-4"><StarIcon /></div>
                <div className="w-4 h-4"><StarIcon /></div>
                <div className="w-4 h-4"><StarIcon /></div>
                <div className="w-4 h-4"><StarIcon /></div>
                <div className="w-4 h-4"><StarIcon /></div>
            </div>
            <div className="min-[1001px]:hidden Rating justify-center items-center gap-[3px] max-[600px]:gap-0 flex">
                <div className="Number text-xs font-bold">5</div>
                <div className="w-4 h-4"><StarIcon /></div>
            </div>
        </div>
        
    );
}
 

const ReviewsListItem = () => {
    return (
        <div className="w-full 
            bg-white bg-opacity-70 rounded-[20px] border h-[230px] border-slate-200 justify-start items-start inline-flex
            max-[600px]:flex-col
            max-[600px]:h-[350px]
                        
        ">
            <div className="
                Show relative overflow-hidden 
                rounded-l-[20px] h-full w-full flex-col justify-start items-center inline-flex
                max-[600px]:rounded-t-[20px]
                max-[600px]:rounded-bl-[0px]
                min-[601px]:max-w-[240px]
                max-[600px]:w-full
                grow
                max-[600px]:h-[220px]
            ">
                <img className="object-cover align-center w-full h-full" src="https://image.tmdb.org/t/p/w500/6KMhKm2ZHG8KUtg4lhsNUdt4iPh.jpg" />
                <div className="absolute bottom-0 Title w-full h-[60px] pl-[15px] pr-2.5 pt-2.5 pb-[13px] bg-gradient-to-b from-transparent to-black justify-start items-end gap-2.5 inline-flex">
                    <div className="Title grow shrink basis-0 text-white text-xs font-semibold">Twenty Five Twenty One</div>
                </div>
            </div>
            <div className="ReviewDetails w-full h-full p-4 flex-col justify-start items-start gap-2 inline-flex grow">
                <div className="Author pl-[5px] py-px justify-between items-start inline-flex">
                <div className="Profile justify-start items-center gap-3 flex">
                  <img className="ProfilePhoto w-6 h-6 sm:w-10 sm:h-10 relative rounded-full" src="https://via.placeholder.com/41x42" />
                  <div className="AccDetails flex-col justify-center items-start gap-0 sm:gap-0.5 inline-flex">
                    <div className="TwtDisplayName text-gray-800 text-sm sm:text-base font-medium font-['Inter']">Hwang Inyoup</div>
                    <div className="Username text-slate-500 text-xs sm:text-sm font-normal font-['Inter']">@hi_high_hiy</div>
                  </div>
                </div>
                </div>
                <div className="ReviewSnippets grow h-[89px] pl-[5px] flex-col justify-start items-start gap-2 flex">
                  <div className="Title text-gray-800 text-base sm:text-l font-medium">This was such a great watch</div>
                  <div className="Preview text-zinc-500 text-sm font-normal grow overflow-hidden">I had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happ...Whenever there was something bla ba bla. So heartbreaking to see them not </div>
                </div>
                <div className="Footer w-full justify-between items-end gap-4 inline-flex">
                <div className="RatingsCont w-full items-start inline-flex">
                    <div className="Ratings w-full justify-start items-end gap-5 max-[900px]:gap-2 flex">
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