const db = require('../model/index');
const moment = require('moment');

const getPage = (req,res) =>{
    let sql = 'select year from timeline GROUP BY year';
    db.base(sql,null,(result) =>{
        // res.render('timelinePage',{list:result});
        res.send(result);
    })
};

const getSpecificYearPage = (req,res) =>{
    let sql = 'select * from timeline Where year = ? ORDER BY month ASC';
    let year = req.body.year;
    db.base(sql,year,(result) =>{
        res.send(result)
    })
}


const addTimeline = (req,res) =>{
    let info = req.body;
    let timeline = {};
    for(let key in info){
        timeline[key] = info[key];
    }
    let sql = 'insert into timeline set ?';
    db.base(sql,timeline,(result) =>{
        if(result.affectedRows == 1){
            res.redirect('/timeline')
        }
    })
};

const pageInfo = (req,res) => {
    let {year,curr} = req.query;
    let where = '';
    if(year != undefined) {
        where = `where year=${year} `
    }
    let sql = `select * from timeline ${where} ORDER BY month ASC Limit ${curr * 3},${curr * 3 + 3}`;
    db.base(sql,null,(result) =>{
        console.log(result);
        res.send(result)
    })
}



module.exports = {
    getPage,
    addTimeline,
    pageInfo
};