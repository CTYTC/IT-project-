const db = require('../model/index');

const getPage = (req, res) => {
    res.render('mainPage', {});
};

module.exports = {
    getPage
};