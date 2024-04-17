import { createContext, useContext, useEffect, useState } from 'react';
import { GET_SHOWS_LIST } from '../api/showsApi';
import { GET_REVIEWS_LIST } from '../api/reviewsApi';
import { useQuery } from '@apollo/client';

const homepageContext = createContext();

export const useHomepageContext = () => {
  const context = useContext(homepageContext);
  if (!context) throw new Error('Show Provider is missing');
  return context;
};

export const HomepageProvider = ({ children }) => {
  const [trendingReviews, setTrendingReviews] = useState({
    totalCount: 0,
    reviews: [],
  });
  const [shows, setShows] = useState({
    totalCount: 0,
    shows: [],
  });
  const [newShows, setNewShows] = useState({
    totalCount: 0,
    shows: [],
  });

  const {
    loading: showsLoading,
    error: showsError,
    data: showsData,
    refetch: refetchResults,
  } = useQuery(GET_SHOWS_LIST, {
    variables: { filter: { limit: 10, cursorField: 'popularity' } },
  });

  const { data: trendingReviewsData, refetch: refetchTrendingReviews } =
    useQuery(GET_REVIEWS_LIST, {
      variables: {
        filter: { limit: 10, cursorField: 'likeCount', ascending: false },
      },
    });

  const {
    loading: newShowsLoading,
    error: newShowsError,
    data: newShowsData,
    refetch: refetchNewShows,
  } = useQuery(GET_SHOWS_LIST, {
    variables: {
      filter: { limit: 10, cursorField: 'firstAirDate', ascending: false },
    },
  });

  useEffect(() => {
    if (showsData) {
      setShows(showsData.shows);
    }
  }, [showsData]);

  useEffect(() => {
    if (newShowsData) {
      setNewShows(newShowsData.shows);
    }
  }, [newShowsData]);

  useEffect(() => {
    if (trendingReviewsData) {
      setTrendingReviews(trendingReviewsData.reviews);
    }
  }, [trendingReviewsData]);

  return (
    <homepageContext.Provider
      value={{
        showsLoading,
        showsError,
        shows,
        refetchResults,
        trendingReviews,
        newShows,
      }}
    >
      {children}
    </homepageContext.Provider>
  );
};
