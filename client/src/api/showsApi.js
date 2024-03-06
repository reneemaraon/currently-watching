import axios from 'axios';
import { gql } from '@apollo/client';

export const getShowsRequest = async (params) =>
  await axios.get('/api/v1/shows');

export const getShowRequest = async (id) =>
  await axios.get('/api/v1/shows/' + id);

export const GET_SHOW_REVIEWS = gql`
  query GetShowReviews($id: ID!, $filter: FilterInput) {
    showReviews(id: $id, filter: $filter) {
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
        profilePhotoUrl
      }
    }
  }
`;
