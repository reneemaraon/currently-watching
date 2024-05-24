import { gql } from "@apollo/client";

export const GET_USER_LISTS = gql`
  query GetUserLists($user: ID!, $filter: FilterInput) {
    userLists(user: $user, filter: $filter) {
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
      totalCount
      lists {
        createdAt
        updatedAt
        name
        _id
        user {
          _id
          name
          screenName
          profilePhotoUrl
        }
        items {
          order
          show {
            _id
            title
            totalAverage
            reviewCount
            tmdbPoster
            tmdbBackdrop
            firstAirDate
            myReview {
              overallRating
              actingRating
              plotRating
              visualsRating
            }
          }
        }
      }
    }
  }
`;

export const UPDATE_LIST_MUTATION = gql`
  mutation UpdateList($listId: ID!, $body: ListCreateBody!) {
    updateList(listId: $listId, body: $body) {
      createdAt
      updatedAt
      name
      _id
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
      items {
        order
        show {
          _id
          title
          totalAverage
          reviewCount
          tmdbPoster
          tmdbBackdrop
          firstAirDate
          myReview {
            overallRating
            actingRating
            plotRating
            visualsRating
          }
        }
      }
    }
  }
`;

export const CREATE_LIST_MUTATION = gql`
  mutation CreateList($body: ListCreateBody!) {
    createList(body: $body) {
      createdAt
      updatedAt
      name
      _id
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
      items {
        order
        show {
          _id
          title
          totalAverage
          reviewCount
          tmdbPoster
          tmdbBackdrop
          firstAirDate
          myReview {
            overallRating
            actingRating
            plotRating
            visualsRating
          }
        }
      }
    }
  }
`;

export const DELETE_LIST_MUTATION = gql`
  mutation DeleteList($listId: ID!) {
    deleteList(listId: $listId) {
      createdAt
      updatedAt
      name
      _id
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
      items {
        order
        show {
          _id
          title
          totalAverage
          reviewCount
          tmdbPoster
          tmdbBackdrop
          firstAirDate
          myReview {
            overallRating
            actingRating
            plotRating
            visualsRating
          }
        }
      }
    }
  }
`;

export const GET_LIST = gql`
  query GetList($id: ID!) {
    list(id: $id) {
      createdAt
      updatedAt
      name
      _id
      user {
        _id
        name
        screenName
        profilePhotoUrl
      }
      items {
        order
        show {
          _id
          title
          totalAverage
          reviewCount
          tmdbPoster
          tmdbBackdrop
          firstAirDate
          myReview {
            overallRating
            actingRating
            plotRating
            visualsRating
          }
        }
      }
    }
  }
`;
