const Author = require('../../../models/books/author');

module.exports = (req, res) =>{
    const { id } = req.params

    Author.update(req.body, {
        where: { author_id: id} 
    })
    .then((author) =>{
        if(author[0] === 0){
            res.status[404].send({ message: "Author doesn't exist" })
        }else{
            res.send({ message: 'Author updated' });
        }
    })
    .catch((err) =>{
        res.send(`Error in update Author ${err}`);
    })
}