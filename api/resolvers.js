// resolvers.js

const User = require('./models/user');
const Show = require('./models/show');
const Review = require('./models/review');

const { generateSearchConditions } = require('./utils/search');

const resolvers = {
  Query: {
    users: async () => {
      let users = await User.find({});
      return users;
    },
    user: async (_, { id }) => {
      let user = await User.findOne({ _id: id });
      return user;
    },
    shows: async (_, { filter = {} }) => {
      const { searchConditions, options } = generateSearchConditions(filter, [
        'title',
      ]);
      let shows = await Show.find(searchConditions)
        .limit(options.limit)
        .skip(options.skip);
      return shows;
    },
    show: async (_, { id }) => {
      let show = await Show.findOne({ _id: id });
      return show;
    },
    reviews: async (_, { filter = {} }) => {
      const { searchConditions, options } = generateSearchConditions(filter, [
        'title',
        'body',
      ]);
      let reviews = await Review.find(searchConditions)
        .limit(options.limit)
        .skip(options.skip);
      return reviews;
    },
    showReviews: async (_, { id, filter = {} }) => {
      const { searchConditions, options } = generateSearchConditions(filter, [
        'title',
        'body',
      ]);
      searchConditions.show = id;
      let reviews = await Review.find(searchConditions)
        .limit(options.limit)
        .skip(options.skip);
      return reviews;
    },
    review: async (_, { id }) => {
      let review = await Review.findOne({ _id: id });
      return review;
    },
  },
  Review: {
    user: async (parent, args, context) => {
      const user = await User.findById(parent.user);
      return user;
    },
    show: async (parent, args, context) => {
      const show = await Show.findById(parent.show);
      return show;
    },
  },
  Mutation: {},
};

module.exports = resolvers;
