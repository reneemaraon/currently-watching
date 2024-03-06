import { createContext, useContext, useEffect, useState } from 'react';
import { getShowRequest, GET_SHOW_REVIEWS } from '../api/showsApi';
import { useQuery } from '@apollo/client';

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
  const [showId, setShowId] = useState(null);
  const [showReviews, setShowReviews] = useState([]);
  const {
    loading: showReviewsLoading,
    error: showReviewsError,
    data: showReviewsData,
    refetch: refetchShowReviews,
  } = useQuery(GET_SHOW_REVIEWS, {
    variables: { id: showId, filter: { limit: 5 } },
  });

  useEffect(() => {
    if (showReviewsData) {
      setShowReviews(showReviewsData.showReviews); // Assuming your data structure has a 'searchResults' field
    }
  }, [showReviewsData]);

  useEffect(() => {
    if (showId) {
      getShow();
      refetchShowReviews();
    }
  }, [showId]);

  const getShow = async () => {
    setIsLoading(true);
    try {
      const res = await getShowRequest(showId);
      setShow(res.data.show);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <showDetailContext.Provider
      value={{
        showId,
        setShowId,
        loading,
        error,
        show,
        getShow,
        showReviews,
        showReviewsLoading,
        showReviewsError,
        refetchShowReviews,
      }}
    >
      {children}
    </showDetailContext.Provider>
  );
};
