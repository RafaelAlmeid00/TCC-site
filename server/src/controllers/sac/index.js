const knex = require("../../database/index");
const idgenerated = require('uniqid')
module.exports = {
    async CadSac(req, res) {
        try {
            const income = idgenerated();
            console.log('thi is income: ', income);
            const { user_user_CPF: cpf } = req.body;
            const { sac_data: date } = req.body;
            
            await knex("sac").insert({ sac_ticket: "3443", user_user_CPF: cpf, sac_data: date });

            res.status(201).send('mensagem envidada!');
        } catch (error) {
            console.log(error);
            res.status(400).send('deu ruim!');
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