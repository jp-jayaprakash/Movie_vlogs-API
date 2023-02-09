const express = require('express')
const router = express.Router()
const movieController= require('../Controller/movieController.js')



router.route ('/createMovie')
    .post( movieController.createMovie)
router.route('/getMovieList') 
    .get(movieController.getAllMovie)
router.route('/deleteMovie/:id')
    .patch(movieController.isDeleteMovie)
router.route('/movieRunning/:id')
    .patch(movieController.updateMovie)
router.route('/searchMovie')
    .get(movieController.searchByMovie)
router.route('/searchMovieById/:id')
    .get(movieController.getMovieById)


module.exports= router