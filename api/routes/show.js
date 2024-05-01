const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middlewares/authMiddleware");

const {
  createShow,
  getAllShows,
  getShow,
  getImdbShow,
  getTmdbShow,
  addCast,
  updateShow,
  deleteShow,
} = require("../controllers/show");
const { createWatch, deleteWatch } = require("../controllers/watch");

router.route("/").get(getAllShows);

router.route("/").post(createShow);

router
  .route("/:id")
  .get(getShow)
  .patch(authenticate, authorize, updateShow)
  .delete(deleteShow);

router.route("/tmdb/:id").get(getTmdbShow);

router.route("/imdb/:id").get(getImdbShow);

router.route("/:id/add_cast").post(addCast);

router.route("/:id/watched").post(createWatch);

router.route("/:showId/watched/:id").delete(deleteWatch);

module.exports = router;
