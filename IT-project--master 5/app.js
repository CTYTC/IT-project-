const express = require('express');
const bodyParser = require('body-parser');
const template = require('art-template');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./src/config/config')

//import database
require("./model");
const mainPageRouter = require("./router/mainPageRouter");
const loginRouter = require("./router/loginRouter");
const articleRouter = require("./router/articleRouter");
const galleryRouter = require("./router/galleryRouter");
const timelineRouter = require("./router/timelineRouter");


//start static resource service
const app = express();
app.use('/www',express.static('public'));
app.use(morgan('combined'));
app.use(cors());

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','art');
app.engine('art', require('express-art-template'));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

app.use('/', mainPageRouter);
app.use('/article',articleRouter);
app.use('/login',loginRouter);
app.use('/gallery',galleryRouter);
app.use('/timeline',timelineRouter);



//listen to the serve
 app.listen(config.port,function(){
    console.log(`Server started on port ${config.port}`)
});

// app.listen(process.env.PORT || 3000, function () {
//     console.log('app is running at port 3000')
// });

module.exports = app;