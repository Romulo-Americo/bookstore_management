const { DataTypes } = require('sequelize');
const data = require('../../db/connection');

//Requisição das chaves esrangeiras
const Author = require('./author');
const Genre = require('./genre');

const Book = data.define(
    'Book',{
        book_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 20
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
});

Book.belongsToMany(Author, {through:'BookAuthors', foreignKey: 'bookId'});
Author.belongsToMany(Book, {through:'BookAuthors', foreignKey: 'authorId'})

Book.belongsTo(Genre, { foreignKey: 'genreId', as: 'genre' });
Genre.hasMany(Book, { foreignKey: 'genreId' });
  
module.exports = Book;