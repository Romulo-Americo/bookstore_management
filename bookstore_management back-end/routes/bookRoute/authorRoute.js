const express = require('express');
const router = express.Router()

const createAuthor = require('../../controllers/book/authorController/createAuthor');
const readAuthor = require('../../controllers/book/authorController/readAuthor');
const findAuthor = require('../../controllers/book/authorController/findAuthor');
const deleteAuthor = require('../../controllers/book/authorController/deleteAuthor');
const updateAuthor = require('../../controllers/book/authorController/updateAuthor');


router.post('/newAuthor', createAuthor);
router.get('/readAuthor', readAuthor);
router.get('/findAuthor/:id', findAuthor);
router.put('/updateAuthor/:id', updateAuthor);
router.delete('/deleteAuthor/:id', deleteAuthor)

module.exports = router;