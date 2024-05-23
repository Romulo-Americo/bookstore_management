const Author = require('../../../models/books/author');

module.exports = (req, res) =>{
    Author.create(req.body)
    .then(() =>{
        res.send({message: 'Author created succesfuly'});
    })
    .catch((err) =>{
        res.send({message: `Error in create author: ${err}`});
    })
}