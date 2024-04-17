import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';

const ScrollableList = ({ item_count, children, sectionName }) => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const containerRef = useRef(null);
  const cardListRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && cardListRef.current && item_count > 0) {
      const containerWidth = containerRef.current.offsetWidth;
      const widthOneItem = Math.floor(
        (cardListRef.current.offsetWidth + 28) / item_count
      );
      const itemsInView = Math.floor(containerWidth / widthOneItem);
      setScrollWidth(itemsInView * widthOneItem);
    }
  }, [containerRef, cardListRef, item_count]);

  const scrollLeft = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft - scrollWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + scrollWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full mt-5 flex-col justify-center items-start gap-4 sm:gap-6 md:gap-8 inline-flex">
      <SectionHeader
        sectionName={sectionName}
        arrowLeftFunction={scrollLeft}
        arrowRightFunction={scrollRight}
      />
      <div
        ref={containerRef}
        style={{ overflowX: 'auto' }}
        className="ReviewsList no-scrollbar h-auto w-full"
      >
        <div
          ref={cardListRef}
          className="inline-flex gap-7 transition-all duration-[0.3s] ease-[ease-out]"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollableList;
