import { createContext, useContext, useEffect, useState } from "react";
import { GET_USER, GET_USER_REVIEWS } from "../api/userApi";
import { useQuery, useMutation } from "@apollo/client";
import findCursor from "../utils/getCursorFromList";

const ITEMS_PER_PAGE = 3;
const SORT_FIELD = "createdAt";

const userDetailContext = createContext();

export const useUserDetailContext = () => {
  const context = useContext(userDetailContext);
  if (!context) throw new Error("User Detail Provider is missing");
  return context;
};

export const UserDetailProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userReviews, setUserReviews] = useState({
    totalCount: 0,
    reviews: [],
  });

  const [cursor, setCursor] = useState(new Date());

  const { loading, error, data, refetch } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  const {
    loading: loadingReviews,
    data: reviewsData,
    refetch: refetchReviews,
  } = useQuery(GET_USER_REVIEWS, {
    variables: {
      id: userId,
      filter: {
        limit: ITEMS_PER_PAGE,
        cursorField: SORT_FIELD,
        cursorValue: cursor,
      },
    },
  });

  const updateCursor = () => {
    setCursor(findCursor(userReviews.reviews, SORT_FIELD));
  };

  const loadNextPage = () => {
    updateCursor();
    refetchReviews();
  };

  const refreshList = () => {
    setUserReviews({
      totalCount: 0,
      reviews: [],
    });
    setCursor(null);
    refetchReviews();
  };

  useEffect(() => {
    if (userId) {
      refetch();
      refreshList();
    }
  }, [userId]);

  useEffect(() => {
    if (data) {
      setUser(data.user);
    }
  }, [data]);

  useEffect(() => {
    if (reviewsData) {
      const { reviews: dataReviews, totalCount } = reviewsData.userReviews;
      const { reviews: currentReviews } = userReviews;
      if (
        findCursor(currentReviews, SORT_FIELD) !=
        findCursor(dataReviews, SORT_FIELD)
      ) {
        setUserReviews((prevReviews) => ({
          totalCount,
          reviews: [...prevReviews.reviews, ...dataReviews],
        }));
      }
    }
  }, [reviewsData]);

  const removeReviewFromUserReviewList = (id) => {
    const reviewIndex = userReviews.reviews.findIndex(
      (review) => review._id === id
    );
    if (reviewIndex !== -1) {
      const updatedReviews = userReviews.reviews.filter(
        (review) => review._id !== id
      );
      setUserReviews({
        ...userReviews,
        totalCount: userReviews.totalCount - 1,
        reviews: updatedReviews,
      });
    }
  };

  return (
    <userDetailContext.Provider
      value={{
        user,
        error,
        loading,
        userReviews,
        setUserId,
        loadNextPage,
        refetch,
        loadingReviews,
        removeReviewFromUserReviewList,
      }}
    >
      {children}
    </userDetailContext.Provider>
  );
};
