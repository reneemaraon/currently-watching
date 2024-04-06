import { createContext, useContext, useEffect, useState } from "react";
import {
  getReviewRequest,
  GET_REVIEWS_LIST,
  deleteReviewRequest,
} from "../api/reviewsApi";
import { useQuery } from "@apollo/client";

const ITEMS_PER_PAGE = 2;
const SORT_FIELD = "createdAt";

const reviewContext = createContext();

export const useReviewsContext = () => {
  const context = useContext(reviewContext);
  if (!context) throw new Error("Review Provider is missing");
  return context;
};

export const ReviewsProvider = ({ children }) => {
  const [review, setReview] = useState(null);
  const [reviews, setReviews] = useState({
    totalCount: 0,
    reviews: [],
  });
  const [cursor, setCursor] = useState(new Date());
  const { loading, error, data, refetch } = useQuery(GET_REVIEWS_LIST, {
    variables: {
      filter: {
        limit: ITEMS_PER_PAGE,
        cursorField: SORT_FIELD,
        cursorValue: cursor,
      },
    },
  });

  const getReview = async (id) => {
    try {
      const res = await getReviewRequest(id);
      setReview(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCursor = () => {
    setCursor(findCursor(reviews));
  };

  const findCursor = (list) => {
    if (list.length > 0) {
      return list[list.length - 1][SORT_FIELD];
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (data) {
      const { reviews: dataReviews } = data.reviews;
      const { reviews: currentReviews } = reviews;
      if (findCursor(dataReviews) != findCursor(currentReviews)) {
        setReviews((prevReviews) => ({
          ...prevReviews,
          totalCount: data.reviews.totalCount,
          cursorValue: data.cursorValue,
          reviews: [...prevReviews.reviews, ...data.reviews.reviews],
        }));
      }
    }
  }, [data]);

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

  const loadNextPage = () => {
    updateCursor();
    refetch();
  };

  const refreshList = () => {
    setReviews({
      totalCount: 0,
      reviews: [],
    });
    setCursor(null);
    refetch();
  };

  return (
    <reviewContext.Provider
      value={{
        reviews,
        review,
        error,
        getReview,
        loading,
        deleteReview,
        loadNextPage,
        refreshList,
      }}
    >
      {children}
    </reviewContext.Provider>
  );
};
