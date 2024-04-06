import axios from "axios";
import { gql } from "@apollo/client";

export const getShowsRequest = async (params) =>
  await axios.get("/api/v1/shows");

export const getShowRequest = async (id) =>
  await axios.get("/api/v1/shows/" + id);

export const GET_SHOW_REVIEWS = gql`
  query GetShowReviews($id: ID!, $filter: FilterInput) {
    showReviews(id: $id, filter: $filter) {
      totalCount
      reviews {
        _id
        title
        body
        overallRating
        actingRating
        plotRating
        visualsRating
        commentCount
        createdAt
        likeCount
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
  }
`;

export const GET_SHOW = gql`
  query GetShow($id: ID!) {
    show(id: $id) {
      _id
      title
      synopsis
      tmdbPoster
      tmdbBackdrop
      cast {
        _id
        name
      }
      genres {
        name
      }
      numberOfSeasons
      numberOfEpisodes
      reviewCount
      actingAverage
      plotAverage
      visualsAverage
      totalAverage
    }
  }
`;
