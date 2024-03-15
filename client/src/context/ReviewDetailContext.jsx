import { createContext, useContext, useEffect, useState } from 'react';
import { getReviewRequest, GET_REVIEW } from '../api/reviewsApi';
import { useQuery } from '@apollo/client';

const reviewDetailContext = createContext();

export const useReviewDetailContext = () => {
  const context = useContext(reviewDetailContext);
  if (!context) throw new Error('Review Detail Provider is missing');
  return context;
};

export const ReviewDetailProvider = ({ children }) => {
  const [review, setReview] = useState(null);
  const [reviewId, setReviewId] = useState(null);
  const { loading, error, data, refetch } = useQuery(GET_REVIEW, {
    variables: { id: reviewId },
  });

  useEffect(() => {
    if (reviewId) {
      refetch();
    }
  }, [reviewId]);

  useEffect(() => {
    if (data) {
      setReview(data.review); // Assuming your data structure has a 'reviews' field
    }
  }, [data]);

  return (
    <reviewDetailContext.Provider
      value={{ setReview, setReviewId, review, error, refetch, loading }}
    >
      {children}
    </reviewDetailContext.Provider>
  );
};
