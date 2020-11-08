var jwt = require('jsonwebtoken');

const verifyToken = (req,res) =>{
    let token = req.body.token;
    jwt.verify(token, "nobody", function (err, decode) {
        if (err) {  //  时间失效的时候/ 伪造的token          
            res.send({'status':401});            
        } else {
            res.send({'status':1});
        }
    })

}

module.exports = {
    verifyToken
};