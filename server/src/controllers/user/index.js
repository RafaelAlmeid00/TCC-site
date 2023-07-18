/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const knex = require("../../database/index");
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const localData = require('../Middleware');
const cookie = require('cookie-parser');

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
            console.log('aaaaaaaaaaaaaaaa');
            const result = await knex("user");
            res.status(201).json(result);
        } catch (error) {
            console.log('error: ', error);
            return res.status(400).json({ error: error.message });
        }
    },
    
async searchUserEmail(req, res) {
  const { user_email: email } = req.body;
  
  try {
    const takeEmail = await knex("user").where("user_email", "=", email).first();

    if (!takeEmail) {
      return res.status(404).json({ error: "E-mail não encontrado." });
    }

    res.status(200).send(takeEmail);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
},

async searchUserCPF(req, res) {
  const { user_CPF: cpf } = req.body;
  
  try {
    const takeCPF = await knex("user").where("user_CPF", "=", cpf).first();

    if (!takeCPF) {
      return res.status(404).json({ error: "CPF não encontrado." });
    }

    res.status(200).send(takeCPF);
  } catch (error) {
    return res.status(500).json({ error: error.message });
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
            console.log('teste rapidão: ', cpf);

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

  
async UserLogin(req, res) {
  try {
    const { user_CPF: cpf2 } = req.body;
    console.log(cpf2);
    const { user_senha: password } = req.body;
    console.log('this is the password: ', password);

    const [ takeCPF ] = await knex("user").where("user_CPF", "=", String(cpf2));

    if (takeCPF != undefined) {
      bcrypt.compare(password, takeCPF.user_senha, function (err, comp) {
        if (err || comp == false) {
          console.log('comp: ', comp);
          console.log(err);
        } else {
          console.log('this is comp: ', comp);

          const token = JWT.sign({
            user_CPF: takeCPF.user_CPF,
            user_nome: takeCPF.user_nome,
            user_email: takeCPF.user_email,
            user_FotoPerfil: takeCPF.user_FotoPerfil,
            user_nascimento: takeCPF.user_nascimento,
            user_endCEP: takeCPF.user_endCEP,
            user_endUF: takeCPF.user_endUF,
            user_endbairro: takeCPF.user_endbairro,
            user_endrua: takeCPF.user_endrua,
            user_endnum: takeCPF.user_endnum,
            user_endcomplemento: takeCPF.user_endcomplemento,
            user_endcidade: takeCPF.user_endcidade,
            user_tipo: takeCPF.user_tipo

          },'Uz&Nxq6ifp*bqvBJgG$z', { expiresIn: '1000000' });
          console.log('this is req.headers: ', req.headers);

          const userData = {
            user_CPF: takeCPF.user_CPF,
            user_nome: takeCPF.user_nome,
            user_email: takeCPF.user_email,
            user_nascimento: takeCPF.user_nascimento,
            user_endCEP: takeCPF.user_endCEP,
            user_endUF: takeCPF.user_endUF,
            user_endbairro: takeCPF.user_endbairro,
            user_endrua: takeCPF.user_endrua,
            user_endnum: takeCPF.user_endnum,
            user_endcomplemento: takeCPF.user_endcomplemento,
            user_endcidade: takeCPF.user_endcidade,
            user_tipo: takeCPF.user_tipo
        };
        res.cookie('token', token, {secure: true})  

        return res.status(201).send({
          token: token,
          user: userData,
          message: "ok!"
        });
        }
      });
    }else{res.status(400).send('email ou senha inválido')} 
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
},

async DeleteUser (req, res) {
  try {

      const { user_email: data } = req.body;

      console.log('this is cookies 2: ', data);
      console.log('someone here??');
            
      const result = await knex("user").where('user_email', '=', data).del();
      res.cookie('token', '', { expires: new Date(0), httpOnly: true, secure: true });

      res.status(201).json(result);
  } catch (error) {
      console.log('error: ', error);
      return res.status(400).json({ error: error.message });
  }
},

async UpdateUser(req, res) {
  try {
    const { user_CPF: cpf } = req.body;
    const { info: dado } = req.body;
    const { parame: parame } = req.body;

    // Mapeamento dos parâmetros para os campos do banco de dados
    const paramToField = {
      nome: 'user_nome',
      email: 'user_email',
      senha: 'user_senha',
      data: 'user_nascimento'
      // Adicione outros campos do banco de dados conforme necessário
    };
    console.log('Valor de parame:', parame);

    // Verifica se o parâmetro fornecido é válido
    // eslint-disable-next-line no-prototype-builtins
    if (paramToField.hasOwnProperty(parame)) {
      const updateFields = { [paramToField[parame]]: dado };

      // Faça a atualização no banco de dados
      await knex("user").where("user_CPF", "=", cpf).update(updateFields);
      res.status(200).send('foi negada');
    } else {
      res.status(400).send('Parâmetro inválido.');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro interno do servidor.');
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
