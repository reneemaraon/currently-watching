import ArticlesView from './ArticlesView';
import PopularSection from './Sections/PopularSection';
import TrendingSection from './Sections/TrendingReviewsSection';
import TrendingShows from './Sections/TrendingShows';

function Home() {
  return (
    <div className="w-full max-w-[1200px] px-10 max-[900px]:px-8 max-[600px]:px-5 max-[400px]:px-2 py-2 sm:py-8 flex-col justify-start items-center gap-6 sm:gap-8 md:gap-12 inline-flex">
      <PopularSection />
      <TrendingSection />
      <TrendingShows />
    </div>
  );
}

export default Home;
