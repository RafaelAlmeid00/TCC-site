/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const knex = require("../../database/index");

module.exports = {
    async root(req, res) {
        try {
            return res.send("Response of Client Server");
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async searchListWorker(req, res) {
        try {
            const result = await knex("list_worker");
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async createListWorker(req, res) {
        try {
            const { work_CPF: cpf } = req.body;
            const { work_RG: rg } = req.body;
            const { work_nome: name } = req.body;
            const { work_nascimento: date } = req.body;
            const { bussines_buss_CNPJ: cnpj } = req.body;

    await knex("bussines").insert({
        work_CPF: cpf,
        work_RG: rg ,
        work_nome: name,
        work_nascimento: date,
        bussines_buss_CNPJ: cnpj
    });
        return res.status(201).send("Worker registered");
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
    },

    async deleteListWorker(req, res) {
        try {
            const result = await knex("list_worker").del();
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    
};
