/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const knex = require("../../database/index");
const { search } = require("../../routes");

module.exports = {
    async root(req, res) {
        try {
            return res.send("Response of Client Server");
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async SpecificBussines (req, res) {
        try {
            const { CNPJ: CNPJ } = req.params;
            const info = await knex("bussines").where('buss_CNPJ', '=', CNPJ);

            res.send(info);
        } catch (error) {
            console.log(error);
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
        /*`buss_CNPJ` VARCHAR(14) NOT NULL,
  `buss_nome` VARCHAR(45) NOT NULL,
  `buss_contato` VARCHAR(45) NOT NULL,
  `buss_endCEP` VARCHAR(9) NOT NULL,
  `buss_endUF` VARCHAR(2) NOT NULL,
  `buss_endrua` VARCHAR(45) NOT NULL,
  `buss_endnum` VARCHAR(45) NOT NULL,
  `buss_endcomplemento` VARCHAR(45) NULL,
  `buss_endcidade` VARCHAR(45) NOT NULL,
  `buss_tipo` ENUM("school", "bussines", "bussinesbus") NOT NULL*/
        try {
            const { buss_CNPJ: cnpj } = req.body;
            const { buss_nome: name } = req.body;
            const { buss_contato: contact } = req.body;
            const { buss_endCEP: cep } = req.body;
            const { buss_endUF: UF } = req.body;
            const { buss_endrua: street } = req.body;
            const { buss_endnum: num } = req.body;
            const { buss_endcomplemento: comp } = req.body;
            const { buss_endcidade: city } = req.body;
            const { buss_tipo: type } = req.body

            /*buss_CNPJ: cnpj,
      buss_nome: name,
      buss_contato: contato,
      buss_endCEP: cep,
      buss_endUF: UF,
      buss_endbairro: district,
      buss_endrua: street,
      buss_endnum: num,
      buss_endcomplemento: comp,
      buss_endcidade: city,
      buss_tipo: tipo,*/
        await knex("bussines").insert({
            buss_CNPJ: cnpj,
            buss_nome: name,
            buss_contato: contact,
            buss_endCEP: cep,
            buss_endUF: UF,
            buss_endrua: street,
            buss_endnum: num,
            buss_endcomplemento: comp,
            buss_endcidade: city,
            buss_tipo: type
        });
        return res.status(201).send("Bussines registered");
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
    },

    async deleteBussines(req, res) {
        try {
            const { CNPJ: CNPJ } = req.params;

            const result = await knex("bussines").where('buss_CNPJ', '=', CNPJ).del();
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    
};
