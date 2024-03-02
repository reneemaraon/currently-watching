import { createContext, useContext, useEffect, useState } from 'react';
import {
  getReviewRequest,
  getReviewsRequest,
  GET_REVIEWS_LIST,
} from '../api/reviewsApi';
import { useQuery } from '@apollo/client';

const reviewContext = createContext();

export const useReviewsContext = () => {
  const context = useContext(reviewContext);
  if (!context) throw new Error('Review Provider is missing');
  return context;
};

export const ReviewsProvider = ({ children }) => {
  const [review, setReview] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { loading, error, data } = useQuery(GET_REVIEWS_LIST);

  const getReview = async (id) => {
    try {
      const res = await getReviewRequest(id);
      setReview(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data) {
      setReviews(data.reviews); // Assuming your data structure has a 'reviews' field
    }
  }, [data]);

  return (
    <reviewContext.Provider
      value={{ reviews, review, error, getReview, loading }}
    >
      {children}
    </reviewContext.Provider>
  );
};
