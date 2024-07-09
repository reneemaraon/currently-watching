import { useShowsContext } from "../../context/ShowsContext";
import { useState } from "react";
import { useSearchContext } from "../../context/SearchContext";
import LoadMorePanel from "../Common/LoadMorePagination";
import ListLoading from "../Common/LoadingList";
import ShowCardSmall from "../Common/ShowCard";
import { Header, HeaderName } from "../Home/Sections/SectionHeader";

const ShowsPage = () => {
  const {
    error,
    shows: { totalCount, shows },
    loading,
    loadNextPage,
  } = useShowsContext();

  const loadMoreItems = () => {
    loadNextPage();
  };

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="w-full max-w-[1200px] px-10 max-[900px]:px-8 max-[600px]:px-5 max-[400px]:px-2 py-2 sm:py-8 flex-col justify-start items-center gap-6 sm:gap-8 md:gap-12 inline-flex">
      <Header>
        <HeaderName>Shows</HeaderName>
      </Header>
      <div className="ShowsList w-full inline-flex px-0.5 pb-4 sm:px-2.5 flex-col justify-start items-center gap-5">
        <div className="inline-flex justify-center flex-wrap gap-8">
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
