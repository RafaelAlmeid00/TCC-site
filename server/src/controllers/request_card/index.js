const knex = require("../../database/index");

module.exports = {
      async searchReqCard(req, res) {
        try {
            const result = await knex("request_card");
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

async searchReqCPF(req, res) {
  const { user_CPF: list_CPF } = req.body;
  
  try {
    const takeCPF = await knex("request_card").where("user_user_CPF", list_CPF);
    res.status(200).send(takeCPF);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
},
    async CadReqCard(req, res) {
        try {
            const { req_data: date } = req.body;
            const { req_TipoCartao: cardTipo } = req.body;
            const { user_user_CPF: user_CPF } = req.body;
            //user_user_CPF: cpf, req_data: date,  req_data: env, req_TipoCartao: card
            await knex("request_card").insert({req_data: date, req_TipoCartao: cardTipo, user_user_CPF: user_CPF});
            
            res.status(201).send('mensagem envidada!');
        } catch (error) {
            res.status(400).send('deu ruim!');
            console.log(error);
        }
    },
}