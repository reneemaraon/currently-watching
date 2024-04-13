import { createContext, useContext, useEffect, useState } from 'react';
import { GET_SHOWS_LIST } from '../api/showsApi';
import { useQuery } from '@apollo/client';

const showContext = createContext();

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

  const {
    loading,
    error,
    data,
    refetch: refetchResults,
  } = useQuery(GET_SHOWS_LIST, {
    variables: { filter: { limit: 20 } },
  });

  useEffect(() => {
    if (data) {
      setShows(data.shows); // Assuming your data structure has a 'searchResults' field
    }
  }, [data]);

  return (
    <showContext.Provider value={{ loading, error, shows }}>
      {children}
    </showContext.Provider>
  );
};
