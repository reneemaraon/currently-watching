const axios = require('axios');
const Show = require('../models/show');
const { addCast } = require('./addCast');

const fieldMap = {
  title: 'name',
  synopsis: 'overview',
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
          if (dbField == 'genres') {
            for (const genre of tmdbShow.genres) {
              const existingGenreEntry = show.genres.find(
                (entry) => entry.id == genre.id
              );
              if (!existingGenreEntry) {
                show.genres.addToSet(genre);
              }
            }
          } else if (dbField == 'lastAirDate' || dbField == 'firstAirDate') {
            if (tmdbShow[tmdbKey] && show[dbField]) {
              const tmdbDate = new Date(tmdbShow[tmdbKey]);
              if (show[dbField].getTime() != tmdbDate.getTime()) {
                show[dbField] = tmdbShow[tmdbKey];
              }
            } else {
              show[dbField] = tmdbShow[tmdbKey];
            }
          } else if (dbField == 'originCountry') {
            show[dbField] = tmdbShow[tmdbKey];
          } else {
            if (show[dbField] != tmdbShow[tmdbKey]) {
              show[dbField] = tmdbShow[tmdbKey];
            }
          }
        }
      }
      show.save();
      // update cast
      await addCast(show._id);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateShows;
