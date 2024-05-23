const Author = require('../../../models/books/author');

module.exports = (req, res) =>{
    Author.destroy({ where: { author_id: req.params.id } })
    .then(() =>{
        res.send({ message: 'Author deleted' });
    })
    .catch((err) =>{
        res.send(`Error to delete Author ${err}`);
    })
}