const knex = require("../../database/index");
const idgenerated = require('uniqid')
module.exports = {
    async CadSac(req, res) {
        try {
           
            const { user_user_CPF: cpf } = req.body;
            const { sac_data: date } = req.body;

            const income = idgenerated.time();
            console.log('thi is income: ', income);
            console.log('loga essa prr ai: ', cpf, date);
            
            await knex("sac").insert({ sac_ticket: income, user_user_CPF: String(cpf), sac_data: date });
            //dps colocar o "income" no localstorage do front pra ele ficar com o ticket da mensagem...
            res.status(201).json({message: 'mensagem envidada!', income: income});
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