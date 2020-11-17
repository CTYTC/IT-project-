const db = require('../model/index');
const config = require('../src/config/config')

const getPage = (req, res) => {
    let sql = 'select * from homepage';
    db.base(sql,null,(result) =>{
        res.send(result);
    })
};


const updateHomepage = function(req, res) {
    console.log(req.files)
    config.cloudinaryConfig.uploader.upload(req.files.myFile.path)
        .then(function (img) {
            let url = img.url;
            let id = img.public_id;
            let sql = 'UPDATE homepage SET image_url = ?, image_id = ? where id = ?';
            let data = [url, id, "homepage"];
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
    let sql = 'update homepage set introduction = ? where id = ?';
    let data = [req.body.introduction, "homepage"];
    db.base(sql,data,(result) =>{
        if (result.affectedRows === 1) {
            res.send("Successful");
        } else {
            console.log(result);
        }
    })
}

const getHomepage = (req,res) => {
    let sql = 'select * from homepage where id = ? limit 1';
    db.base(sql,["homepage"],(result) =>{
        res.send(result[0]);
    })
};


module.exports = {
    getPage,
    getHomepage,
    updateHomepage,
    updateIntroduction
};