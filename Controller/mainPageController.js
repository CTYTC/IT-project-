const db = require('../model/index');
var cloudinary = require('cloudinary').v2;

const getPage = (req, res) => {
    let sql = 'select * from homepage';
    db.base(sql,null,(result) =>{
        res.send(result);
    })
};

const uploadImage = function(req, res) {
    cloudinary.uploader.upload(req.files.myFile.path)
        .then(function (img) {
            let url = img.url;
            let id = img.public_id;
            let sql = 'update homepage set image_url = ?, image_id = ? where index = 1';
            let data = [url, id];
            db.base(sql, data, (r) => {
                if (r.affectedRows === 1) {
                    res.send("Successful")
                } else {
                    console.log(r)
                }
            })
        })
        .catch(function(err){
            console.log(err);
        })
};

const updateIntroduction = function(req, res) {
    let sql = 'update homepage set introduction = ? where index = 1';
    let data = [req.body.introduction];
    db.base(sql,data,(result) =>{
        if (result.affectedRows === 1) {
            res.send("Successful");
        } else {
            console.log(result);
        }
    })
}

const uploadBg = function(req, res) {
    cloudinary.uploader.upload(req.files.myFile.path, { eager: [
            { width: 1960, height: 1024, crop: "fill" }]} )
        .then(function (img) {
            let url = img.url;
            let id = img.public_id;
            let sql = 'update homepage set bg_url = ?, bg_id = ? where index = 1';
            let data = [url, id];
            db.base(sql, data, (r) => {
                if (r.affectedRows === 1) {
                    res.send("Successful")
                } else {
                    console.log(r)
                }
            })
        })
        .catch(function(err){
            console.log(err);
        })
};


module.exports = {
    getPage,
    uploadImage,
    updateIntroduction,
    uploadBg
};