const knex = require('../database/index');
const nodemailer = require('nodemailer');
const encrypt = require('bcrypt');
const idgenerated = require('uniqid');
const dotenv = require('dotenv');

module.exports = {

    async EmailRec(req, res) {
        try{
            dotenv.config();
            console.log(process.env);
            const {cpf: cpf} = req.body;
            const [email] = await knex('user').where('user_CPF', "=", cpf);
            var recipient = email.user_email;
            console.log("this is recipient: ", recipient);
            const income = idgenerated.time();
            
            const carga = await encrypt.hash(income, 10);
            console.log('this is carga: ', carga);
            console.log('this is user: ', process.env.USER);
            const Enterprise = nodemailer.createTransport({
                service: 'Gmail',
                type: 'OAuth2',
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASS,
                   },
            })

            const EnvTO = {
                from: process.env.USER,
                to: recipient,
                subject: 'seu código de recuperação é',
                text: income,
              };

            Enterprise.sendMail(EnvTO, function(err, data) {
                if (err) {
                  console.log("Error " + err);
                } else {
                  console.log("Email sent successfully");
                }
              });

            res.status(201).send(carga);
        }catch{
            res.status(401).send('errokkkkkk');
        }
    },

    async compareEmail(req, res){
        try{

        }catch(erro){console.log(erro); res.send(erro)}
    }
}