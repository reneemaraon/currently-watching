const List = require("../models/list");

const processCreateList = async ({
  userId,
  name,
  items = [],
  ordered = true,
}) => {
  const listInstance = await List.create({
    user: userId,
    name,
    items: items.map((val, index) => ({ show: val, order: index + 1 })),
    ordered,
  });

  return listInstance;
};

const processUpdateList = async (id, body) => {
  const updateBody = body;
  if (body.items) {
    updateBody.items = body.items.map((val, index) => ({
      show: val,
      order: index + 1,
    }));
  }
  const listInstance = await List.findByIdAndUpdate(id, { $set: updateBody });
  await listInstance.save();
  return listInstance;
};

const processDeleteList = async (id) => {
  const list = await List.findOneAndDelete({ _id: id });
  if (!list) {
    throw new Error("List not found");
  }
  return list;
};

// const createLike = async (req, res) => {
//   const {
//     params: { id: reviewId },
//     user: { _id: userId },
//   } = req;

//   const likeInstance = processCreateLike(reviewId, userId);

//   res.status(StatusCodes.CREATED).json({ likeInstance });
// };

// const processDeleteLike = async (reviewId, userId) => {
//   const likeInstance = await Like.findOneAndDelete({
//     review: reviewId,
//     user: userId,
//   });
//   if (!likeInstance) {
//     throw new Error('Like instance not found');
//   }

//   await removeLike(likeInstance.review);
// };

// const deleteLike = async (req, res) => {
//   const {
//     params: { id: reviewId },
//     user: { _id: userId },
//   } = req;

//   processDeleteLike(reviewId, userId);

//   res.status(StatusCodes.OK).json({ message: 'Deleted' });
// };

// // utils

// const updateReviewLikeCount = async (reviewId, inc) => {
//   await Review.updateOne({ _id: reviewId }, { $inc: { likeCount: inc } });
// };

// const addLike = async (reviewId) => {
//   await updateReviewLikeCount(reviewId, 1);
// };

// const removeLike = async (reviewId) => {
//   await updateReviewLikeCount(reviewId, -1);
// };

module.exports = {
  //   createLike,
  //   deleteLike,
  //   processDeleteLike,
  processCreateList,
  processUpdateList,
  processDeleteList,
};
