const db = require('../model/index');
const sd = require("silly-datetime")


const getArticlePage = (req,res) => {
    const sql = 'SELECT * FROM article';
    const data = [];
    db.base(sql, data, (result)=>{

        res.send(result)
    })
};

const viewArticle = (req,res) =>{
    const sql = 'SELECT ? FROM article'
    const data = []
}

const createArticlePage = (req, res)=>{
    res.render('createArticle', {})
}

const createArticle = (req, res) =>{
    const sql = 'INSERT INTO article (title, createDate, description, content) VALUE (?, ?, ?, ?)'
    const time = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
    const data = [
        req.body.title,
        time,
        req.body.description,
        req.body.content
    ]
    db.base(sql, data, (result)=>{
        if (result.affectedRows == 1){
            res.send("Create Article Successful")
        }
    })
};

const deleteArticle = (req, res) =>{
    const sql ='DELETE FROM article where title = ?'
    const data = [req.body.title]
    console.log(data)
    db.base(sql, data, (result)=>{
        if(result.affectedRows == 1){
            res.send("Delete successful")
        }else {
            res.send("FAIL TO DELETE")
        }
    })
}

const updateArticle = (req,res) =>{
    const sql = 'UPDATE article set createDate = ?, description = ?, content = ? where title = ?'
    const time = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
    const data = [
        time,
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
    updateArticle,
    createArticlePage
};
