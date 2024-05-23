const Book = require('../../../models/books/book');
const Author = require('../../../models/books/author');

module.exports = (req, res) => {
    const { title, price, quantity, genreId, authorIds } = req.body;

    Book.create({
        title,
        price,
        quantity,
        genreId
    })
    .then(book => {
        if (authorIds && authorIds.length > 0) {
            book.setAuthors(authorIds)
                .then(() => {
                    res.send('Book created successfully with authors.');
                })
                .catch(err => {
                    res.status(500).send(`Error setting authors for book: ${err}`);
                });
        }
    })
    .catch(err => {
        res.status(500).send(`Error in creating book: ${err}`);
    });
}
