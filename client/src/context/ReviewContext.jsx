import { createContext, useContext, useEffect, useState } from "react";
import {
  getReviewRequest,
  getReviewsRequest,
  GET_REVIEWS_LIST,
  deleteReviewRequest,
} from "../api/reviewsApi";
import { useQuery } from "@apollo/client";

const ITEMS_PER_PAGE = 5;
const reviewContext = createContext();

export const useReviewsContext = () => {
  const context = useContext(reviewContext);
  if (!context) throw new Error("Review Provider is missing");
  return context;
};

export const ReviewsProvider = ({ children }) => {
  const [review, setReview] = useState(null);
  const [reviews, setReviews] = useState({
    currentPage: 0,
    totalPages: 0,
    totalCount: 0,
    reviews: [],
  });
  const [page, setPage] = useState(1);
  const { loading, error, data, refetch } = useQuery(GET_REVIEWS_LIST, {
    variables: { filter: { page, limit: ITEMS_PER_PAGE } },
  });

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
      console.log("data");
      console.log(data);
      console.log("reviews");
      console.log(reviews);
      if (reviews.currentPage < data.reviews.currentPage) {
        setReviews((prevReviews) => ({
          ...prevReviews,
          currentPage: data.reviews.currentPage,
          totalCount: data.reviews.totalCount,
          reviews: [...prevReviews.reviews, ...data.reviews.reviews],
        }));
      }
    }
  }, [data]);

  useEffect(() => {
    if (reviews) {
      const { reviews: currentReviews, totalCount } = reviews;
      if (
        currentReviews.length < page * ITEMS_PER_PAGE &&
        currentReviews.length < totalCount
      ) {
        refetch();
      }
    }
  }, page);

  useEffect(() => {
    if (
      reviews &&
      reviews.reviews.length < reviews.totalCount &&
      reviews.reviews.length < page * ITEMS_PER_PAGE
    ) {
      try {
        const { data } = useQuery(GET_REVIEWS_LIST, {
          variables: { filter: { limit: page * ITEMS_PER_PAGE } },
        });

        setReviews({
          ...reviews,
          reviews: data.reviews,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, reviews);

  const deleteReview = async (id) => {
    const response = await deleteReviewRequest(id);

    if (response) {
      setReviews({
        ...reviews,
        totalCount: reviews.totalCount - 1,
        reviews: reviews.reviews.filter((review) => review._id !== id),
      });
      return response;
    }
  };

  return (
    <reviewContext.Provider
      value={{ reviews, review, error, getReview, loading, deleteReview }}
    >
      {children}
    </reviewContext.Provider>
  );
};
