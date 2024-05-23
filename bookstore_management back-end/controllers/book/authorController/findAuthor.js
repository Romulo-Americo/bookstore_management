const Author = require('../../../models/books/author');

module.exports = (req, res) =>{
    Author.findByPk(req.params.id)
    .then((author) =>{
       if(author){
        res.send(author);
       }else{
        res.send('Autor não existe')
       }
    })
    .catch((err) =>{
        res.send({ message: `Erro to find author or doesn't exist ${err}` });
    })
}