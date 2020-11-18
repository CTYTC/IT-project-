const config = require('../src/config/config')
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: config.mailConfig.host,
    port: config.mailConfig.port,
    secure: config.mailConfig.secure,
    requireTLS: config.mailConfig.requireTLS,
    auth: {
        user : config.mailConfig.auth.user,
        pass : config.mailConfig.auth.pass
    }
});


const sendMail = (req, res) =>{
    var text = `Name is ${req.body.name }, and email address is ${req.body.email}.`;
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var sendHtml = `<div>
      <div>Name : ${name}</div>
      <div>email address : ${email}</div>
      <div>Message : ${message}</div>

    </div>`;

    let mailOptions = {
        from: config.mailConfig.from,
        to: config.mailConfig.to,
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