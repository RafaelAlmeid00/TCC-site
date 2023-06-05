const knex = require("../../database/index");

module.exports = {
    async CadReqCard(req, res) {
        try {
            const { req_data: date } = req.body;
            const { req_data: env } = req.body;
            const { req_TipoCartao: card } = req.body;
            const { user_user_CPF: cpf } = req.body;
            //user_user_CPF: cpf, req_data: date,  req_data: env, req_TipoCartao: card
            await knex("request_card").insert({req_data: date, req_envio: env, req_TipoCartao: card, user_user_CPF: cpf});
            
            res.status(201).send('mensagem envidada!');
        } catch (error) {
            res.status(400).send('deu ruim!');
            console.log(error);
        }
    },
}