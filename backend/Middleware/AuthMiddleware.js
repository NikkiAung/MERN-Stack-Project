const jwt = require('jsonwebtoken');

const AuthMiddleware = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(token);
    if(token) {
        jwt.verify(token,process.env.JWT_SECRET,(err, decodedValue)=>{
            if(err) {
                return res.status(401).json({message : 'unauthenticated!'})
            }else{
                next();
            }
        })

    }else{
        return res.status(400).json({message :'token is required!'})
    }
}

module.exports = AuthMiddleware;