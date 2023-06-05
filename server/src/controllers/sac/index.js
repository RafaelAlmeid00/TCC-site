const knex = require("../../database/index");

module.exports = {
    async CadSac(req, res) {
        try {
            const { user_user_CPF: cpf } = req.body;
            const { sac_data: date } = req.body;
            
            await knex("sac").insert({user_user_CPF: cpf, sac_data: date});

            res.status(201).send('mensagem envidada!');
        } catch (error) {
            res.status(400).send('deu ruim!');
            console.log(error);
        }
    },
    async Search(req, res) {
        try {
            
            const take = await knex("sac")
            console.log(take);
            res.status(201).send(take);
        } catch (error) {
            res.status(400).send('deu ruim!');
            console.log(error);
        }
    },


    async excludMessage(req, res) {

    },
    
}