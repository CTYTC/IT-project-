const db = require('../model/index');
var cloudinary = require('cloudinary').v2;

const getGalleryPage = (req,res) => {
    res.render('galleryPage',{})
};

const uploadImage = function(req, res) {
    cloudinary.uploader.upload(req.files.image.path)
        .then(function (img) {
            let url = img.url;
            let id = img.public_id;
            let sql = "INSERT INTO gallery SET ?";
            let data = [
                id,
                req.body.title,
                url
            ];
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
}

module.exports = {
    uploadImage,
    getGalleryPage,
};

