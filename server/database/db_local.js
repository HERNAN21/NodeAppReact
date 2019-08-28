const Sequelize = require("sequelize")
const db_local = {}
const sequelize = new Sequelize("pool_recursos_qa", "pool_recursos_qa", "pool_recursos_qa#.", {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db_local.sequelize = sequelize
db_local.Sequelize = Sequelize

module.exports = db_local