import { createContext, useContext, useEffect, useState } from 'react';
import {
  GET_GENRES_SHOWS_LIST,
  GET_GENRES_SHOWS_LIST_SIMPLE,
  GET_SHOWS_LIST,
} from '../api/showsApi';
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
  const [romanceShows, setRomanceShows] = useState({
    totalCount: 0,
    shows: [],
  });

  const {
    loading: showsLoading,
    error: showsError,
    data: showsData,
    refetch: refetchResults,
  } = useQuery(GET_GENRES_SHOWS_LIST, {
    variables: {
      filter: { limit: 10, cursorField: 'popularity' },
      excluding: ['Reality'],
      has: ['Drama'],
    },
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

  const {
    loading: romanceLoading,
    error: romanceError,
    data: romanceData,
    refetch: refetchRomance,
  } = useQuery(GET_GENRES_SHOWS_LIST_SIMPLE, {
    variables: {
      filter: { limit: 20, cursorField: 'popularity' },
      has: ['Drama', 'Comedy'],
      excluding: ['Reality', 'Crime'],
    },
  });

  useEffect(() => {
    if (showsData) {
      setShows(showsData.showsOfGenres);
    }
  }, [showsData]);

  useEffect(() => {
    if (romanceData) {
      setRomanceShows(romanceData.showsOfGenres);
    }
  }, [romanceData]);

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
        romanceLoading,
        romanceError,
        romanceShows,
      }}
    >
      {children}
    </homepageContext.Provider>
  );
};
