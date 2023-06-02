/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const knex = require("../../database/index");
const JWT = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const bcrypt = require('bcrypt');
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
            const { list_CPF_list_id: id } = req.body;

            const senha = await bcrypt.hash(password, 10);

            await knex("user").insert({
                user_CPF: cpf,
                user_RG: rg,
                user_nome: name,
                user_email: email,
                user_senha: senha,
                user_nascimento: date,
                user_endCEP: cep,
                user_endUF: UF,
                user_endbairro: district,
                user_endrua: street,
                user_endnum: num,
                user_endcomplemento: comp,
                user_endcidade: city,
                user_tipo: type,
                list_CPF_list_id: id
            });

        return res.status(201).send("User registered");
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
    },

    async deleteUser(req, res) {
        try {
            const { del:del } = req.params;

            const result = await knex("user").where('user_CPF', '=', del).del();
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    
    async UserLogin(req, res) {
        try {
            const { user_CPF: cpf2 } = req.body;
            const { user_senha: password } = req.body;
            
            const [ takeCPF ] = await knex("user").where("user_CPF", "=", cpf2);
            console.log(takeCPF);
            if (takeCPF != undefined) {
                bcrypt.compare(password, takeCPF.user_senha, function (err, comp) {
                    if (err) {
                        console.log(err);
                    }else{
                        console.log(comp);
                        const token = JWT.sign({
                            user_nome: takeCPF.user_nome,
                            user_email: takeCPF.user_email,
                            user_CPF: takeCPF.user_FotoPerfil
                        }, 'Uz&Nxq6ifp*bqvBJgG$z',{ expiresIn: '1h'});

                        return res.status(201).send({
                            token: token,
                            message: "ok!"
                        });
                        
                }})
            }
          
        } catch (error) {
            res.status(400).send(error);
            console.log(error);
        }
    },
     //recuperação por nome protótipo
    /*async UserNameLogin(req, res){
        try {
            const { user_nome: nome } = req.body;
            const { user_endUF: UF } = req.body;
            const { user_senha: password } = req.body;
            
            const takeNomerec = await knex("user").where("user_nome", "=", nome);
            let index = 0;
            for (index <= takeNomerec.length; index++;) {

                bcrypt.compare(password, takeNomerec[index].user_senha, function (err, comp) {
                    if (err) {
                        console.log(err);
                    }else{
                        console.log('default', comp);
                        switch (comp) {
                            case true:
                                console.log(index);
                                const token = JWT.sign({
                                    
                                })
                                break;
                        
                            default:
                                break;
                        }
                    }
                })
                
            }
        } catch (error) {
            
        }
    } */
};
