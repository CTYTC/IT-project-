const db = require('../model/index');

const getArticlePage = (req,res) => {
    res.render('articlePage',{})
};

const createArticle = (req,res) => {
    var sql = 'INSERT INTO articles (title, content, author, createdTime) VALUES ？';
    var data = [
        req.body.title,
        req.body.content,
        req.body.author,
        new Date()
    ]
    db.base(sql, data, (result)=>{
        if (result.length ==1){
            res.send("Create Article Successful")
        }else{
            console.log(result)
        }
    })
}

const retrieveArticles = (req,res) => {
    var sql = 'SELECT title FROM articles';
    var data = []
    db.base(sql, data, (result)=>{
        if (result.length ==1){
            res.send("Retrieve Articles Successful")
        }else{
            res.render('articlePage', {articles: result})
        }
    })
}

module.exports = {
    getArticlePage,
    createArticle,
    retrieveArticles,
};
