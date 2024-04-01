import { createContext, useContext, useEffect, useState } from 'react';
import { getShowRequest, GET_SHOW_REVIEWS, GET_SHOW } from '../api/showsApi';
import { useQuery } from '@apollo/client';
import { deleteReviewRequest } from '../api/reviewsApi';

const showDetailContext = createContext();

export const useShowDetailContext = () => {
  const context = useContext(showDetailContext);
  if (!context) throw new Error('Show Provider is missing');
  return context;
};

export const ShowDetailProvider = ({ children }) => {
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

  const {
    loading,
    error,
    data: showData,
    refetch: refetchShow,
  } = useQuery(GET_SHOW, {
    variables: { id: showId },
  });

  const deleteReview = async (id) => {
    const response = await deleteReviewRequest(id);

    if (response) {
      setShowReviews(() => showReviews.filter((review) => review._id !== id));
      setShow(() => ({
        ...show,
        reviewCount: show.reviewCount - 1,
      }));
      return response;
    }
  };

  useEffect(() => {
    if (showReviewsData) {
      setShowReviews(showReviewsData.showReviews); // Assuming your data structure has a 'searchResults' field
    }
  }, [showReviewsData]);

  useEffect(() => {
    if (showData) {
      setShow(showData.show); // Assuming your data structure has a 'searchResults' field
    }
  }, [showData]);

  useEffect(() => {
    if (showId) {
      refetchShow();
      refetchShowReviews();
    }
  }, [showId]);

  return (
    <showDetailContext.Provider
      value={{
        showId,
        setShowId,
        loading,
        error,
        show,
        deleteReview,
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
