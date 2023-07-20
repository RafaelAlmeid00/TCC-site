/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const knex = require("../../database/index");
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const localData = require('../Middleware');
const cookie = require('cookie-parser');

const dotenv = require('dotenv');
dotenv.config();

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

          }, process.env.JWT_SECRET, { expiresIn: '1000000' });
          console.log('this is req.headers: ', req.headers);

        res.cookie('token', token, {secure: true})  

        return res.status(201).send({
          token: token,
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

  async UpdateToken(req, res) {
    try {
      const { user_CPF: cpf } = req.body;
      console.log(cpf);

      // Use o await para aguardar a consulta ao banco de dados
      const [takeCPF] = await knex("user").where("user_CPF", "=", cpf);

      if (takeCPF !== undefined) {
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

            }, process.env.JWT_SECRET, { expiresIn: '1000000' });
            console.log('this is req.headers: ', req.headers);

            res.cookie('token', token, { secure: true })

            return res.status(201).send({
              token: token,
              message: "ok!"
            });
           } else {
        res.status(400).send('CPF não encontrado');
      }
    } catch (error) {
      res.status(500).send('Erro no servidor');
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
    const { user_CPF: cpf, updates } = req.body; // Recebe um objeto chamado "updates" contendo os campos a serem atualizados

    // Mapeamento dos campos do objeto "updates" para os campos do banco de dados
    const paramToField = {
      nome: 'user_nome',
      email: 'user_email',
      senha: 'user_senha',
      cep: 'user_endCEP',
      num: 'user_endnum',
      uf: 'user_endUF',
      bairro: 'user_endbairro',
      rua: 'user_endrua',
      complemento: 'user_endcomplemento',
      cidade: 'user_endcidade',
    };

    const updateFields = {};
    // Verifica cada campo fornecido no objeto "updates" e mapeia para o campo correspondente no banco de dados
    for (const param in updates) {
      if (paramToField.hasOwnProperty(param)) {
        updateFields[paramToField[param]] = updates[param];
      }
    }
            console.log(updates);

    // Verifica se existem campos válidos para atualização
    if (Object.keys(updateFields).length > 0) {
      // Faça a atualização no banco de dados
      await knex('user').where('user_CPF', '=', cpf).update(updateFields);
      res.status(200).send('Atualização realizada com sucesso.');
    } else {
      res.status(400).send('Nenhum campo válido para atualização fornecido.');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro interno do servidor.');
  }
}

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
