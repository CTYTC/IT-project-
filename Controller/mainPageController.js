const db = require('../model/index');

const getPage = (req, res) => {
    let sql = 'select * from homepage';
    db.base(sql,null,(result) =>{
        res.send(result);
    })
};


module.exports = {
    getPage
};