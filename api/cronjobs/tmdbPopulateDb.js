const axios = require("axios");
const { parse } = require("node-html-parser");
const Actor = require("../models/actor");
const Show = require("../models/show");
const { addCast } = require("./addCast");

const tmdbPopulateDb = async () => {
  var foundCount = 0;
  var page = 1;
  var releaseDate = new Date();

  while (foundCount < 50) {
    const tmdbUrl = `https://api.themoviedb.org/3/discover/tv?api_key=4f7e5720a1935eda7e3414ef894f7b65&language=en-US&with_original_language=ko&sort_by=first_air_date.desc&page=${page}`;

    try {
      const response = await axios.get(tmdbUrl);
      const list_res = response.data.results;
      for (const item of list_res) {
        const show = await Show.findOne({ tmdbId: item.id });
        if (!show) {
          const tmdbResponse = await axios.get(
            `https://api.themoviedb.org/3/tv/${item.id}?api_key=4f7e5720a1935eda7e3414ef894f7b65&language=en-US`
          );
          const tmdbJson = tmdbResponse.data;
          if (
            tmdbJson.languages.includes("ko") &&
            tmdbJson.origin_country.includes("KR") &&
            tmdbJson.poster_path &&
            tmdbJson.popularity > 25
          ) {
            console.log(`ADDING: ${tmdbJson.name}`);
            console.log(`popularity: ${tmdbJson.popularity}`);
            const showObject = {
              title: tmdbJson.name,
              synopsis: tmdbJson.overview,
              //   imdbId: imdbId,
              tmdbId: tmdbJson.id,
              firstAirDate: tmdbJson.first_air_date,
              lastAirDate: tmdbJson.last_air_date,
              genres: tmdbJson.genres,
              numberOfSeasons: tmdbJson.number_of_seasons,
              numberOfEpisodes: tmdbJson.number_of_episodes,
              popularity: tmdbJson.popularity,
              originCountry: tmdbJson.origin_country,
              tmdbPoster: tmdbJson.poster_path,
              tmdbBackdrop: tmdbJson.backdrop_path,
              originalName: tmdbJson.original_name,
              mediaType: "TV_SERIES",
            };
            const createdShow = await Show.create(showObject);

            await addCast(createdShow._id);
            releaseDate = tmdbJson.first_air_date
              ? new Date(tmdbJson.first_air_date)
              : releaseDate;
          }
        } else {
          foundCount = foundCount + 1;
          console.log(show.title);
          releaseDate = new Date(show.firstAirDate);
          // console.log(`Show ${imdbId} is found`);
        }
      }
      //   break;
    } catch (error) {
      console.log(error);
      //   break;
    }
    page = page + 1;
    // break;
  }
};

module.exports = tmdbPopulateDb;
