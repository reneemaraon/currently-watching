// resolvers.js

const User = require('./models/user');
const Show = require('./models/show');
const Review = require('./models/review');
const Like = require('./models/like');
const Comment = require('./models/comment');

const { generateSearchConditions } = require('./utils/search');
const { processCreateComment } = require('./controllers/comment');
const { processCreateLike, processDeleteLike } = require('./controllers/like');

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
      const {
        searchConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter, ['title']);
      let shows = await Show.find(searchConditions).sort(sort).limit(limit);

      const count = await Show.countDocuments();
      return {
        shows,
        totalCount: count,
        cursorValue: filter.cursorValue,
        cursorNumValue: filter.cursorNumValue,
      };
    },
    show: async (_, { id }) => {
      let show = await Show.findOne({ _id: id });
      return show;
    },
    reviews: async (_, { filter = {} }) => {
      const {
        searchConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter, ['title', 'body']);

      let reviews = await Review.find(searchConditions).sort(sort).limit(limit);

      const count = await Review.countDocuments();
      return {
        reviews,
        totalCount: count,
        cursorValue: filter.cursorValue,
        cursorNumValue: filter.cursorNumValue,
      };
    },
    showReviews: async (_, { id, filter = {} }) => {
      const {
        searchConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter, ['title', 'body']);
      searchConditions.show = id;
      let reviews = await Review.find(searchConditions).sort(sort).limit(limit);
      const count = await Review.find(searchConditions).countDocuments();
      return {
        reviews,
        totalCount: count,
        cursorValue: filter.cursorValue,
        cursorNumValue: filter.cursorNumValue,
      };
    },
    review: async (_, { id }) => {
      let review = await Review.findOne({ _id: id });
      return review;
    },
    reviewComments: async (_, { id, filter = {} }) => {
      const {
        searchConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter, ['commentBody']);
      searchConditions.review = id;
      let comments = await Comment.find(searchConditions)
        .sort(sort)
        .limit(limit);
      const count = await Comment.find({ review: id }).countDocuments();
      return {
        comments,
        totalCount: count,
        cursorValue: filter.cursorValue,
        cursorNumValue: filter.cursorNumValue,
      };
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
    liked: async (parent, args, { user }) => {
      if (!user) {
        return false;
      }
      const like = await Like.find({ review: parent._id, user: user._id });
      return like.length > 0;
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
  Like: {
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
    likeReview: async (_, { reviewId }, { user }) => {
      try {
        const like = await processCreateLike(reviewId, user._id);
        const review = await Review.findById(like.review);
        return review;
      } catch (error) {
        throw new Error('Failed to like review.');
      }
    },
    deleteLike: async (_, { reviewId }, { user }) => {
      try {
        await processDeleteLike(reviewId, user._id);
        const review = await Review.findById(reviewId);
        return review;
      } catch (error) {
        throw new Error('Failed to unlike review.');
      }
    },
  },
};

module.exports = resolvers;
