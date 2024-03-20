import { gql } from '@apollo/client';
import axios from 'axios';

export const GET_REVIEWS_LIST = gql`
  query ReviewsList {
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

export const GET_REVIEW_COMMENTS = gql`
  query ReviewComments($id: ID!, $filter: FilterInput) {
    reviewComments(id: $id, filter: $filter) {
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

export const getReviewsRequest = async (params) =>
  await axios.get('/api/v1/reviews/');

export const getReviewRequest = async (id) =>
  await axios.get('/api/v1/reviews/' + id);

export const postReviewRequest = async (payload) =>
  await axios.post('/api/v1/reviews/', payload);

export const postCommentRequest = async (id, payload) =>
  await axios.post(`/api/v1/reviews/${id}/comments`, payload);
