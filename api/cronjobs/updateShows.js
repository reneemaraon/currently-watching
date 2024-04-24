const axios = require('axios');
const Show = require('../models/show');
const { addCast } = require('./addCast');

const fieldMap = {
  title: 'name',
  overview: 'overview',
  firstAirDate: 'first_air_date',
  lastAirDate: 'last_air_date',
  genres: 'genres',
  numberOfSeasons: 'number_of_seasons',
  numberOfEpisodes: 'number_of_episodes',
  popularity: 'popularity',
  originCountry: 'origin_country',
  tmdbPoster: 'poster_path',
  tmdbBackdrop: 'backdrop_path',
  originalName: 'original_name',
};

const updateShows = async () => {
  try {
    const shows = await Show.find();

    for (const show of shows) {
      const tmdbShow = (
        await axios.get(
          `https://api.themoviedb.org/3/tv/${show.tmdbId}?api_key=4f7e5720a1935eda7e3414ef894f7b65&language=en-US`
        )
      ).data;

      for (const [dbField, tmdbKey] of Object.entries(fieldMap)) {
        if (tmdbShow.hasOwnProperty(tmdbKey)) {
          show[dbField] = tmdbShow[tmdbKey];
        }
      }

      // update cast
      await addCast(show._id);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateShows;
