const mysql = require('mysql');
const dbConfig = require("./config.js");
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
})

const db = {};
db.sequelize = Sequelize;
db.sequelize = sequelize;

db.images = require("./image.model.js")(sequelize, Sequelize);
module.exports = db;
/*
exports.base = (sql,data,callback) =>{
    const connection = mysql.createConnection({
        host:'118.24.149.120',
        port:'3306',
        user:'developer',
        password:'GPmCewWfqCMIQtTV',
        database:'db_20200710',

    });

    connection.connect();

    connection.query(sql,data,function (error,results,fields) {
        if(error) throw error;
        callback(results);
    })

    connection.end();
}*/