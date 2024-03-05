import { gql } from '@apollo/client';

export const SEARCH_SHOWS = gql`
  query SearchShows($filter: FilterInput) {
    shows(filter: $filter) {
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
`;
