import { gql } from '@apollo/client';

export const GET_MY_LISTS = gql`
  query GetMyLists($filter: FilterInput) {
    myLists(filter: $filter) {
      totalCount
      lists {
        createdAt
        name
        _id
        items {
          order
          show {
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
