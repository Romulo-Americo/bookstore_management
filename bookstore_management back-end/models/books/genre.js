const { DataTypes } = require('sequelize');
const data = require('../../db/connection');

const Genre = data.define(
    'Genre',{
        genre_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name_genre:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    }
)

module.exports = Genre;