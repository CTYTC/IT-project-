const db = require('../model/index');
var cloudinary = require('cloudinary').v2;

const getGalleryPage = (req,res) => {
    //res.render("galleryPage");
    let sql = 'select * from gallery';
    db.base(sql,null,(result) =>{
        res.send(result);
    })
};

const uploadImage = function(req, res) {
    cloudinary.uploader.upload(req.files.image.path)
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

}

module.exports = {
    uploadImage,
    getGalleryPage,
};

