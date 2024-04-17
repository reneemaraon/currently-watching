import { useEffect, useRef, useState } from "react";
import { useHomepageContext } from "../../../context/HomepageContext";
import ReviewsListItem from "../../Common/ReviewListItem";
import SectionHeader from "./SectionHeader";

const TrendingSection = () => {
  const {
    trendingReviews: { reviews },
  } = useHomepageContext();

  const [scrollWidth, setScrollWidth] = useState(0);
  const containerRef = useRef(null);
  const cardListRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && cardListRef.current && reviews.length > 0) {
      const containerWidth = containerRef.current.offsetWidth;
      const widthOneItem = Math.floor(
        (cardListRef.current.offsetWidth + 28) / reviews.length
      );
      const itemsInView = Math.floor(containerWidth / widthOneItem);
      setScrollWidth(itemsInView * widthOneItem);
    }
  }, [containerRef, cardListRef, reviews]);

  const scrollLeft = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft - scrollWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + scrollWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full mt-5 flex-col justify-center items-start gap-4 sm:gap-6 md:gap-12 inline-flex">
      <SectionHeader
        sectionName="Trending Section"
        arrowLeftFunction={scrollLeft}
        arrowRightFunction={scrollRight}
      />
      <div
        ref={containerRef}
        style={{ overflowX: "auto" }}
        className="ReviewsList no-scrollbar h-auto w-full"
      >
        <div
          ref={cardListRef}
          className="inline-flex gap-7 transition-all duration-[0.3s] ease-[ease-out]"
        >
          {reviews.map((review) => (
            <ReviewsListItem key={review._id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
