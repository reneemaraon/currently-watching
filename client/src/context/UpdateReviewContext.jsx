import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from 'react';
import { GET_SHOW } from '../api/showsApi';
import { useMutation, useQuery } from '@apollo/client';
import {
  GET_REVIEW_TO_UPDATE,
  UPDATE_REVIEW_MUTATION,
} from '../api/reviewsApi';
import formReducer from '../utils/formReducer';
import stripHtmlTags from '../utils/stripTags';

const updateReviewContext = createContext();

const initialState = {
  showId: null,
  actingRating: null,
  show: null,
  plotRating: null,
  visualsRating: null,
  title: '',
  body: '',
  errors: {
    title: null,
    body: null,
    actingRating: null,
    plotRating: null,
    visualsRating: null,
  },
};

export const useUpdateReviewContext = () => {
  const context = useContext(updateReviewContext);
  if (!context) throw new Error('Update Review Provider is missing');
  return context;
};

export const UpdateReviewContext = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [reviewId, setReviewId] = useState(null);
  const [review, setReview] = useState(null);
  const [updatedReview, setUpdatedReview] = useState(null);

  const {
    loading,
    error,
    data: reviewData,
    refetch: refetchReview,
  } = useQuery(GET_REVIEW_TO_UPDATE, {
    variables: { id: reviewId },
  });

  const [
    updateReviewRequest,
    { error: updateError, loading: updateLoading, data: updateData },
  ] = useMutation(UPDATE_REVIEW_MUTATION);

  useEffect(() => {
    if (reviewId) {
      refetchReview();
    }
  }, [reviewId]);

  useEffect(() => {
    if (updateData) {
      resetForm();
      setUpdatedReview(updateData.updateReview);
    }
  }, [updateData]);

  useEffect(() => {
    if (reviewData) {
      console.log('hi');
      const {
        actingRating,
        plotRating,
        visualsRating,
        title,
        body,
        show,
        show: { _id: showId },
      } = reviewData.review;
      dispatch({
        type: 'SET_FORM_VALUES',
        formValues: {
          ...initialState,
          showId,
          actingRating,
          plotRating,
          visualsRating,
          title,
          body,
          show,
        },
      });
      setReview(reviewData.review);
    }
  }, [reviewData]);

  const setField = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const setError = (field, error) => {
    dispatch({ type: 'SET_ERROR', field, error });
  };

  const validateForm = () => {
    let isValid = true;

    if (!state.title.trim()) {
      setError('title', 'Please enter a headline');
      isValid = false;
    }

    if (!stripHtmlTags(state.body).trim()) {
      setError('body', 'Please enter a body');
      isValid = false;
    }

    if (!state.actingRating) {
      setError('actingRating', 'Please enter a Acting rating');
      isValid = false;
    }

    if (!state.plotRating) {
      setError('plotRating', 'Please enter a Plot rating');
      isValid = false;
    }

    if (!state.visualsRating) {
      setError('visualsRating', 'Please enter a Visuals rating');
      isValid = false;
    }

    return isValid;
  };

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM', initialState });
  };

  const updateReview = async () => {
    if (!validateForm()) {
      return;
    }

    const payload = {};

    for (const [field, value] of Object.entries(state)) {
      if (review[field] && review[field] != state[field]) {
        payload[field] = value;
      }
    }
    await updateReviewRequest({
      variables: { reviewId, body: payload },
    });
  };

  return (
    <updateReviewContext.Provider
      value={{
        state,
        setField,
        updateError,
        updateLoading,
        updatedReview,
        setUpdatedReview,
        setError,
        loading,
        error,
        updateReview,
        setReviewId,
      }}
    >
      {children}
    </updateReviewContext.Provider>
  );
};
