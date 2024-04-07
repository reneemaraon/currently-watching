import { createContext, useContext, useEffect, useState } from "react";
import { getShowRequest, GET_SHOW_REVIEWS, GET_SHOW } from "../api/showsApi";
import { useQuery } from "@apollo/client";
import { deleteReviewRequest } from "../api/reviewsApi";
import findCursor from "../utils/getCursorFromList";

const ITEMS_PER_PAGE = 5;
const SORT_FIELD = "createdAt";

const showDetailContext = createContext();

export const useShowDetailContext = () => {
  const context = useContext(showDetailContext);
  if (!context) throw new Error("Show Provider is missing");
  return context;
};

export const ShowDetailProvider = ({ children }) => {
  const [show, setShow] = useState(null);
  const [showId, setShowId] = useState(null);
  const [showReviews, setShowReviews] = useState({
    totalCount: 0,
    showReviews: [],
  });
  const [cursor, setCursor] = useState(new Date());
  const {
    loading: showReviewsLoading,
    error: showReviewsError,
    data: showReviewsData,
    refetch: refetchShowReviews,
  } = useQuery(GET_SHOW_REVIEWS, {
    variables: {
      id: showId,
      filter: {
        limit: ITEMS_PER_PAGE,
        cursorField: SORT_FIELD,
        cursorValue: cursor,
      },
    },
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
      setShowReviews({
        ...showReviews,
        totalCount: showReviews.totalCount - 1,
        reviews: showReviews.reviews.filter((review) => review._id !== id),
      });
      setShow(() => ({
        ...show,
        reviewCount: show.reviewCount - 1,
      }));
      return response;
    }
  };

  useEffect(() => {
    if (showReviewsData) {
      const { reviews: dataShowReviews } = showReviewsData.showReviews;
      const { showReviews: currentShowReviews } = showReviews;

      if (
        findCursor(dataShowReviews, SORT_FIELD) !=
        findCursor(currentShowReviews, SORT_FIELD)
      ) {
        const { totalCount, showReviews } = showReviewsData.showReviews;
        setShowReviews((prevReviews) => ({
          totalCount,
          showReviews: [...prevReviews.showReviews, ...dataShowReviews],
        }));
      }
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

  const updateCursor = () => {
    setCursor(findCursor(showReviews.showReviews, SORT_FIELD));
  };

  const loadNextPage = () => {
    updateCursor();
    refetchShowReviews();
  };

  const refreshList = () => {
    setShowReviews({
      totalCount: 0,
      showReviews: [],
    });
    setCursor(null);
    refetchShowReviews();
  };

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
        loadNextPage,
        refreshList,
      }}
    >
      {children}
    </showDetailContext.Provider>
  );
};
