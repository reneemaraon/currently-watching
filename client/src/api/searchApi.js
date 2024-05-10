import { gql } from '@apollo/client';

export const SEARCH_SHOWS = gql`
  query SearchShows($filter: FilterInput) {
    shows(filter: $filter) {
      totalCount
      shows {
        _id
        title
        synopsis
        tmdbPoster
        actingAverage
        plotAverage
        visualsAverage
        totalAverage
        reviewCount
        firstAirDate
        cast {
          _id
          name
          profileImage
          tmdbId
        }
      }
    }
  }
`;
