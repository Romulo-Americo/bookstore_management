const express = require('express');
const router = express.Router()

const createGenre = require('../../controllers/book/genreController/createGenre');
const readGenre = require('../../controllers/book/genreController/readGenre');


router.post('/addgenre', createGenre);
router.get('/listgenres', readGenre);

module.exports = router