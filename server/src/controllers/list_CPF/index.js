const knex = require('../../database/index')

module.exports = {
    async createListCpf (req, res) {
        try {
            const { bussines_buss_CNPJ: bussines_buss_CNPJ } = req.body;
            const { list_tipo: list_tipo } = req.body;    
            
            await knex("list_cpf").insert({list_id: null, bussines_buss_CNPJ: bussines_buss_CNPJ, list_tipo: list_tipo});
            res.status(201).send('cadastrado!');
            
        } catch (error) {
            res.status(401).send(error)
            console.log(error);
        }
    },
}