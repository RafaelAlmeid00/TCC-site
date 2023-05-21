/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const knex = require("../../database/index");
const JWT = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    async root(req, res) {
        try {
            return res.send("Response of Client Server");
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async searchUser(req, res) {
        try {
            const result = await knex("user");
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async createUser(req, res) {
        try {
            const { user_CPF: cpf } = req.body;
            const { user_RG: rg } = req.body;
            const { user_nome: name } = req.body;
            const { user_email: email } = req.body;
            const { user_senha: password } = req.body;
            const { user_nascimento: date } = req.body;
            const { user_endCEP: cep } = req.body;
            const { user_endUF: UF } = req.body;
            const { user_endbairro: district } = req.body;
            const { user_endrua: street } = req.body;
            const { user_endnum: num } = req.body;
            const { user_endcomplemento: comp } = req.body;
            const { user_endcidade: city } = req.body;
            const { user_tipo: type } = req.body;
            const { list_worker_bussines_buss_CNPJ: bussinesCNPJ } = req.body;
            const { list_students_stud_matricula: matriculation } = req.body;
            const { list_students_schools_sch_CNPJ: schoolsCNPJ } = req.body;

    await knex("user").insert({
        user_CPF: cpf,
        user_RG: rg,
        user_nome: name,
        user_email: email,
        user_senha: password,
        user_nascimento: date,
        user_endCEP: cep,
        user_endUF: UF,
        user_endbairro: district,
        user_endrua: street,
        user_endnum: num,
        user_endcomplemento: comp,
        user_endcidade: city,
        user_tipo: type,
        list_worker_bussines_buss_CNPJ: bussinesCNPJ,
        list_students_stud_matricula: matriculation,
        list_students_schools_sch_CNPJ: schoolsCNPJ
    });
        return res.status(201).send("User registered");
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
    },

    async deleteUser(req, res) {
        try {
            const result = await knex("user").del();
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    
    async verifyJWT(req, res, next) {
        const token = req.headers['x-access-token'];
        console.log(token)
    if (!token) {
        res.send({ auth: false, message: 'No token received' });
    } else {
        JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.send({ auth: false, message: 'Failed to authenticate' });
            } else {
                req.userId = decoded.id;
            res.status(201).json('Logado com o token: ' + token);
                next();
            }
        });
    }
},

async getLogin(req, res) {
    const token = req.headers['x-access-token'];
    console.log(token);

    if (!token) {
        res.send({ auth: false, message: 'No token received' });
    } else {
        JWT.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                res.send({ auth: false, message: 'Failed to authenticate' });
            } else {
                try {
                    const user = await knex('user').where('user_id', decoded.id).first();
                    if (!user) {
                        res.send({ auth: false, message: 'User not found' });
                    } else {
                        res.send({ auth: true, user: user });
                    }
                } catch (error) {
                    res.send({ auth: false, message: 'Database error' });
                }
            }
        });
    }
},
    
    async Login(req, res) {
        const { user_CPF: cpf, user_password: password } = req.body;
    
        try {
        const user = await knex('user').where('user_CPF', cpf).first();
    
        if (!user) {
            return res.json({ auth: false, message: 'User does not exist' });
        } else {
        console.log(process.env.JWT_SECRET)
        const token = JWT.sign({ id: user.user_id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        req.session.user = user.user_name;
        res.json({ auth: true, token: token, result: user.user_name });
    }
        } catch (error) {
            res.json({ message: error.message });
        }
    },
    
};
