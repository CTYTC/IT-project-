const express = require('express');
const bodyParser = require('body-parser');
const template = require('art-template');
const db = require("./model");
const path = require('path');
const fileUpload = require('express-fileupload')

//import database
require("./model");
const mainPageRouter = require("./router/mainPageRouter");
const loginRouter = require("./router/loginRouter");
const articleRouter = require("./router/articleRouter");
const galleryRouter = require("./router/galleryRouter");

//start static resource service
const app = express();
app.use('/www',express.static('public'));
app.use(fileUpload());


app.set('views',path.join(__dirname, 'views'));
app.set('view engine','art');
app.engine('art', require('express-art-template'));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

app.use('/', mainPageRouter);
app.use('/article',galleryRouter);
app.use('/login',loginRouter);

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

//listen to the serve
app.listen(3000, function () {
    console.log('app is running at port 3000')
});

module.exports = app;