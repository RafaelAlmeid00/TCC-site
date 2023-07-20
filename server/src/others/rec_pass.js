const knex = require('../database/index');
const nodemailer = require('nodemailer');
const idgenerated = require('uniqid')

module.exports = {

    async EmailRec(req, res) {
        try{
            const {cpf: cpf} = req.body;
            const [email] = await knex('user').where('user_CPF', "=", cpf);
            var recipient = email.user_email;
            console.log("this is recipient: ", recipient);
            const income = idgenerated.time();
            

            const Enterprise = nodemailer.createTransport({
                service: 'Gmail',
                type: 'OAuth2',
                auth: {
                    user: 'easypass130@gmail.com',
                    pass: 'mjfncoxtlyucfadk',
                   },
            })

            const EnvTO = {
                from: 'easypass130@gmail.com',
                to: recipient,
                subject: 'seu código é',
                text: income,
              };

            Enterprise.sendMail(EnvTO, function(err, data) {
                if (err) {
                  console.log("Error " + err);
                } else {
                  console.log("Email sent successfully");
                }
              });
            res.status(201).send('foiskk');
        }catch{
            res.status(401).send('errokkkkkk');
        }
    }

}