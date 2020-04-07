const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("nodejs_login1", "root", "", {
    host: "localhost",
    dialect: "mysql",
    dialectModule: require('mysql2'),
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db