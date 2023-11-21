const express = require('express');
const router = express.Router();

const {
    createShow,
    getAllShows,
    getShow,
    getImdbShow,
    getTmdbShow,
    addCast,
    updateShow,
    deleteShow,
} = require('../controllers/show')

router.route('/').get(getAllShows)

router.route('/').post(createShow)

router.route('/:id').get(getShow).patch(updateShow).delete(deleteShow)

router.route('/tmdb/:id').get(getTmdbShow)

router.route('/imdb/:id').get(getImdbShow)


router.route('/:id/add_cast').post(addCast)

module.exports = router;