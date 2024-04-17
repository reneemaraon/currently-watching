import { createContext, useContext, useEffect, useState } from "react";
import { getReviewRequest, GET_REVIEWS_LIST } from "../api/reviewsApi";
import { useQuery } from "@apollo/client";
import findCursor from "../utils/getCursorFromList";

const ITEMS_PER_PAGE = 20;
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
    setCursor(findCursor(reviews.reviews, SORT_FIELD));
  };

  useEffect(() => {
    if (data) {
      const { reviews: dataReviews } = data.reviews;
      const { reviews: currentReviews } = reviews;
      if (
        findCursor(dataReviews, SORT_FIELD) !=
        findCursor(currentReviews, SORT_FIELD)
      ) {
        setReviews((prevReviews) => ({
          ...prevReviews,
          totalCount: data.reviews.totalCount,
          reviews: [...prevReviews.reviews, ...data.reviews.reviews],
        }));
      }
    }
  }, [data]);

  const removeReviewFromList = (id) => {
    const reviewIndex = reviews.reviews.findIndex(
      (review) => review._id === id
    );
    if (reviewIndex !== -1) {
      const updatedReviews = reviews.reviews.filter(
        (review) => review._id !== id
      );
      setReviews({
        ...reviews,
        totalCount: reviews.totalCount - 1,
        reviews: updatedReviews,
      });
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
        removeReviewFromList,
        loadNextPage,
        refreshList,
      }}
    >
      {children}
    </reviewContext.Provider>
  );
};
