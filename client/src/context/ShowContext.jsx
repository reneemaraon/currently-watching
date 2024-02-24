import { createContext, useContext, useEffect, useState } from "react";
import { getShowRequest, getShowsRequest } from "../api/showsApi";

const showContext = createContext();

export const useShowsContext = () => {
  const context = useContext(showContext);
  if (!context) throw new Error("Show Provider is missing");
  return context;
};

export const ShowsProvider = ({ children }) => {
  const [shows, setShows] = useState({ shows: [] });
  const [show, setShow] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getShowsRequest({});
      setShows(res.data);
    })();
  }, []);

  const getShow = async (id) => {
    try {
      const res = await getShowRequest(id);
      setShow(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getShows = async (params) => {
    try {
      const res = await getShowsRequest(params);
      setShows(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <showContext.Provider value={{ shows, show, getShow, getShows }}>
      {children}
    </showContext.Provider>
  );
};
