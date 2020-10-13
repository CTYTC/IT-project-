const mysql = require('mysql');

exports.base = (sql,data,callback) =>{
    const connection = mysql.createConnection({
        host:'118.24.149.120',
        port:'3306',
        user:'developer',
        password:'GPmCewWfqCMIQtTV',
        database:'db_20200710'
    });

    connection.connect();

    connection.query(sql,data,function (error,results,fields) {
        if(error) throw error;
        callback(results);
    })

    connection.end();
}