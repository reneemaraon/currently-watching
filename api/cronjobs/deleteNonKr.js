const Actor = require("../models/actor");
const Show = require("../models/show");

const IDS = [
  "662a1d1c1b5028d6a6947875",
  "662a1eac40912fda023cf5fa",
  "662a1eba40912fda023cf691",
  "662a1fdb40912fda023d0bfb",
];

const match = (input) =>
  input.match(
    /[\uac00-\ud7af\s]|[\u1100-\u11ff\s]|[\u3130-\u318f\s]|[\ua960-\ua97f\s]|[\ud7b0-\ud7ff\s]/g
  );

const allGenres = [];

const deleteNonKor = async () => {
  const shows = await Show.find();

  for (const show of shows) {
    //   if (!match(show.originalName)) {
    //     console.log(show.originalName);
    //   }

    const showGenres = show.genres;

    // Add each genre to the accumulated list
    showGenres.forEach((genre) => {
      if (!allGenres.includes(genre.name)) {
        allGenres.push(genre.name);
      }
    });
  }

  console.log(allGenres);
  // const shows = await Show.find({
  //   originCountry: { $ne: ['KR'] },
  // });
  // for (const show of shows) {
  //   console.log(show.title);
  //   console.log(show.originCountry);
  //   console.log(show._id);
  //   console.log(show.originalName);
  //   console.log(show.tmdbId);
  //   console.log('\n');
  // }

  // for (const id of IDS) {
  //   const show = await Show.findByIdAndDelete(id);

  //   const cast = show.cast;
  //   for (const castActor of cast) {
  //     await Actor.findByIdAndDelete(castActor.actor);
  //   }
  // }
};

module.exports = deleteNonKor;
