import { createContext, useContext, useEffect, useState } from 'react';
import { GET_SHOWS_LIST_SIMPLE } from '../api/showsApi';
import { useQuery } from '@apollo/client';
import findCursor from '../utils/getCursorFromList';

const showContext = createContext();

const ITEMS_PER_PAGE = 24;
const FIELD_TYPES = {
  firstAirDate: 'date',
  popularity: 'number',
  title: 'string',
};

export const useShowsContext = () => {
  const context = useContext(showContext);
  if (!context) throw new Error('Show Provider is missing');
  return context;
};

export const ShowsProvider = ({ children }) => {
  const [shows, setShows] = useState({
    totalCount: 0,
    shows: [],
  });
  const [cursor, setCursor] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('firstAirDate');
  const [ascending, setAscending] = useState(false);

  const {
    loading,
    error,
    data,
    refetch: refetchResults,
  } = useQuery(GET_SHOWS_LIST_SIMPLE, {
    variables: {
      filter: {
        limit: ITEMS_PER_PAGE,
        search: searchTerm,
        cursorField: sortField,
        cursorValue:
          sortField == 'firstAirDate' || sortField == 'title' ? cursor : null,
        cursorNumValue: sortField == 'popularity' ? cursor : null,
        ascending: ascending,
        cursorType: FIELD_TYPES[sortField],
      },
    },
  });

  useEffect(() => {
    if (data) {
      const { shows: dataShows } = data.shows;
      const { shows: currentShows } = shows;

      if (
        findCursor(dataShows, sortField) != findCursor(currentShows, sortField)
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
    console.log(findCursor(shows.shows, sortField));
    setCursor(findCursor(shows.shows, sortField));
  };

  const loadNextPage = () => {
    updateCursor();
    refetchResults();
  };

  const refreshResults = () => {
    setShows({
      totalCount: 0,
      shows: [],
    });
    setCursor(null);
    // refetchResults();
  };

  return (
    <showContext.Provider
      value={{
        refreshResults,
        loading,
        error,
        shows,
        loadNextPage,
        searchTerm,
        setSearchTerm,
        setSortField,
        sortField,
        ascending,
        setAscending,
      }}
    >
      {children}
    </showContext.Provider>
  );
};
