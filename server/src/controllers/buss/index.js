const knex = require("../../database/index");

module.exports = {
    async cadBuss(req, res) {
        try {
            const { bus_id: busid } = req.body;
            const { bus_nome: name } = req.body;
            const { bus_num: num } = req.body;
            const { bus_placa: placa } = req.body;
            const { bus_fabricacao: fab } = req.body;
            const { bus_status: stats } = req.body;
            const { bus_modelo: model } = req.body;
            const { bus_tarifa: tribute } = req.body;
            const { bussines_buss_CNPJ: cnpj } = req.body;
            const { bus_route_rote_id: id } = req.body;
           
            await knex("buss").insert({
                bus_id: busid,
                bus_nome: name, 
                bus_num: num, 
                bus_placa: placa, 
                bus_fabricacao: fab, 
                bus_status: stats,
                bus_modelo: model,
                bus_tarifa: tribute,
                bussines_buss_CNPJ: cnpj,
                bus_route_rote_id: id
            });
            
            res.status(201).send('mensagem envidada!');
        } catch (error) {
            res.status(400).send('deu ruim!');
            console.log(error);
        }
    },
    async attBuss (req, res){
        try {
            const { bus_id: id } = req.body;
            const { bus_nome: name } = req.body;
            const { bus_num: num } = req.body;
            const { bus_status: stats } = req.body;
            const { bus_route_rote_id: idx } = req.body;
           
            //user_user_CPF: cpf, req_data: date,  req_data: env, req_TipoCartao: card
            await knex('buss').where('bus_id', '=', String(id)).update({bus_num: num, bus_nome: name, bus_status: stats, bus_route_rote_id: idx});
            
            res.status(201).send('atualizado!');
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async exlcdBuss(req, res){
        try {
            const { bus_id: id } = req.body;
            await knex('buss').where('bus_id', '=', String(id)).del();
            res.status(201).send('excluido!');
        } catch (error) {
            res.status(400).send(error);
        }
    }
}