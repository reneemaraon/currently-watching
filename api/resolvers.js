// resolvers.js

const User = require('./models/user');
const Show = require('./models/show');
const Review = require('./models/review');

const resolvers = {
  Query: {
    users: async () => {
      let users = await User.find({});
      return users;
    },
    shows: async () => {
      let shows = await Show.find({});
      return shows;
    },
    reviews: async () => {
      let reviews = await Review.find({});
      return reviews;
    },
  },
  Mutation: {},
};

module.exports = resolvers;
