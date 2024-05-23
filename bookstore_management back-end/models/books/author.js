const { DataTypes } = require('sequelize');
const data = require('../../db/connection');

const Author = data.define(
    'Author',{
        author_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bio:{
            type: DataTypes.STRING,
            allowNull: false
        }

    }
)



module.exports = Author;