import { gql } from "@apollo/client";

export const GET_USER_REVIEWS = gql`
  query GetUserReviews($id: ID!, $filter: FilterInput) {
    userReviews(id: $id, filter: $filter) {
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

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      _id
      name
      screenName
      twitterId
      profilePhotoUrl
      joinedDate
    }
  }
`;
