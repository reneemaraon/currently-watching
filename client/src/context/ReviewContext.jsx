import { createContext, useContext, useEffect, useState } from "react";
import { getReviewRequest, getReviewsRequest } from "../api/reviewsApi";

const reviewContext = createContext();

export const useReviewsContext = () => {
  const context = useContext(reviewContext);
  if (!context) throw new Error("Review Provider is missing");
  return context;
};

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState({ reviews: [] });
  const [review, setReview] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getReviewsRequest({});
      setReviews(res.data);
    })();
  }, []);

  const getReview = async (id) => {
    try {
      const res = await getReviewRequest(id);
      setReview(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getReviews = async (params) => {
    try {
      const res = await getReviewsRequest(params);
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <reviewContext.Provider value={{ reviews, review, getReview, getReviews }}>
      {children}
    </reviewContext.Provider>
  );
};
