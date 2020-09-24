const db = require('../model/index');
const body = require("ejs");

const getArticlePage = (req,res) => {
    const sql = 'SELECT title FROM article';
    const data = [];
    db.base(sql, data, (result)=>{
        if (result.length ==1){
            res.send("Retrieve Articles Successful")
        }else{
            res.render('articlePage', {titles: result})
        }
    })
};

const createArticle = (req, res) =>{
    const sql = 'INSERT INTO article (title, description, content) VALUE (?, ?, ?)'
    const data = [
        req.body.title,
        req.body.description,
        req.body.content
    ]
    db.base(sql, data, (result)=>{
        if (result){
            res.send("Create Article Successful")
        }else{
            res.send('?')
        }
    })
};


const retrieveArticles = (req,res) => {
    const sql = 'SELECT title FROM article';
    var data = []
    db.base(sql, data, (result)=>{
        if (result.length ==1){
            res.send("Retrieve Articles Successful")
        }else{
            res.render('articlePage', {titles: result})
        }
    })
}

const getModifyPage = (req, res) =>{
    res.render('modifyArticle')
}

module.exports = {
    getArticlePage,
    createArticle,
    retrieveArticles,
    getModifyPage
};
