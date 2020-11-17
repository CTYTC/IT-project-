const db = require('../model/index');
const config = require('../src/config/config')

const getGalleryPage = (req,res) => {
    let sql = 'select * from gallery';
    db.base(sql,null,(result) =>{
        res.send(result);
    })
};

const getSubtitle = (req,res) => {
    let sql = 'select * from module where Title = ? limit 1';
    db.base(sql,["gallery"],(result) =>{
        res.send(result[0].sub_title);
    })
};

const uploadImage = function(req, res) {
    console.log(req.body);
    config.cloudinaryConfig.uploader.upload(req.files.myFile.path)
        .then(function (img) {
            let url = img.url;
            let id = img.public_id;
            let sql = 'insert into gallery set ?';
            let data = {id :id, title: req.body.title, url: url};
            db.base(sql, [data], (r) => {
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

const deleteImage = function(req, res) {
    let sql = 'delete from gallery where id = ?';
    let data = [req.body.id];
    console.log(req.body.id)
    config.cloudinaryConfig.uploader.destroy(req.body.id)
        .then(function (result) {
            db.base(sql,data,(r) =>{
                if (r.affectedRows === 1) {
                    console.log(r);
                } else {
                    console.log(r);
                }
            })
        })
        .catch(function(err){
            console.log(err);
        })
}


const updateModuleTitle = function(req, res) {
    let sql = 'update module set sub_title = ? where Title = ?';
    let data = [req.body.sub_title, "gallery"];
    console.log(req.body);
    db.base(sql,data,(result) =>{
        if (result.affectedRows === 1) {
            res.send("Successful");
        } else {
            console.log(result);
        }
    })
}
module.exports = {
    uploadImage,
    getGalleryPage,
    deleteImage,
    getSubtitle,
    updateModuleTitle,

};

