// resolvers.js

const User = require("./models/user");
const Show = require("./models/show");
const Review = require("./models/review");
const Watch = require("./models/watch");
const Like = require("./models/like");
const Comment = require("./models/comment");

const { generateSearchConditions } = require("./utils/search");
const { processCreateComment } = require("./controllers/comment");
const { processCreateLike, processDeleteLike } = require("./controllers/like");
const Actor = require("./models/actor");
const {
  processDeleteWatch,
  processCreateWatch,
} = require("./controllers/watch");
const {
  isReviewOwnerStandalone,
  isListOwnerStandalone,
} = require("./middlewares/isOwnerMiddleware");
const { processUpdateReview } = require("./controllers/review");
const {
  processCreateList,
  processUpdateList,
  processDeleteList,
} = require("./controllers/list");
const List = require("./models/list");

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
        cursorConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter, ["title"]);
      let shows = await Show.find({ ...searchConditions, ...cursorConditions })
        .sort(sort)
        .limit(limit);

      const count = await Show.find(searchConditions).countDocuments();
      return {
        shows,
        totalCount: count,
        cursorValue: filter.cursorValue,
        cursorNumValue: filter.cursorNumValue,
      };
    },
    showsOfGenres: async (_, { filter = {}, has = [], excluding = [] }) => {
      const {
        searchConditions,
        cursorConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter, ["title"]);

      if (has.length > 0) {
        searchConditions["genres.name"] = { $all: has };
      }

      if (excluding.length > 0) {
        if (searchConditions["genres.name"]) {
          searchConditions["genres.name"].$nin = excluding;
        }
      }

      let shows = await Show.find({ ...searchConditions, ...cursorConditions })
        .sort(sort)
        .limit(limit);

      const count = await Show.find(searchConditions).countDocuments();
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
        cursorConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter, ["title", "body"]);

      let reviews = await Review.find({
        ...searchConditions,
        ...cursorConditions,
      })
        .sort(sort)
        .limit(limit);

      const count = await Review.find(searchConditions).countDocuments();
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
        cursorConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter, ["title", "body"]);
      searchConditions.show = id;
      let reviews = await Review.find({
        ...searchConditions,
        ...cursorConditions,
      })
        .sort(sort)
        .limit(limit);
      const count = await Review.find(searchConditions).countDocuments();
      return {
        reviews,
        totalCount: count,
        cursorValue: filter.cursorValue,
        cursorNumValue: filter.cursorNumValue,
      };
    },
    userReviews: async (_, { id, filter = {} }) => {
      const {
        searchConditions,
        cursorConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter, ["title", "body"]);
      searchConditions.user = id;
      let reviews = await Review.find({
        ...searchConditions,
        ...cursorConditions,
      })
        .sort(sort)
        .limit(limit);
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
        cursorConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter, ["commentBody"]);
      searchConditions.review = id;
      let comments = await Comment.find({
        ...searchConditions,
        ...cursorConditions,
      })
        .sort(sort)
        .limit(limit);
      const count = await Comment.find(searchConditions).countDocuments();
      return {
        comments,
        totalCount: count,
        cursorValue: filter.cursorValue,
        cursorNumValue: filter.cursorNumValue,
      };
    },
    list: async (_, { id }) => {
      let list = await List.findOne({ _id: id });
      return list;
    },
    myLists: async (_, { filter = {} }, { user }) => {
      const {
        searchConditions,
        cursorConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter);

      const myLists = await List.find({
        user: user._id,
        ...searchConditions,
        ...cursorConditions,
      })
        .sort(sort)
        .limit(limit);
      const count = await List.find({
        user: user._id,
        ...searchConditions,
      }).countDocuments();
      return {
        lists: myLists,
        totalCount: count,
      };
    },

    userLists: async (_, { user, filter = {} }) => {
      const {
        searchConditions,
        cursorConditions,
        options: { sort, limit },
      } = generateSearchConditions(filter);

      const userLists = await List.find({
        user,
        ...searchConditions,
        ...cursorConditions,
      })
        .sort(sort)
        .limit(limit);
      const count = await List.find({
        user,
        ...searchConditions,
      }).countDocuments();
      return {
        lists: userLists,
        totalCount: count,
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
  Show: {
    cast: async (parent) => {
      // Populate the cast with details from the Actor model
      const populatedCast = await Promise.all(
        parent.cast.map(async (castMember) => {
          const actor = await Actor.findById(castMember.actor);
          return actor;
        })
      );
      return populatedCast;
    },
    watched: async (parent, args, { user }) => {
      if (!user) {
        return false;
      }
      const watched = await Watch.find({ show: parent._id, user: user._id });
      return watched.length > 0;
    },
    myReview: async (parent, args, { user }) => {
      if (!user) {
        return [];
      }
      const review = await Review.find({ user: user._id, show: parent._id });
      return review;
    },
  },
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
  ListItem: {
    show: async (parent, args, context) => {
      const show = await Show.findById(parent.show);
      return show;
    },
  },
  List: {
    user: async (parent, args, context) => {
      const user = await User.findById(parent.user);
      return user;
    },
    items: async (parent, args, context) => {
      return parent.items;
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
        throw new Error("Failed to create comment");
      }
    },
    likeReview: async (_, { reviewId }, { user }) => {
      try {
        const like = await processCreateLike(reviewId, user._id);
        const review = await Review.findById(like.review);
        return review;
      } catch (error) {
        throw new Error("Failed to like review.");
      }
    },
    deleteLike: async (_, { reviewId }, { user }) => {
      try {
        await processDeleteLike(reviewId, user._id);
        const review = await Review.findById(reviewId);
        return review;
      } catch (error) {
        throw new Error("Failed to unlike review.");
      }
    },
    watchedShow: async (_, { showId }, { user }) => {
      try {
        const watch = await processCreateWatch(showId, user._id);
        const show = await Show.findById(watch.show);
        return show;
      } catch (error) {
        throw new Error("Failed to watch show.");
      }
    },
    deleteWatch: async (_, { showId }, { user }) => {
      try {
        await processDeleteWatch(showId, user._id);
        const show = await Show.findById(showId);
        return show;
      } catch (error) {
        throw new Error("Failed to remove watch for show.");
      }
    },
    updateReview: async (_, { reviewId, body }, { user }) => {
      try {
        if (isReviewOwnerStandalone(user, reviewId)) {
          const review = processUpdateReview(reviewId, body);
          return review;
        }
      } catch (error) {
        throw new Error("Failed to update review");
      }
    },
    createList: async (_, { body }, { user }) => {
      try {
        const newList = await processCreateList({
          userId: "65b4aed35eba8362e2b674aa",
          ...body,
        });
        return newList;
      } catch (error) {
        throw new Error("Failed to create list");
      }
    },
    updateList: async (_, { listId, body }, { user }) => {
      try {
        const isOwner = await isListOwnerStandalone(user, listId);
        if (isOwner) {
          await processUpdateList(listId, body);
          const newList = await List.findById(listId);
          return newList;
        } else {
          throw new Error("You cannot update this list");
        }
      } catch (error) {
        throw new Error("Failed to update list");
      }
    },
    deleteList: async (_, { listId }, { user }) => {
      try {
        if (await isListOwnerStandalone(user, listId)) {
          const deletedList = await processDeleteList(listId);
          return deletedList;
        }
      } catch (error) {
        console.log(error);
        throw new Error("Failed to delete list");
      }
    },
  },
};

module.exports = resolvers;
