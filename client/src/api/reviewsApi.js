import { gql } from "@apollo/client";
import { apiDelete, apiGet, apiPost } from "./apiCall";

export const GET_REVIEWS_LIST = gql`
  query ReviewsList($filter: FilterInput) {
    reviews(filter: $filter) {
      totalCount
      reviews {
        _id
        title
        body
        overallRating
        actingRating
        plotRating
        visualsRating
        createdAt
        commentCount
        likeCount
        show {
          _id
          title
          tmdbPoster
          tmdbBackdrop
        }
        user {
          _id
          name
          screenName
          profilePhotoUrl
        }
      }
    }
  }
`;

export const GET_REVIEW = gql`
  query Review($id: ID!) {
    review(id: $id) {
      _id
      title
      body
      overallRating
      actingRating
      plotRating
      visualsRating
      createdAt
      commentCount
      likeCount
      liked
      show {
        _id
        title
        tmdbPoster
        tmdbBackdrop
        reviewCount
        totalAverage
      }
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
    }
  }
`;

export const GET_REVIEW_COMMENTS = gql`
  query ReviewComments($id: ID!, $filter: FilterInput) {
    reviewComments(id: $id, filter: $filter) {
      totalCount
      comments {
        _id
        commentBody
        createdAt
        user {
          _id
          name
          screenName
          profilePhotoUrl
        }
      }
    }
  }
`;

export const POST_COMMENT_MUTATION = gql`
  mutation PostComment($reviewId: ID!, $commentBody: String!) {
    createComment(reviewId: $reviewId, commentBody: $commentBody) {
      _id
      commentBody
      createdAt
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
    }
  }
`;

export const POST_REVIEW_LIKE_MUTATION = gql`
  mutation PostLike($reviewId: ID!) {
    likeReview(reviewId: $reviewId) {
      _id
      title
      body
      overallRating
      actingRating
      plotRating
      visualsRating
      createdAt
      commentCount
      likeCount
      liked
      show {
        _id
        title
        tmdbPoster
        tmdbBackdrop
      }
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
    }
  }
`;

export const DELETE_REVIEW_LIKE_MUTATION = gql`
  mutation DeleteLike($reviewId: ID!) {
    deleteLike(reviewId: $reviewId) {
      _id
      title
      body
      overallRating
      actingRating
      plotRating
      visualsRating
      createdAt
      commentCount
      likeCount
      liked
      show {
        _id
        title
        tmdbPoster
        tmdbBackdrop
      }
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
    }
  }
`;

export const UPDATE_REVIEW_MUTATION = gql`
  mutation UpdateReview($reviewId: ID!, $body: ReviewUpdateBody!) {
    updateReview(reviewId: $reviewId, body: $body) {
      _id
      title
      body
      overallRating
      actingRating
      plotRating
      visualsRating
      createdAt
      commentCount
      likeCount
      liked
      show {
        _id
        title
        tmdbPoster
        tmdbBackdrop
      }
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
    }
  }
`;

export const GET_REVIEW_TO_UPDATE = gql`
  query Review($id: ID!) {
    review(id: $id) {
      _id
      title
      body
      overallRating
      actingRating
      plotRating
      visualsRating
      show {
        _id
        title
        tmdbPoster
        tmdbBackdrop
        actingAverage
        plotAverage
        visualsAverage
        totalAverage
        synopsis
        cast {
          name
        }
      }
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
    }
  }
`;

export const getReviewsRequest = async (params) => await apiGet(`/reviews/`);

export const getReviewRequest = async (id) => await apiGet(`/reviews/` + id);

export const postReviewRequest = async (payload) =>
  await apiPost("/reviews", payload);

export const postCommentRequest = async (id, payload) =>
  await apiPost(`/reviews/${id}/comments`, payload);

export const deleteCommentRequest = async (reviewId, commentId) =>
  await apiDelete(`/reviews/${reviewId}/comments/${commentId}`);

export const deleteReviewRequest = async (reviewId) =>
  await apiDelete(`/reviews/${reviewId}`);
