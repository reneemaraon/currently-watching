import ArticlesView from './ArticlesView';
import PopularSection from './Sections/PopularSection';
import TrendingSection from './Sections/TrendingReviewsSection';
import TrendingShows from './Sections/TrendingShows';

function Home() {
  return (
    <div className="w-full max-w-[1200px] px-16 max-[900px]:px-8 max-[600px]:px-5 py-8 flex-col justify-start items-center gap-24 inline-flex">
      <PopularSection />
      <TrendingSection />
      <TrendingShows />
    </div>
  );
}

export default Home;
