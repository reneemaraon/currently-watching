const Show = require('../models/show');
const Actor = require('../models/actor');
const { BadRequestError, NotFoundError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const getAllShows = async (req, res) => {
  const { page = 1, limit = 20, search } = req.query;

  const searchConditions = {};
  if (search) {
    searchConditions.title = { $regex: new RegExp(search, 'i') };
  }

  const shows = await Show.find(searchConditions)
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const count = await Show.countDocuments();

  res.status(StatusCodes.OK).json({
    nbHits: shows.length,
    totalPages: Math.ceil(count / limit) + 1,
    currentPage: parseInt(page),
    shows,
  });
};

const getShow = async (req, res) => {
  const {
    params: { id: showId },
  } = req;

  const show = await Show.findOne({ _id: showId });

  if (!show) {
    throw new NotFoundError('Show not found');
  }
  res.status(StatusCodes.OK).json({ show });
};

const getImdbShow = async (req, res) => {
  const {
    params: { id: showId },
  } = req;

  const show = await Show.findOne({ imdbId: showId });

  if (!show) {
    throw new NotFoundError('Show not found');
  }

  res.status(StatusCodes.OK).json({ show });
};

const getTmdbShow = async (req, res) => {
  const {
    params: { id: showId },
  } = req;

  const show = await Show.findOne({ tmdbId: showId });

  if (!show) {
    throw new NotFoundError('Show not found');
  }

  res.status(StatusCodes.OK).json({ show });
};

const createShow = async (req, res) => {
  const show = await Show.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ ...req.body });
};

const addCast = async (req, res) => {
  const {
    params: { id: showId },
    body: { tmdbId, tmdbDetails, order, character },
  } = req;
  const show = await Show.findOne({ _id: showId });

  if (!show) {
    throw new NotFoundError('Show not found');
  }

  var actor = await Actor.findOne({ tmdbId });

  if (!actor) {
    actor = await Actor.create(tmdbDetails);
  }

  show.cast.addToSet({
    actor: actor._id,
    name: actor.name,
    character,
    order,
  });

  show.save();

  actor.starredIn.addToSet({
    show: show._id,
    title: show.title,
    character,
    order,
  });

  actor.save();

  res.status(StatusCodes.OK).json({
    show,
  });
};

const deleteShow = async (req, res) => {
  const {
    params: { id: showId },
  } = req;

  const show = await Show.findOneAndDelete({ _id: showId });
  if (!show) {
    throw new NotFoundError('Show not found');
  }
  res.status(StatusCodes.OK).json({ message: 'Deleted' });
};

const updateShow = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedShow = await Show.findByIdAndUpdate(id, { $set: req.body });
    return res.json(updatedShow);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createShow,
  getAllShows,
  getShow,
  addCast,
  getImdbShow,
  getTmdbShow,
  updateShow,
  deleteShow,
};
