const { Sequelize } = require('sequelize')
const config = require('./config');

const db = new Sequelize(
    config.dbName,
    config.user,
    config.password,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
)

module.exports = db