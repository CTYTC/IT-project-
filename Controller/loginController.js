var jwt = require('jsonwebtoken');
const db = require('../model/index');

const getLoginPage = (req,res) => {
    res.render('loginPage',{})
};

const loginToSystem = (req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
    // console.log(username);
    // console.log(password);
    // let data = [
    //     username,
    //     password
    // ]
    var sql = 'SELECT password FROM user WHERE username = "' + username + '"';

    var rslt = {state:0};

    db.base(sql,null,(result) =>{
        console.log(result[0].password);
        if(password == result[0].password){
            rslt.state = 1;
            rslt.token = jwt.sign({ username }, "nobody", { expiresIn: 60 * 60 * 1 });
            rslt.message = "login success";
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