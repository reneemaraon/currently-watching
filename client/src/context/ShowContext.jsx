import { createContext, useContext, useEffect, useState } from 'react';
import { getShowRequest, getShowsRequest } from '../api/showsApi';

const showContext = createContext();

export const useShowsContext = () => {
  const context = useContext(showContext);
  if (!context) throw new Error('Show Provider is missing');
  return context;
};

export const ShowsProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [shows, setShows] = useState({ shows: [] });
  const [show, setShow] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getShowsRequest({});
      setShows(res.data);
    })();
  }, []);

  const getShow = async (id) => {
    setIsLoading(true);
    try {
      const res = await getShowRequest(id);
      setShow(res.data.show);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setIsLoading(false);
  };

  const getShows = async (params) => {
    setIsLoading(true);
    try {
      const res = await getShowsRequest(params);
      setShows(res.data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <showContext.Provider
      value={{ loading, error, shows, show, getShow, getShows }}
    >
      {children}
    </showContext.Provider>
  );
};
