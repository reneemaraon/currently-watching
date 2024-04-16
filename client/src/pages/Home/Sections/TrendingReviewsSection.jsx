import { useEffect, useRef, useState } from 'react';
import { useHomepageContext } from '../../../context/HomepageContext';
import ReviewsListItem from '../../Common/ReviewListItem';
import SectionHeader from './SectionHeader';

const TrendingSection = () => {
  const {
    trendingReviews: { reviews },
  } = useHomepageContext();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const containerRef = useRef(null);
  const cardsListRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    if (cardsListRef.current) {
      setScrollWidth(Math.round(cardsListRef.current.offsetWidth * 0.9));
    }
    console.log('containerWidth');
    console.log(containerWidth);
    console.log('scrollWidth');
    console.log(scrollWidth);
  }, [containerRef, containerWidth]);

  const scrollLeft = () => {
    if (scrollPosition + containerWidth > 0) {
      setScrollPosition(0);
    } else {
      setScrollPosition((prevPosition) => prevPosition + containerWidth);
    }
  };

  const scrollRight = () => {
    if (
      scrollPosition - containerWidth + scrollWidth <
      Math.abs(scrollWidth / reviews.length)
    ) {
      setScrollPosition(-scrollWidth + Math.abs(scrollWidth / reviews.length));
    } else {
      setScrollPosition((prevPosition) => prevPosition - containerWidth);
    }
  };

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  return (
    <div className="w-full mt-5 flex-col justify-center items-start gap-12 inline-flex">
      <SectionHeader
        sectionName="Trending Section"
        arrowLeftFunction={scrollLeft}
        arrowRightFunction={scrollRight}
        disabledLeft={scrollPosition >= 0}
        disabledRight={Math.abs(scrollPosition - containerWidth) > scrollWidth}
      />
      <div
        ref={containerRef}
        className="ReviewsList h-auto w-full overflow-hidden"
      >
        <div
          className="inline-flex gap-7 transition-all duration-[0.3s] ease-[ease-out]"
          style={{ transform: `translateX(${scrollPosition}px)` }}
          ref={cardsListRef}
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
