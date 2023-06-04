const knex = require('../../database/index')

module.exports = {

    async searchListCpf(req, res) {
        try {
            const result = await knex("list_cpf");
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

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

    async listcpfDelete (req, res){
        try {
            const { CNPJ:CNPJ } = req.params;
            await knex("list_cpf").where("bussines_buss_CNPJ", "=", CNPJ).del();
            res.status(201).send("executamos os caras!");
        } catch (error) {
            res.status(401).send(error);
            console.log(error);
        }
    }
}