const Author = require('../../../models/books/author');

module.exports = (req, res) =>{
    Author.findAll()
    .then((author) =>{
        res.send({  message: author });
    })
    .catch((err) =>{
        res.send({ message: `error in listed author ${err}` })
    })
}