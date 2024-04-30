import { useHomepageContext } from '../../../context/HomepageContext';
import ShowCardSmall from '../../Common/ShowCard';
import ScrollableList from './ScrollableList';

const RomanceShows = () => {
  const {
    romanceShows: { shows },
  } = useHomepageContext();
  return (
    <ScrollableList item_count={shows.length} sectionName="Romantic Comedies">
      {shows.map((show) => (
        <ShowCardSmall key={show._id} show={show} />
      ))}
    </ScrollableList>
  );
};

export default RomanceShows;
