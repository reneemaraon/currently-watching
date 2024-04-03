import { gql } from '@apollo/client';

export const SEARCH_SHOWS = gql`
  query SearchShows($filter: FilterInput) {
    shows(filter: $filter) {
      totalCount
      totalPages
      currentPage
      shows {
        _id
        title
        synopsis
        tmdbPoster
        cast {
          _id
          name
        }
      }
    }
  }
`;
