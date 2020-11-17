const mysql = require('mysql');
const config = require('../src/config/config')

exports.base = (sql,data,callback) =>{
    const connection = mysql.createConnection({
        host: config.database.host,
        port: config.database.port,
        user: config.database.user,
        password: config.database.password,
        database: config.database.database
    });

    connection.connect();

    connection.query(sql,data,function (error,results,fields) {
        if(error) throw error;
        callback(results);
    })

    connection.end();
}