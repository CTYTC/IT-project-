var jwt = require('jsonwebtoken');

const verifyToken = (req,res) =>{
    let token = req.body.token;
    jwt.verify(token, "nobody", function (err, decode) {
        if (err) {
            res.send({'status':401});            
        } else {
            res.send({'status':1});
        }
    })

}

module.exports = {
    verifyToken
};