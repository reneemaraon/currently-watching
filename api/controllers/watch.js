const Watch = require("../models/watch");
const Show = require("../models/show");
const { StatusCodes } = require("http-status-codes");

const processCreateWatch = async (showId, userId) => {
  const existingWatch = Watch.find({ show: showId, user: userId });

  if (existingWatch.length == 1) {
    return existingWatch;
  }

  const watchInstance = await Watch.create({
    user: userId,
    show: showId,
  });

  await addWatch(showId);

  return watchInstance;
};

const createWatch = async (req, res) => {
  const {
    params: { id: showId },
    user: { _id: userId },
  } = req;

  const watchInstance = processCreateWatch(showId, userId);

  res.status(StatusCodes.CREATED).json({ watchInstance });
};

const processDeleteWatch = async (showId, userId) => {
  const watchInstance = await Watch.findOneAndDelete({
    show: showId,
    user: userId,
  });
  if (!watchInstance) {
    throw new Error("Watch instance not found");
  }

  await removeWatch(watchInstance.show);
};

const deleteWatch = async (req, res) => {
  const {
    params: { id: showId },
    user: { _id: userId },
  } = req;

  processDeleteWatch(showId, userId);

  res.status(StatusCodes.OK).json({ message: "Deleted" });
};

// utils

const updateShowWatchCount = async (showId, inc) => {
  await Show.updateOne({ _id: showId }, { $inc: { watchCount: inc } });
};

const addWatch = async (showId) => {
  await updateShowWatchCount(showId, 1);
};

const removeWatch = async (showId) => {
  await updateShowWatchCount(showId, -1);
};

module.exports = {
  createWatch,
  deleteWatch,
  processCreateWatch,
  processDeleteWatch,
};
