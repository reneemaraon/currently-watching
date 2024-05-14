import { gql } from "@apollo/client";

export const GET_MY_LISTS = gql`
  query GetMyLists($filter: FilterInput) {
    myLists(filter: $filter) {
      totalCount
      lists {
        createdAt
        name
        _id
        user {
          _id
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
      name
      _id
      user {
        _id
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
      name
      _id
      user {
        _id
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
      name
      _id
      user {
        _id
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
