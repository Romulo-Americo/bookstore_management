const Genre = require('../../../models/books/genre')

module. exports = (req, res) =>{
    Genre.create(req.body)
    .then(() =>{
        res.send('Genre created');
    })
    .catch((err) =>{
        res.send(`Error in create genre ${err}`);
    })
}