const Sequelize = require('sequelize')
const config = require('./config/config')

const conf = config.dev

export const sequelize = new Sequelize({
    "username": conf.username,
    "password": conf.password,
    "database": conf.database,
    "host": conf.host,

    dialect: 'postgres',
    storage: ':memory:',
})