import { createContext, useContext, useEffect, useState } from "react";
import { GET_SHOWS_LIST } from "../api/showsApi";
import { useQuery } from "@apollo/client";
import findCursor from "../utils/getCursorFromList";

const showContext = createContext();

const ITEMS_PER_PAGE = 24;
const SORT_FIELD = "firstAirDate";

export const useShowsContext = () => {
  const context = useContext(showContext);
  if (!context) throw new Error("Show Provider is missing");
  return context;
};

export const ShowsProvider = ({ children }) => {
  const [shows, setShows] = useState({
    totalCount: 0,
    shows: [],
  });
  const [cursor, setCursor] = useState(new Date());

  const {
    loading,
    error,
    data,
    refetch: refetchResults,
  } = useQuery(GET_SHOWS_LIST, {
    variables: {
      filter: {
        limit: ITEMS_PER_PAGE,
        cursorField: SORT_FIELD,
        cursorValue: cursor,
        ascending: false,
      },
    },
  });

  useEffect(() => {
    if (data) {
      const { shows: dataShows } = data.shows;
      const { shows: currentShows } = shows;

      if (
        findCursor(dataShows, SORT_FIELD) !=
        findCursor(currentShows, SORT_FIELD)
      ) {
        setShows((prevShows) => ({
          ...prevShows,
          totalCount: data.shows.totalCount,
          shows: [...prevShows.shows, ...data.shows.shows],
        }));
      }
    }
  }, [data]);

  const updateCursor = () => {
    console.log(findCursor(shows.shows, SORT_FIELD));
    setCursor(findCursor(shows.shows, SORT_FIELD));
  };

  const loadNextPage = () => {
    updateCursor();
    refetchResults();
  };

  return (
    <showContext.Provider value={{ loading, error, shows, loadNextPage }}>
      {children}
    </showContext.Provider>
  );
};
