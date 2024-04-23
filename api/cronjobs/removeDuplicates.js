const Actor = require('../models/actor');
const Show = require('../models/show');

const removeDuplicates = async (req, res) => {
  try {
    const shows = await Show.find();
    const actors = await Actor.find();

    for (const show of shows) {
      const uniqueCast = [];
      const castMap = new Map();
      for (const cast of show.cast) {
        if (!castMap.has(cast.actor.toString())) {
          castMap.set(cast.actor.toString(), true);
          uniqueCast.push(cast);
        }
      }
      if (show.cast.length != uniqueCast.length) {
        show.cast = uniqueCast;
        await show.save();
      }
    }

    for (const actor of actors) {
      const uniqueStarredIn = [];
      const starredInMap = new Map();
      for (const starredIn of actor.starredIn) {
        if (!starredInMap.has(starredIn.show.toString())) {
          starredInMap.set(starredIn.show.toString(), true);
          uniqueStarredIn.push(starredIn);
        }
      }
      if (actor.starredIn.length != uniqueStarredIn.length) {
        actor.starredIn = uniqueStarredIn;
        await actor.save();
      }
    }

    console.log('Successfully removed duplicates');
  } catch (error) {
    console.error('Error removing duplicates:', error);
  }
};

module.exports = removeDuplicates;
