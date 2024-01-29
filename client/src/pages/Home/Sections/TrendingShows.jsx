import ShowCardSmall from "../../Common/ShowCard";
import SectionHeader from "./SectionHeader";

const TrendingShows = () => {
    return (
        <div className="w-full mt-5 flex-col justify-center items-start gap-12 inline-flex">
            <SectionHeader 
                sectionName="Trending Shows" 
                arrowLeftFunction={() => {}}
                arrowRightFunction={() => {}}
            />
            <div className="ReviewsList w-full justify-start items-start gap-[22px] inline-flex overflow-hidden">
                <ShowCardSmall />
                <ShowCardSmall />
                <ShowCardSmall />
                <ShowCardSmall />
                <ShowCardSmall />
            </div>
        </div>
    );
}
 
export default TrendingShows;