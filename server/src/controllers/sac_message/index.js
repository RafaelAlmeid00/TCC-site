const knex = require("../../database/index");

module.exports = {
    async CadMessage(req, res) {
        try {
            const { sacmen_texto: txt } = req.body;
            const { admin_adm_id: admId } = req.body;
            const { user_user_CPF: cpf } = req.body;
            const { sac_sac_ticket: ticket } = req.body;
            
            await knex("sac_message").insert({ sacmen_texto: txt , admin_adm_id: admId, user_user_CPF: cpf, sac_sac_ticket: ticket });

            res.status(201).send('mensagem envidada!');
        } catch (error) {
            console.log(error);
            res.status(400).send('deu ruim!');
        }
    },
    async SearchMessage(req, res) {
        try {
            const { sac_sac_ticket: ticket } = req.body;

            const take = await knex("sac_message").where('sac_sac_ticket', "=", ticket)
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