const db = require('../model/index');
const moment = require('moment');

const getPage = (req,res) =>{
    let sql = 'select year from timeline GROUP BY timeline.year';
    db.base(sql,null,(result) =>{
        // res.render('timelinePage',{list:result});
        res.send(result);
    })
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

const deleteTimeline = (req, res) =>{
    const sql ='DELETE FROM timeline where ID = ?';
    const data = req.body.id;
    db.base(sql, [data], (result)=>{
        if(result.affectedRows == 1){
            res.send("Delete successful")
            console.log("Deleted!!!!")
        }
    })
}

const updateTimeline = (req,res) =>{
    const sql = 'UPDATE timeline set year = ?, month = ?, description = ? where ID = ?';
    const data = [
        req.body.year,
        req.body.month,
        req.body.description,
        req.body.id
    ]
    db.base(sql, data, (result)=>{
        if(result == 1){
            result.send("Update Successful")
        }
    })
}

const getAllInfo = (req,res) =>{
    let sql = 'select * from timeline ORDER BY year';
    db.base(sql,null,(result) =>{
        res.send(result);
    })
}


module.exports = {
    getPage,
    addTimeline,
    pageInfo,
    deleteTimeline,
    updateTimeline,
    getAllInfo
};