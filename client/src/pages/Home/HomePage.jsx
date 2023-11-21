import ArticlesView from './ArticlesView';
import Banner from './Banner';
import PopularSection from './PopularSection';

function Home() {
  return (
    <div className="w-full max-w-[1200px] px-10 flex-col justify-start items-center gap-2.5 inline-flex">
      <PopularSection />
    </div>
  );
}

export default Home;
