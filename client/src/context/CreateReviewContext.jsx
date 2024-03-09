import { createContext, useContext, useEffect, useState } from 'react';
import { getShowRequest, GET_SHOW_REVIEWS, GET_SHOW } from '../api/showsApi';
import { useQuery } from '@apollo/client';

const createReviewContext = createContext();

export const useCreateReviewContext = () => {
  const context = useContext(createReviewContext);
  if (!context) throw new Error('Show Provider is missing');
  return context;
};

export const CreateReviewContext = ({ children }) => {
  const [show, setShow] = useState(null);
  const [showId, setShowId] = useState(null);
  const [actingRating, setActingRating] = useState(null);
  const [plotRating, setPlotRating] = useState(null);
  const [visualsRating, setVisualsRating] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(``);

  const {
    loading,
    error,
    data: showData,
    refetch: refetchShow,
  } = useQuery(GET_SHOW, {
    variables: { id: showId },
  });

  useEffect(() => {
    if (showData) {
      setShow(showData.show); // Assuming your data structure has a 'searchResults' field
    }
  }, [showData]);

  useEffect(() => {
    if (showId) {
      refetchShow();
    }
  }, [showId]);

  return (
    <createReviewContext.Provider
      value={{
        showId,
        setShowId,
        loading,
        actingRating,
        setActingRating,
        plotRating,
        setPlotRating,
        visualsRating,
        setVisualsRating,
        title,
        setTitle,
        body,
        setBody,
        error,
        show,
      }}
    >
      {children}
    </createReviewContext.Provider>
  );
};
