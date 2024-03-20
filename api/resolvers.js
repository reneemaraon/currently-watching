// resolvers.js

const User = require('./models/user');
const Show = require('./models/show');
const Review = require('./models/review');

const { generateSearchConditions } = require('./utils/search');
const Comment = require('./models/comment');
const { processCreateComment } = require('./controllers/comment');

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
        .sort({ createdAt: -1 })
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
        .sort({ createdAt: -1 })
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
        .sort({ createdAt: -1 })
        .limit(options.limit)
        .skip(options.skip);
      return reviews;
    },
    review: async (_, { id }) => {
      let review = await Review.findOne({ _id: id });
      return review;
    },
    reviewComments: async (_, { id, filter = {} }) => {
      const { searchConditions, options } = generateSearchConditions(filter, [
        'commentBody',
      ]);
      searchConditions.review = id;
      let comments = await Comment.find(searchConditions)
        .sort({ createdAt: -1 })
        .limit(options.limit)
        .skip(options.skip);
      return comments;
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
  Show: {},
  Comment: {
    review: async (parent, args, context) => {
      const review = await Review.findById(parent.review);
      return review;
    },
    user: async (parent, args, context) => {
      const user = await User.findById(parent.user);
      return user;
    },
  },
  Mutation: {
    createComment: async (_, { reviewId, commentBody }, { user }) => {
      try {
        const newComment = await processCreateComment(
          reviewId,
          user._id,
          commentBody
        );
        return newComment;
      } catch (error) {
        throw new Error('Failed to create comment');
      }
    },
  },
};

module.exports = resolvers;
