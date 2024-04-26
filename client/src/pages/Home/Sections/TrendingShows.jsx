import { useHomepageContext } from '../../../context/HomepageContext';
import ShowCardSmall from '../../Common/ShowCard';
import ScrollableList from './ScrollableList';

const TrendingShows = () => {
  const {
    newShows: { shows },
  } = useHomepageContext();
  return (
    <ScrollableList item_count={shows.length} sectionName="New Shows">
      {shows.map((show) => (
        <ShowCardSmall key={show._id} show={show} />
      ))}
    </ScrollableList>
  );
};

export default TrendingShows;
