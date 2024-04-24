const Actor = require('../models/actor');
const Show = require('../models/show');

const IDS = [
  '642afa0f634b562027a4242d',
  '642afa97634b562027a4253f',
  '66272f80f5fd85e982765cbd',
  '66272f97f5fd85e982765e61',
];

const deleteNonKor = async () => {
  const shows = await Show.find({
    originCountry: { $ne: ['KR'] },
  });
  for (const show of shows) {
    console.log(show.title);
    console.log(show.originCountry);
    console.log(show._id);
    console.log(show.originalName);
    console.log(show.tmdbId);
    console.log('\n');
  }

  //   for (const id of IDS) {
  //     const show = await Show.findByIdAndDelete(id);

  //     const cast = show.cast;
  //     for (const castActor of cast) {
  //       await Actor.findByIdAndDelete(castActor.actor);
  //     }
  //   }
};

module.exports = deleteNonKor;
