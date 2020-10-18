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
    var text = `Name is ${req.body.name }, and email address is${req.body.email}.`;
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var sendHtml = `<div>
      <div>Name : ${name}</div>
      <div>email address : ${email}</div>
      <div>Message : ${message}</div>

    </div>`;

    let mailOptions = {
        from: 'nbdycares.mailservice@gmail.com',
        to: 'royfmttm@gmail.com',
        subject: text,
        html: sendHtml
        
    };

    var result = {state:0};

    transporter.sendMail(mailOptions, (error, info) => {
        

        if (error) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(result));
            return console.log(error.message);
        }else{      
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            result.state = 1;
            res.end(JSON.stringify(result));
            
            console.log('sending mail success');
        }
        
    });
    
}

module.exports = {
    sendMail
}