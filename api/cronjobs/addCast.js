const axios = require('axios');
const Actor = require('../models/actor');
const Show = require('../models/show');
const GENDERS = ['female', 'male', 'other'];

const addCastToShow = async (show, actor, order, character) => {
  const existingCastEntry = await show.cast.find((cast) =>
    cast.actor.equals(actor._id)
  );

  if (existingCastEntry) {
    if (existingCastEntry.order !== order) {
      existingCastEntry.order = order;
    }
    if (existingCastEntry.character !== character) {
      existingCastEntry.character = character;
    }
  } else {
    await show.cast.addToSet({
      actor: actor._id,
      name: actor.name,
      character,
      order,
    });
  }

  const existingStarredInEntry = actor.starredIn.find((entry) =>
    entry.show.equals(show._id)
  );

  if (existingStarredInEntry) {
    if (existingStarredInEntry.order !== order) {
      existingStarredInEntry.order = order;
    }
    if (existingStarredInEntry.character !== character) {
      existingStarredInEntry.character = character;
    }
  } else {
    await actor.starredIn.addToSet({
      show: show._id,
      title: show.title,
      character,
      order,
    });
  }

  await Promise.all([show.save(), actor.save()]);
};

const addCast = async (showId) => {
  const show = await Show.findOne({ _id: showId });
  console.log(`Adding cast for show ${show.title}`);

  const tmdbCast = (
    await axios.get(
      `https://api.themoviedb.org/3/tv/${show.tmdbId}/credits?api_key=4f7e5720a1935eda7e3414ef894f7b65&language=en-US`
    )
  ).data;
  if (tmdbCast.cast.length != show.cast.length) {
    for (const castItem of tmdbCast.cast) {
      var actor = await Actor.findOne({ tmdbId: castItem.id });

      if (!actor) {
        const actorObject = (
          await axios.get(
            `https://api.themoviedb.org/3/person/${castItem.id}?api_key=4f7e5720a1935eda7e3414ef894f7b65&language=en-US`
          )
        ).data;

        actor = await Actor.create({
          name: actorObject.name,
          imdbId: actorObject.imdb_id,
          tmdbId: actorObject.id,
          profileImage: actorObject.profile_path,
          gender: GENDERS[actorObject.gender - 1],
          birthday: actorObject.birthday,
          homepage: actorObject.homepage,
          biography: actorObject.biography,
          alsoKnownAs: actorObject.also_known_as,
        });
        await addCastToShow(show, actor, castItem.order, castItem.character);
      } else {
        await addCastToShow(show, actor, castItem.order, castItem.character);
      }
    }
  }
};

module.exports = {
  addCast,
  addCastToShow,
};
