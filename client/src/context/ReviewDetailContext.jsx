import { createContext, useContext, useEffect, useState } from 'react';
import {
  GET_REVIEW,
  GET_REVIEW_COMMENTS,
  postCommentRequest,
} from '../api/reviewsApi';
import { useQuery } from '@apollo/client';

const reviewDetailContext = createContext();

export const useReviewDetailContext = () => {
  const context = useContext(reviewDetailContext);
  if (!context) throw new Error('Review Detail Provider is missing');
  return context;
};

export const ReviewDetailProvider = ({ children }) => {
  const [review, setReview] = useState(null);
  const [reviewId, setReviewId] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState('');
  const [postLoading, setPostLoading] = useState(false);
  const { loading, error, data, refetch } = useQuery(GET_REVIEW, {
    variables: { id: reviewId },
  });

  const {
    loading: commentsLoading,
    error: commentsError,
    data: commentsData,
    refetch: refetchComments,
  } = useQuery(GET_REVIEW_COMMENTS, {
    variables: { id: reviewId, filter: { limit: 5 } },
  });

  const postComment = async () => {
    setPostLoading(true);
    try {
      const response = await postCommentRequest(reviewId, { commentBody });
      if (response) {
        refetchComments();
        setCommentBody('');
      }
    } catch (error) {
      console.log(error);
    }
    setPostLoading(false);
  };

  useEffect(() => {
    if (reviewId) {
      refetch();
      refetchComments();
    }
  }, [reviewId]);

  useEffect(() => {
    if (data) {
      setReview(data.review);
    }
  }, [data]);

  useEffect(() => {
    if (commentsData) {
      setComments(commentsData.reviewComments);
    }
  }, [commentsData]);

  return (
    <reviewDetailContext.Provider
      value={{
        commentsLoading,
        postLoading,
        commentsError,
        comments,
        commentBody,
        setCommentBody,
        postComment,
        setReview,
        setReviewId,
        review,
        error,
        refetch,
        loading,
      }}
    >
      {children}
    </reviewDetailContext.Provider>
  );
};
