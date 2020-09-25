const db = require('../model/index');
const moment = require('moment');

const getPage = (req,res) =>{
    let sql = 'select * from timeline';
    db.base(sql,null,(result) =>{
        // res.render('timelinePage',{list:result});
        res.send(result);
    })
};

const addTimelinePage = (req,res) =>{
    res.render('addTimeline',{});
};

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

module.exports = {
    getPage,
    addTimelinePage,
    addTimeline
};