import ReviewsListItem from "../../Common/ReviewListItem";
import SectionHeader from "./SectionHeader";

const TrendingSection = () => {
    return (
        <div className="w-full mt-5 flex-col justify-center items-start gap-12 inline-flex">
            <SectionHeader 
                sectionName="Trending Section" 
                arrowLeftFunction={() => {}}
                arrowRightFunction={() => {}}
            />
            <div className="ReviewsList w-full h-auto self-stretch justify-start items-start gap-[22px] inline-flex overflow-hidden">
                <ReviewsListItem />
                <ReviewsListItem />
                <ReviewsListItem />
            </div>
        </div>
    );
}
 
export default TrendingSection;