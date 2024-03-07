const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-appointment', 'root', 'MDafnan18x', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;