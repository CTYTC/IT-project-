
const db = require('../model/index');

const getLoginPage = (req,res) => {
    res.render('loginPage',{})
};

const loginToSystem = (req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
   // let sql = 'select * from user where username=? and password=?';
   console.log(username);
   console.log(password);
    let data = [
        username,
        password
    ]
    var sql = 'SELECT password FROM user WHERE username = "' + username + '"';

    var rslt = {state:0};

    db.base(sql,null,(result) =>{
        console.log(result[0].password);
        if(password == result[0].password){
            rslt.state = 1;
        }
        res.send(rslt);
    })

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