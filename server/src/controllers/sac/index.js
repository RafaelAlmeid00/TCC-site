const knex = require("../../database/index");

module.exports = {
    async CadSac(req, res) {
        try {
            const { user_user_CPF: cpf } = req.body;
            const { sac_data: message } = req.body;
            
            await knex("user").insert({
                user_user_CPF: cpf, sac_data: message
            });

            res.status(201).send('mensagem envidada!');
        } catch (error) {
            res.status(400).send('deu ruim!');
            console.log(error);
        }
    },

    async excludMessage(req, res) {

    },
    
}