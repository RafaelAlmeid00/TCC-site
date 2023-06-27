const jwt = require('jsonwebtoken');
require('dotenv').config()
module.exports = {
    async mid (req, res, next){ 
        const test = process.env.JWT_SECRET
        const token = req.body.token;
        const insominiaT = req.cookies.token;
        console.log('tokão ew: ', token, ' and ', test);
        if (token) {  
            try {
                jwt.verify(token, 'Uz&Nxq6ifp*bqvBJgG$z', (err, decoded) => {
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
