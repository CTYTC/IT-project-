const db = require('../model/index');
const sd = require("silly-datetime")
var cloudinary = require('cloudinary').v2;


const getArticlePage = (req,res) => {
    const sql = 'SELECT * FROM article ORDER BY createDate DESC';
    const data = [];
    db.base(sql, data, (result)=>{
        res.send(result)
    })
};

const viewArticle = (req,res) =>{
    console.log(req.body)
    const sql = 'SELECT * FROM article WHERE title = ?'
    const data = [req.body]
    db.base(sql, data, (result)=> {
        res.send(result)
    })
};

const createArticlePage = (req, res)=>{
    res.render('createArticle', {})
}

const createArticle = (req, res) =>{
    console.log(req.body);
    cloudinary.uploader.upload(req.files.myFile.path)
        .then(function (img) {
            let url = img.url;
            let id = img.public_id;
            let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
            let sql = 'insert into article set ?';
            let data = {title: req.body.title, createDate: time,
                description: req.body.description, content:req.body.content, image_id :id, image_url: url};
            db.base(sql, [data], (r) => {
                if (r.affectedRows === 1) {
                    res.send("Successful")
                } else {
                    console.log(r)
                }
            }).catch(function(err){
                    console.log(err);
                })
        })
};

const deleteArticle = (req, res) =>{
    const sql ='DELETE FROM article where title = ?'
    const data = [req.body.title]
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
        req.body.content,
        req.body.title
    ]
    db.base(sql, data, (result)=>{
        if(result == 1){
            result.send("Update Successful")
        }else {
            res.send("FAIL TO MODIFY")
        }
    })
}

const getSubtitle = (req,res) => {
    let sql = 'select * from module where Title = ? limit 1';
    db.base(sql,["article"],(result) =>{
        res.send(result[0].sub_title);
    })
};


const getModifyPage = (req, res) =>{
    res.render('modifyArticle')
}


const updateModuleTitle = function(req, res) {
    let sql = 'update module set sub_title = ? where Title = ?';
    let data = [req.body.subtitle, "article"];
    console.log(req.body);
    db.base(sql,data,(result) =>{
        if (result.affectedRows === 1) {
            console.log("yes")
            res.send("Successful");
        } else {
            console.log(result);
        }
    })
}

module.exports = {
    getArticlePage,
    createArticle,
    getModifyPage,
    deleteArticle,
    updateArticle,
    createArticlePage,
    viewArticle,
    getSubtitle,
    updateModuleTitle,
};
