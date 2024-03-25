import { createContext, useContext, useEffect, useState } from 'react';
import {
  GET_REVIEW,
  GET_REVIEW_COMMENTS,
  POST_COMMENT_MUTATION,
  POST_REVIEW_LIKE_MUTATION,
  DELETE_REVIEW_LIKE_MUTATION,
  deleteCommentRequest,
} from '../api/reviewsApi';
import { useQuery, useMutation } from '@apollo/client';

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

  const [postCommentRequest, { loading: postLoading, error: postError }] =
    useMutation(POST_COMMENT_MUTATION);

  const [postReviewLikeRequest, { error: likeError, data: likedReviewData }] =
    useMutation(POST_REVIEW_LIKE_MUTATION);

  const [deleteReviewLikeRequest, { error: deleteLikeError }] = useMutation(
    DELETE_REVIEW_LIKE_MUTATION
  );

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
    try {
      const response = await postCommentRequest({
        variables: {
          reviewId,
          commentBody,
        },
      });

      if (response) {
        const newComment = response.data.createComment;
        setComments(() => [newComment, ...comments]);
        setReview({
          ...review,
          commentCount: review.commentCount + 1,
        });

        setCommentBody('');
      }
    } catch (error) {
      console.log('error');
    }
  };

  const deleteComment = async (id) => {
    const response = await deleteCommentRequest(reviewId, id);

    if (response) {
      setComments(() => comments.filter((comment) => comment._id !== id));
      setReview((prevReview) => ({
        ...prevReview,
        commentCount: prevReview.commentCount - 1,
      }));
      return response;
    }
  };

  const postLike = async () => {
    const { data } = await postReviewLikeRequest({
      variables: { reviewId },
    });
  };

  const deleteLike = async () => {
    const { data } = await deleteReviewLikeRequest({
      variables: { reviewId },
    });
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
        deleteComment,
        setReview,
        setReviewId,
        review,
        error,
        refetch,
        loading,
        postLike,
        deleteLike,
        heartError: likeError || deleteLikeError,
        likedReviewData,
      }}
    >
      {children}
    </reviewDetailContext.Provider>
  );
};
