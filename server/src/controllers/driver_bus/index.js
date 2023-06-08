const knex = require("../../database/index");

module.exports = {
    async cadDriver(req, res) {
        try {
   
            const { driver_CPF: Drivercpf } = req.body;
            const { driver_RG: rg } = req.body;
            const { driver_nome: name } = req.body;
            const { driver_imento: num } = req.body;
            const { driver_admissao: comp } = req.body;
            const { driver_demissao: fired } = req.body
           
            await knex("driver_bus").insert({
                driver_CPF: Drivercpf, 
                driver_RG: rg, 
                driver_nome: name, 
                driver_imento: num, 
                driver_admissao: comp,
                driver_demissao: fired,
            });
            
            res.status(201).send('mensagem envidada!');
        } catch (error) {
            res.status(400).send('deu ruim!');
            console.log(error);
        }
    },

    async attDriver (req, res){
        try {
            const { driver_CPF: Drivercpf } = req.body;
            const { driver_nome: name } = req.body;
            const { driver_admissao: comp } = req.body;
            const { driver_demissao: fired } = req.body;
           
            //user_user_CPF: cpf, req_data: date,  req_data: env, req_TipoCartao: card
            await knex('driver_bus').where('driver_cpf', '=', Drivercpf).update({
                driver_nome: name,
                driver_admissao: comp,
                driver_demissao: fired
            });
            
            res.status(201).send('atualizado!');
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
}