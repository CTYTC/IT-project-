const db = require('../model/index');

const getLoginPage = (req,res) => {
    res.render('loginPage',{})
};

const loginToSystem = (req,res) =>{
    let info = req.body;
    let sql = 'select * from user where username=? and password=?';
    let data = [
        info.username,
        info.password
    ]
    db.base(sql,data, (result)=>{
        if (result.length ==1){
            res.send("login Successful")
        }else{
            console.log(result)
        }
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