const jwt = require('jsonwebtoken');


module.exports = {
    async mid (req, res, next){ 
    const token = req.cookies.token;
    console.log('tokão: ', token);
    if (token) {
        try {
            jwt.verify(token, 'Uz&Nxq6ifp*bqvBJgG$z', (err, decoded) => {
                if (err) {
                  return res.status(401).json({ message: 'Token inválido' });
                }
                const userDt = req.user = decoded;
                
                console.log(req.user);
                res.send(userDt);
                next();
              });
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }
        
    }
};