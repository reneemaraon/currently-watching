import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from 'react';
import { GET_SHOW } from '../api/showsApi';
import { useQuery } from '@apollo/client';
import { postReviewRequest } from '../api/reviewsApi';
import formReducer from '../utils/formReducer';
import stripHtmlTags from '../utils/stripTags';

const createReviewContext = createContext();

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

export const useCreateReviewContext = () => {
  const context = useContext(createReviewContext);
  if (!context) throw new Error('Show Provider is missing');
  return context;
};

export const CreateReviewContext = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [show, setShow] = useState(null);
  const [createdReview, setCreatedReview] = useState(null);
  const [createError, setCreateError] = useState(null);
  const [createLoading, setCreateLoading] = useState(false);

  const {
    loading,
    error,
    data: showData,
    refetch: refetchShow,
  } = useQuery(GET_SHOW, {
    variables: { id: state.showId },
  });

  useEffect(() => {
    if (showData) {
      dispatch({ type: 'SET_FIELD', field: 'show', value: showData.show });
    }
  }, [showData]);

  useEffect(() => {
    if (state.showId) {
      refetchShow();
    }
  }, [state.showId]);

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

  const postReview = async () => {
    console.log(state);
    setCreateError(null);
    setCreateLoading(true);
    if (!validateForm()) {
      return;
    }

    const payload = {
      show: state.showId,
      actingRating: state.actingRating,
      plotRating: state.plotRating,
      visualsRating: state.visualsRating,
      title: state.title,
      body: state.body,
    };
    try {
      const response = await postReviewRequest(payload);
      console.log(response.data);
      setCreatedReview(response.data);
      resetForm();
    } catch (error) {
      setCreateError(error.response.data.message);
      console.log(error);
    }
    setCreateLoading(false);
  };

  return (
    <createReviewContext.Provider
      value={{
        state,
        setField,
        createError,
        createLoading,
        createdReview,
        setCreatedReview,
        setError,
        loading,
        error,
        postReview,
      }}
    >
      {children}
    </createReviewContext.Provider>
  );
};
