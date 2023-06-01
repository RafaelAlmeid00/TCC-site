const jwt = require('jsonwebtoken');

const { promisify } = require('util')

module.exports = {

    async auth(req, res, next) {
        const { authorizathion } = req.headers;
        if (!authorizathion) {
            res.sendStatus(401)
        }
        const [, token] = authorizathion.split(' ')
        try {
            await promisify(jwt.verify)(token, 'Uz&Nxq6ifp*bqvBJgG$z');

            return next();
        } catch (erro) {
            console.log(erro);
            
        }   
    }
}
