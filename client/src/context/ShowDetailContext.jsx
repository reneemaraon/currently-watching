import { createContext, useContext, useEffect, useState } from 'react';
import { getShowRequest } from '../api/showsApi';

const showDetailContext = createContext();

export const useShowDetailContext = () => {
  const context = useContext(showDetailContext);
  if (!context) throw new Error('Show Provider is missing');
  return context;
};

export const ShowDetailProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(null);

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

  return (
    <showDetailContext.Provider value={{ loading, error, show, getShow }}>
      {children}
    </showDetailContext.Provider>
  );
};
