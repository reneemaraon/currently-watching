import { useShowsContext } from '../../context/ShowsContext';
import { useState } from 'react';
import LoadMorePanel from '../Common/LoadMorePagination';
import ListLoading from '../Common/LoadingList';
import ShowCardSmall from '../Common/ShowCard';
import { Header, HeaderName } from '../Home/Sections/SectionHeader';
import SortShows from './Sort';

const ShowsPage = () => {
  const {
    error,
    shows: { totalCount, shows },
    loading,
    loadNextPage,
    searchTerm,
    setSearchTerm,
    refreshResults,
    refetchResults,
  } = useShowsContext();
  const [isFocused, setIsFocused] = useState(false);

  const loadMoreItems = () => {
    loadNextPage();
  };

  const handleInputChange = (event) => {
    refreshResults();
    setSearchTerm(event.target.value);
    refetchResults();
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="w-full max-w-[1200px] px-10 max-[900px]:px-8 max-[600px]:px-5 max-[400px]:px-2 py-2 sm:py-8 flex-col justify-start items-center gap-6 sm:gap-8 md:gap-12 inline-flex">
      <Header>
        <HeaderName>Shows</HeaderName>
        <div className="flex gap-3 sm:gap-6 items-center">
          <div
            className={`${
              isFocused ? 'border-brand-gray' : 'border-light-stroke'
            }  border px-3 py-2 sm:px-5 sm:py-3.5 bg-theme-base rounded-xl justify-start items-center gap-5 flex`}
          >
            <input
              type="text"
              className="text-xs sm:text-sm placeholder-lighter-text leading-tight bg-transparent focus:outline-none"
              placeholder="Search shows"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <SortShows />
        </div>
      </Header>
      <div className="ShowsList w-full inline-flex px-0.5 pb-4 flex-col justify-start gap-5">
        <div className="inline-flex flex-wrap gap-1.5 sm:gap-3 justify-center">
          {shows &&
            shows.map((show) => {
              return <ShowCardSmall key={show._id} show={show} />;
            })}
        </div>
        {loading && <ListLoading />}
        {!loading && totalCount > shows.length && (
          <LoadMorePanel onClick={loadMoreItems} />
        )}
      </div>
    </div>
  );
};

export default ShowsPage;
