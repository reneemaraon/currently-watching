import { createContext, useContext, useEffect, useState } from "react";
import {
  GET_REVIEW,
  GET_REVIEW_COMMENTS,
  POST_COMMENT_MUTATION,
  POST_REVIEW_LIKE_MUTATION,
  DELETE_REVIEW_LIKE_MUTATION,
  deleteCommentRequest,
} from "../api/reviewsApi";
import { useQuery, useMutation } from "@apollo/client";
import findCursor from "../utils/getCursorFromList";

const ITEMS_PER_PAGE = 5;
const SORT_FIELD = "createdAt";

const reviewDetailContext = createContext();

export const useReviewDetailContext = () => {
  const context = useContext(reviewDetailContext);
  if (!context) throw new Error("Review Detail Provider is missing");
  return context;
};

export const ReviewDetailProvider = ({ children }) => {
  const [review, setReview] = useState(null);
  const [reviewId, setReviewId] = useState(null);

  const [comments, setComments] = useState({
    comments: [],
    totalCount: 0,
  });
  const [commentBody, setCommentBody] = useState("");
  const [cursor, setCursor] = useState(new Date());

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
    variables: {
      id: reviewId,
      filter: {
        limit: ITEMS_PER_PAGE,
        cursorField: SORT_FIELD,
        cursorValue: cursor,
      },
    },
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
        setComments((prevComments) => ({
          ...prevComments,
          totalCount: comments.totalCount + 1,
          comments: [newComment, ...prevComments.comments],
        }));

        setCommentBody("");
      }
    } catch (error) {
      console.log("error");
    }
  };

  const deleteComment = async (id) => {
    const response = await deleteCommentRequest(reviewId, id);

    if (response) {
      setComments({
        ...comments,
        totalCount: comments.totalCount - 1,
        comments: comments.comments.filter((comment) => comment._id !== id),
      });

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

  const updateCursor = () => {
    setCursor(findCursor(comments.comments, SORT_FIELD));
  };

  const loadNextPage = () => {
    updateCursor();
    refetchComments();
  };

  const refreshList = () => {
    setComments({
      totalCount: 0,
      comments: [],
    });
    setCursor(null);
    refetchComments();
  };

  useEffect(() => {
    if (reviewId) {
      refetch();
      refreshList();
    }
  }, [reviewId]);

  useEffect(() => {
    if (data) {
      setReview(data.review);
    }
  }, [data]);

  useEffect(() => {
    if (commentsData) {
      const { comments: dataComments, totalCount } =
        commentsData.reviewComments;
      const { comments: currentComments } = comments;
      if (
        findCursor(currentComments, SORT_FIELD) !=
        findCursor(dataComments, SORT_FIELD)
      ) {
        setComments((prevComments) => ({
          totalCount,
          comments: [...prevComments.comments, ...dataComments],
        }));
      }
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
        refreshList,
        loadNextPage,
        deleteLike,
        heartError: likeError || deleteLikeError,
        likedReviewData,
      }}
    >
      {children}
    </reviewDetailContext.Provider>
  );
};
