const db = require('../model/index');
const cloudinary = require('cloudinary');

const getGalleryPage = (req,res) => {
    res.render('galleryPage',{})
};

const uploadImage = function(req, res){
    cloudinary.uploader.upload(req.files.image.path, function(result){
        let image = [
            req.body.title,
            result.url,
            result.public_id,
        ];
        db.base(sql, image, (result)=>{
            if (result.length ==1){
                res.send("Create Article Successful")
            }else{
                console.log(result)
            }
        })
    });
};

module.exports = {
    uploadImage,
    getGalleryPage,
};

