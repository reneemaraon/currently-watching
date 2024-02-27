// resolvers.js

const User = require('./models/user');
const Show = require('./models/show');
const Review = require('./models/review');

const resolvers = {
  Query: {
    getUserById: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);
        return user;
      } catch (error) {
        throw new Error('Failed to fetch user');
      }
    },
    getAllShows: async () => {
      try {
        const shows = await Show.find();
        return shows;
      } catch (error) {
        throw new Error('Failed to fetch shows');
      }
    },
    getShowById: async (_, { showId }) => {
      try {
        const show = await Show.findById(showId);
        return show;
      } catch (error) {
        throw new Error('Failed to fetch show');
      }
    },
    getReviewsByUserId: async (_, { userId }) => {
      try {
        const reviews = await Review.find({ user: userId });
        return reviews;
      } catch (error) {
        throw new Error('Failed to fetch reviews');
      }
    },
  },
  Mutation: {
    createReview: async (
      _,
      {
        userId,
        showId,
        overallRating,
        performanceRating,
        narrativeRating,
        cinematographyRating,
        body,
      }
    ) => {
      try {
        const review = new Review({
          user: userId,
          show: showId,
          overallRating,
          performanceRating,
          narrativeRating,
          cinematographyRating,
          body,
        });
        await review.save();
        return review;
      } catch (error) {
        throw new Error('Failed to create review');
      }
    },
  },
};

module.exports = resolvers;
