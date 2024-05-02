import { createContext, useContext, useEffect, useState } from 'react';
import {
  GET_SHOW_REVIEWS,
  GET_SHOW,
  POST_SHOW_WATCH_MUTATION,
  DELETE_SHOW_WATCH_MUTATION,
} from '../api/showsApi';
import { useMutation, useQuery } from '@apollo/client';
import findCursor from '../utils/getCursorFromList';

const ITEMS_PER_PAGE = 10;
const SORT_FIELD = 'createdAt';

const showDetailContext = createContext();

export const useShowDetailContext = () => {
  const context = useContext(showDetailContext);
  if (!context) throw new Error('Show Provider is missing');
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

  const [postShowWatchRequest, { error: watchError, data: watchedShowData }] =
    useMutation(POST_SHOW_WATCH_MUTATION);

  const [deleteShowWatchRequest, { error: deleteWatchError }] = useMutation(
    DELETE_SHOW_WATCH_MUTATION
  );

  const {
    loading,
    error,
    data: showData,
    refetch: refetchShow,
  } = useQuery(GET_SHOW, {
    variables: { id: showId },
  });

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

  const removeReviewShowReviews = (id) => {
    const reviewIndex = showReviews.showReviews.findIndex(
      (review) => review._id === id
    );
    if (reviewIndex !== -1) {
      const updatedShowReviews = showReviews.showReviews.filter(
        (review) => review._id !== id
      );
      setShowReviews((prevShowReviews) => ({
        ...prevShowReviews,
        totalCount: prevShowReviews.totalCount - 1,
        showReviews: updatedShowReviews,
      }));
    }
  };

  const postWatch = async () => {
    const { data } = await postShowWatchRequest({
      variables: {
        showId,
      },
    });
  };

  const deleteWatch = async () => {
    const { data } = await deleteShowWatchRequest({
      variables: {
        showId,
      },
    });
  };

  return (
    <showDetailContext.Provider
      value={{
        showId,
        setShowId,
        loading,
        error,
        show,
        showReviews,
        showReviewsLoading,
        showReviewsError,
        refetchShow,
        refetchShowReviews,
        loadNextPage,
        refreshList,
        removeReviewShowReviews,
        postWatch,
        deleteWatch,
        watchError,
        deleteWatchError,
      }}
    >
      {children}
    </showDetailContext.Provider>
  );
};
