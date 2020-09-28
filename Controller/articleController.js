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
            res.send("FAIL TO CREATE")
        }
    })
};

const deleteArticle = (req, res) =>{
    const sql ='DELETE FROM article where title = ?'
    const data = req.body.title
    db.base(sql, data, (result)=>{
        if(result == 1){
            res.send("Delete successful")
        }else {
            res.send("FAIL TO DELETE")
        }
    })
}

const updateArticle = (req,res) =>{
    const sql = 'UPDATE article set description = ?, content = ? where title = ?'
    const data = [
        req.body.title,
        req.body.description,
        req.body.content
    ]
    db.base(sql, data, (result)=>{
        if(result == 1){
            result.send("Update Successful")
        }else {
            res.send("FAIL TO MODIFY")
        }
    })
}




const getModifyPage = (req, res) =>{
    res.render('modifyArticle')
}

module.exports = {
    getArticlePage,
    createArticle,
    getModifyPage,
    deleteArticle,
    updateArticle
};
