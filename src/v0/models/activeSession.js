const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('')

export const activeSession = sequelize.define('ActiveSession', {
    token: {
        type: DataTypes.STRING,
        required: true,
    },
    userId: {
        type: DataTypes.STRING,
        required: true,
    },
    date: {
        type: DataTypes.DATE,
        default: Date.now,
    },
})

