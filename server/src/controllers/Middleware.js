const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
module.exports = {
    async mid (req, res, next){
        dotenv.config()
        const test = process.env.JWT_SECRET;
        const token = req.body.token;
        const insominiaT = req.cookies.token;
        if (token) {  
            try {
                jwt.verify(token, test, (err, decoded) => {
                    console.log('this is decoded and err: ', decoded, err);
                    if (err) {
                        return res.status(401).json({ message: 'Token inválido' });
                    }
                    return next(); 
                });
            } catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
            
        }

        
    },
    
};
