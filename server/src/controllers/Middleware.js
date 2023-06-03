const jwt = require('jwt-decode');

module.exports = {
    async mid (req, res, next){ 
        
        const token = req.headers.authorization;
        console.log(req.headers.authorization);
        try {
            
            if (token) {
                await (jwt.verify)(token, 'Uz&Nxq6ifp*bqvBJgG$z')

                return next();
            }else{
                res.status(400).send('erro');
            }
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }
};