/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const knex = require("../../database/index");

module.exports = {
    async root(req, res) {
        try {
            return res.send("Response of Client Server");
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async searchBussines(req, res) {
        try {
            const result = await knex("bussines");
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async createBussines(req, res) {
        try {
            const { buss_CNPJ: cnpj } = req.body;
            const { buss_nome: name } = req.body;
            const { buss_contato: contact } = req.body;
            const { buss_endCEP: cep } = req.body;
            const { buss_endUF: UF } = req.body;
            const { buss_endbairro: district } = req.body;
            const { buss_endrua: street } = req.body;
            const { buss_endnum: num } = req.body;
            const { buss_endcomplemento: comp } = req.body;
            const { buss_endcidade: city } = req.body;

    await knex("bussines").insert({
        buss_CNPJ: cnpj,
        buss_nome: name,
        buss_contato: contact,
        buss_endCEP: cep,
        buss_endUF: UF,
        buss_endbairro: district,
        buss_endrua: street,
        buss_endnum: num,
        buss_endcomplemento: comp,
        buss_endcidade: city,
    });
        return res.status(201).send("Bussines registered");
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
    },

    async deleteBussines(req, res) {
        try {
            const result = await knex("bussines").del();
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    
};
