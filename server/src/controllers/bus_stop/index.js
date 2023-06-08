const knex = require("../../database/index");

module.exports = {
    async cadStop(req, res) {
        try {
   
            const { stop_endCEP: cep } = req.body;
            const { stop_endUF: uf } = req.body;
            const { stop_endrua: rua } = req.body;
            const { stop_endnum: num } = req.body;
            const { stop_endcomplemento: comp } = req.body;
            const { stop_endcidade: city } = req.body
           
            await knex("bus_stop").insert({
                stop_endCEP: cep, 
                stop_endUF: uf, 
                stop_endrua: rua, 
                stop_endnum: num, 
                stop_endcomplemento: comp,
                stop_endcidade: city,
            });
            
            res.status(201).send('mensagem envidada!');
        } catch (error) {
            res.status(400).send('deu ruim!');
            console.log(error);
        }
    },

    async attStop (req, res){
        try {
            const { stop_id: id } = req.body;
            const { stop_endCEP: cep} = req.body;
            const { stop_endUF: uf } = req.body;
            const { bus_num: num } = req.body;
            const { stop_endrua: rua } = req.body;
            const { stop_endcomplemento: comp } = req.body;
            const { stop_endcidade: city } = req.body;
           
            //user_user_CPF: cpf, req_data: date,  req_data: env, req_TipoCartao: card
            await knex('bus_stop').where('stop_id', '=', id).update({
                stop_endCEP: cep, 
                stop_endUF: uf, 
                stop_endrua: rua, 
                stop_endnum: num, 
                stop_endcomplemento: comp,
                stop_endcidade: city,});
            
            res.status(201).send('atualizado!');
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async exlcdStop(req, res){
        try {
            const { stop_id: id } = req.body;
            await knex('bus_stop').where('stop_id', '=', id).del();
            res.status(201).send('excluido!');
        } catch (error) {
            res.status(400).send(error);
        }
    }
}