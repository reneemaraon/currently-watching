import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useToast } from '../../context/ToastContext';
import { useReviewsContext } from '../../context/ReviewContext';
import ReviewForm from '../ReviewForm/ReviewForm';
import { useCreateReviewContext } from '../../context/CreateReviewContext';

const CreateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    state,
    setField,
    setError,
    createdReview,
    setCreatedReview,
    loading,
    error,
    postReview,
    createError,
  } = useCreateReviewContext();

  const { refreshList } = useReviewsContext();

  const { showToast } = useToast();

  useEffect(() => {
    if (createError) {
      showToast(createError, 'error');
    }
  }, [createError]);

  useEffect(() => {
    if (createdReview) {
      showToast('Your review is successfully created.', 'success');
      setCreatedReview(null);
      refreshList();
      navigate(`/reviews/${createdReview._id}`);
    }
  }, [createdReview]);

  useEffect(() => {
    if (error && state.showId) {
      console.log(error);
      showToast('Something went wrong. Please try again.', 'error');
    }
  }, [error]);

  useEffect(() => {
    setField('showId', id);
  }, [id]);

  const handleCancel = () => {
    navigate('/reviews');
  };

  return (
    <ReviewForm
      state={state}
      setField={setField}
      setError={setError}
      onSubmit={postReview}
      onCancel={handleCancel}
    />
  );
};

export default CreateReview;
