const Genre = require('../../../models/books/genre')

module.exports = (req, res) =>{
    Genre.findAll()
    .then((genres) =>{
        res.send(genres);
    })
    .catch((err) =>{
        res.send(`Erro in listed genres ${err}`);
    })
}