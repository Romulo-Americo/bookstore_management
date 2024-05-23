const { DataTypes } = require('sequelize');
const data = require('../../db/connection');

//Requisição para verificar qual livro foi comprado ou alugado
const Book = require('../books/book');

const Client = data.define(
    'Client',{
        client_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        registration:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        contact:{
            type: DataTypes.STRING,
            allowNull: false
        },
        points:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        situation:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        qtBooks:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rentalDate:{
            type:DataTypes.DATE,
            allowNull: true,            
        },
        returnDate:{
            type:DataTypes.DATE,
            allowNull: true
        }

    }
)

Client.belongsToMany(Book, { through:'BookClient', foreignKey: 'bookId' });
Book.belongsToMany(Client, { through:'BookClient', foreignKey: 'clientId' });

module.exports = Client;