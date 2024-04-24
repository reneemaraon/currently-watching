const axios = require('axios');
const { parse } = require('node-html-parser');
const Actor = require('../models/actor');
const Show = require('../models/show');
const { cookies, headers } = require('./headers');
const { addCast } = require('./addCast');

const popupateDb = async () => {
  const foundCount = 0;
  const releaseDate = new Date();

  while (foundCount < 10) {
    const year = releaseDate.getFullYear();
    const month = releaseDate.getMonth() + 1;
    const day = releaseDate.getDate();
    const imdbUrl = `https://www.imdb.com/search/title/?title_type=tv_series&release_date=,${year}-${month}-${day}&genres=drama&countries=KR&sort=release_date,desc`;

    try {
      const response = await axios.get(imdbUrl, { headers, cookies });
      const htmlText = response.data;
      const root = parse(htmlText);

      const showList = root.querySelector('ul.detailed-list-view');
      const items = showList.querySelectorAll('a.ipc-lockup-overlay');

      for (const item of items) {
        const imdbId = item.getAttribute('href').split('/')[2];
        const show = await Show.findOne({ imdbId });
        if (!show) {
          const tmdbRequest = await axios.get(
            `https://api.themoviedb.org/3/find/${imdbId}?api_key=4f7e5720a1935eda7e3414ef894f7b65&language=en-US&external_source=imdb_id`
          );
          const json_res = tmdbRequest.data;
          if (json_res.tv_results.length == 0) {
            console.log('no tmdb');
          } else {
            const tmdbId = json_res.tv_results[0].id;
            console.log(tmdbId);
            const tmdbResponse = await axios.get(
              `https://api.themoviedb.org/3/tv/${tmdbId}?api_key=4f7e5720a1935eda7e3414ef894f7b65&language=en-US`
            );
            tmdbJson = tmdbResponse.data;

            const showObject = {
              title: tmdbJson.name,
              synopsis: tmdbJson.overview,
              imdbId: imdbId,
              tmdbId: tmdbId,
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
              mediaType: 'TV_SERIES',
            };

            const createdShow = await Show.create({ showObject });

            await addCast(createdShow._id);
          }
        } else {
          foundCount = foundCount + 1;
          console.log(`Show ${imdbId} is found`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = popupateDb;
