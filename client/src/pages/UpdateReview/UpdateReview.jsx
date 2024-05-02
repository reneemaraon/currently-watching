import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useToast } from '../../context/ToastContext';
import { useReviewsContext } from '../../context/ReviewContext';
import ReviewForm from '../ReviewForm/ReviewForm';
import { useCreateReviewContext } from '../../context/CreateReviewContext';
import { useUpdateReviewContext } from '../../context/UpdateReviewContext';
import { useShowDetailContext } from '../../context/ShowDetailContext';
import FullPageLoading from '../Common/FullPageLoading';

const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    state,
    setField,
    setError,
    updatedReview,
    updateLoading,
    setUpdatedReview,
    error,
    updateReview,
    updateError,
    setReviewId,
    loading,
  } = useUpdateReviewContext();

  const { refreshList } = useReviewsContext();

  const { refetchShow } = useShowDetailContext();

  const { showToast } = useToast();

  useEffect(() => {
    if (updateError) {
      showToast(updateError, 'error');
    }
  }, [updateError]);

  useEffect(() => {
    if (updatedReview) {
      showToast('Your review is successfully updated.', 'success');
      navigate(`/reviews/${updatedReview._id}`);
      setUpdatedReview(null);
      refreshList();
      refetchShow();
    }
  }, [updatedReview]);

  useEffect(() => {
    if (error && state.showId) {
      console.log(error);
      showToast('Something went wrong. Please try again.', 'error');
    }
  }, [error]);

  useEffect(() => {
    setReviewId(id);
  }, [id]);

  const handleCancel = () => {
    navigate('/reviews');
  };

  if (updateLoading || loading || !state.body) {
    return <FullPageLoading />;
  }
  return (
    <ReviewForm
      state={state}
      setField={setField}
      setError={setError}
      onSubmit={updateReview}
      onCancel={handleCancel}
    />
  );
};

export default UpdateReview;
