const nodemailer = require('nodemailer');
var url = require("url");
var querystring = require("querystring");
const { param } = require('../router/mailRouter');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user : 'nbdycares.mailservice@gmail.com',
        pass : 'nbdycares123'
    }
});


const sendMail = (req, res) =>{
    var urlString = req.url;
    var arg = url.parse(req.url).query;
    var params = querystring.parse(arg);

    var emailaddress = params.email_address || 'none email address';
    var firstname = params.firstname || 'empty firstname';
    var imgurl = params.imgurl || 'empty image';
    var lastname = params.lastname || 'empty lastname';
    var content = params.content || 'empty text';

    var sendHtml = `<div>
      <div>firstName : ${firstname}</div>
      <div>lastname : ${lastname}</div>
      <div>emailaddress : ${emailaddress}</div>
      <div>content : ${content}</div>
      <div>file : <a href="${imgurl}">down upload file</a> </div>
    </div>`;

    let mailOptions = {
        from: 'nbdycares.mailservice@gmail.com',
        to: 'royfmttm@gmail.com',
        subject: 'From mailbox: Test',
        html: sendHtml
        
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('sending mail success');
    });
    
}

module.exports = {
    sendMail
}