const cloudinary = require("cloudinary").v2;
//for image storage
cloudinary.config({
    cloud_name: 'zjz',
    api_key: '244694551593552',
    api_secret: 'BZY2Hs1w4u0lmwssr5R_CPT_hNU'
})

module.exports = {
    port: 3000,
    mails:11,
    mailConfig: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user : 'nbdycares.mailservice@gmail.com',
            pass : 'nbdycares123'
        },
        from: 'nbdycares.mailservice@gmail.com',
        to: 'royfmttm@gmail.com',
    },
    cloudinaryConfig: cloudinary,
    database: {
        host:'118.24.149.120',
        port:'3306',
        user:'developer',
        password:'GPmCewWfqCMIQtTV',
        database:'db_20200710'
    }
}
