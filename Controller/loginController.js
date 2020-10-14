
var mysql = require('mysql');
const db = require('../model/index');

const getLoginPage = (req,res) => {
    res.render('loginPage',{})
};

const loginToSystem = (req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
   // let sql = 'select * from user where username=? and password=?';
   console.log(username);
    let data = [
        username,
        password
    ]
    var rslt = {state:0};

    var connection = mysql.createConnection({
        host: '118.24.149.120',
        port:'3306',
        user: 'developer',
        password: 'GPmCewWfqCMIQtTV',
        database: 'db_20200710'
      })

    
    connection.connect();
    var sql = 'SELECT * FROM users WHERE username = ?,"' + username + '"';

    connection.query(sql, function(err, result) {
 
        console.log('--------------------------result----------------------------');

        var message = JSON.stringify(result);
        message = JSON.parse(message);
        console.log(message);
        console.log(message[0].password);
     
        if (err) {
          //callback('查询失败');
          console.log('查询失败');
        }
        if (message[0].password == password) {
          callback('登陆成功');
        } else {
          callback('登陆失败');
        }
        console.log('------------------------------------------------------------\n\n');
      });
     
      connection.end();

    // if(username === 'abc' && password === '123'){
    //     //const token = this.app.jwt.sign({ userid: result[0].userid, username: result[0].username },
    //       //  this.app.config.jwt.secret, { expiresIn: '1h' });
    //     //this.ResultResponse.createBySuccessData(token);

       
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     });
    //     rslt.state = 1;
    //     //res.redirect('/');
    //     res.end(JSON.stringify(rslt));

    //     console.log('login sucess');
    // }
    // else{
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     });
    //     res.end(JSON.stringify(rslt));

    //     res.json({ret_code : 1, ret_msg : '账号或密码错误'});// 若登录失败，重定向到登录

    //     console.log("incorrect username or passwod");
    // }

    // db.base(sql,data, (result)=>{
    //     if (result.length ==1){
    //         const token = this.app.jwt.sign({ userid: result[0].userid, username: result[0].username },
    //             this.app.config.jwt.secret, { expiresIn: '1h' });
    //         res = this.ResultResponse.createBySuccessData(token);
    //         //res.send("login Successful")
    //     }else{
    //         console.log(result)
    //     }
    // })

}

const getUserInfo = (req,res) => {
    let info = req.body;
    let user = {};
    for (let key in info ){
        user[key] = info[key];
    }

    let sql = 'insert into user set ?'
    db.base(sql, user, (result) =>{
        if(result.affectedRows == 1){
            res.redirect('/login')
        }
    })
};


const getRegisterPage = (req,res) => {
    res.render('registerPage',{})
};


module.exports = {
    getLoginPage,
    getRegisterPage,
    getUserInfo,
    loginToSystem
};