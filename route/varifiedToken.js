const jwt = require('jsonwebtoken');

module.exports = function (req,res,next){
    const token = req.header('auth-token');

    if(!token) return res.status(401).send('Asccess denied');
    
    try{
        const verified = jwt.verify(token,`swqqwfcsdsdc`);
        req.user = verified;
        next();

    }
    catch(err){
        res.status(400).send('invalid token');
    }
}