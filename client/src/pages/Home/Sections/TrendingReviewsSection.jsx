import { useHomepageContext } from '../../../context/HomepageContext';
import ReviewsListItem from '../../Common/ReviewListItem';
import ScrollableList from './ScrollableList';

const TrendingSection = () => {
  const {
    trendingReviews: { reviews },
  } = useHomepageContext();

  return (
    <ScrollableList item_count={reviews.length} sectionName="Trending Reviews">
      {reviews.map((review) => (
        <ReviewsListItem key={review._id} review={review} />
      ))}
    </ScrollableList>
  );
};

export default TrendingSection;
