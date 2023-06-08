const jwt = require('jsonwebtoken');


module.exports = {
    async mid (req, res, next){ 
    const token = req.cookies.token;
    console.log('tokão: ', token);
    if (token) {
        try {
            jwt.verify(token, 'Uz&Nxq6ifp*bqvBJgG$z', (err, decoded) => {
                console.log('this is decoded and err: ', decoded, err);
                if (err) {
                  return res.status(401).json({ message: 'Token inválido' });
                }
                const userDecoded = decoded;
                
                console.log(user);
                return next().send({userDecoded});
              });
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }
        
    }
};