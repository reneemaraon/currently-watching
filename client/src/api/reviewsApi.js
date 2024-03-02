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
      show {
        _id
        title
        tmdbPoster
      }
      user {
        _id
        name
        screenName
      }
    }
  }
`;

export const getReviewsRequest = async (params) =>
  await axios.get('/api/v1/reviews/');

export const getReviewRequest = async (id) =>
  await axios.get('/api/v1/reviews/' + id);
