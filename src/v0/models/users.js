const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('')

export const user = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        required: true,
    },
    email: {
        type: DataTypes.STRING,
        required: true,
    },
    password: {
        type: DataTypes.STRING,
        required: true,
    },
    accountConfirmation: {
        type: DataTypes.BOOLEAN,
        default: false,
    },
    resetPass: {
        type: DataTypes.BOOLEAN,
        default: false,
    },
    date: {
        type: DataTypes.DATE,
        default: Date.now,
    },
})

