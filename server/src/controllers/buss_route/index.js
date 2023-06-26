const knex = require("../../database/index");

module.exports = {
    async cadRoutes(req, res) {
        try {
            const { route_nome: name } = req.body;
            const { route_num: num } = req.body;
           
            //user_user_CPF: cpf, req_data: date,  req_data: env, req_TipoCartao: card
            await knex("bus_route").insert({route_num: num, route_nome: name});
            
            res.status(201).send('mensagem envidada!');
        } catch (error) {
            res.status(400).send('deu ruim!');
            console.log(error);
        }
    },

    async consultRoute(req, res) {
        try {
            const { route_num: num } = req.body;
            const { route_nome: nome } = req.body
            if (num != undefined) {
                const consult = await knex("bus_route").where('route_num', '=', num);
                return res.status(201).send(consult);
            }else
            if (nome != undefined) {
                const consultName = await knex("bus_route").where('route_nome', 'like', `%${nome}%`);
                return res.status(201).send(consultName);
            }
        } catch (error) {
            console.log(error); 
        }
    },

    async attRoutes(req, res){
        try {
            const { rote_id: id } = req.body;
            const { route_nome: name } = req.body;
            const { route_num: num } = req.body;
           
            //user_user_CPF: cpf, req_data: date,  req_data: env, req_TipoCartao: card
            await knex('bus_route').where('rote_id', '=', String(id)).update({route_num: num, route_nome: name});
            
            res.status(201).send('atualizado!');
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async excldRoutes(req, res){
        try {
            const { rote_id: id } = req.body;
            await knex('bus_route').where('rote_id', '=', String(id)).del()
            res.status(201).send('excluido!');
        } catch (error) {
            res.status(400).send(error);
        }
    }
}