const knex = require("../../database/index");

module.exports = {
    async cadTurn(req, res) {
        try {

            const { turn_inicio: begin } = req.body;
            const { turn_fim: end } = req.body;
            const { driver_bus_driver_CPF: Drivercpf } = req.body;
            const { buss_bus_id: busid } = req.body;
           
            await knex("turn_bus").insert({
                turn_inicio: begin, 
                turn_fim: end, 
                driver_bus_driver_CPF: Drivercpf, 
                buss_bus_id: busid, 
            });
            
            res.status(201).send('mensagem envidada!');
        } catch (error) {
            res.status(400).send('deu ruim!');
            console.log(error);
        }
    },
    async exlcdTurn(req, res){
        try {
            const { turn_id: id } = req.body;
            await knex('turn_bus').where('turn_id', '=', id).del();
            res.status(201).send('excluido!');
        } catch (error) {
            res.status(400).send(error);
        }
    }
}