const knex = require("../../database/index");

module.exports = {
    async cadRoutes(req, res) {
        try {
            const { route_nome: name } = req.body;
            const { route_num: num } = req.body;
           //path_routes
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
              /* const test = await knex.select('*').from('routes')
                .join('bus_route').join('bus_stop').where('bus_route_rote_id', '=', consultBus[0].rote_id);
                console.log('this is test: ', test);
                return res.status(201).send(test);*/
                
                const consultName = await knex("bus_route").where('route_num', '=', num);
                const consultRoutes = await knex("routes").where('bus_route_rote_id', '=', consultName[0].rote_id);
                console.log('test consultRoutes: ', consultRoutes);
                var consultStop = new Array
                for (let index = 0; index < consultRoutes.length; index++) {
                    const [ destruct ] = await knex("bus_stop").where('stop_id', '=', consultRoutes[index].bus_stop_stop_id)
                    consultStop.push(destruct);
                    console.log('this is consultStop: ', consultStop);
                    console.log('teste index: ', index, ' and ', consultRoutes.length);
                    
                    if (consultRoutes.length == (index + 1)) {
                        console.log('aaaaaaaaaaaaa');
                        const relatory = {consultName, consultStop}
                        return res.status(201).send(relatory);
                    }
                }
               
               // const granArray = {consul: consultStop[0], consul2: consultBus[0]};
               
               
            }else
            if (nome != undefined) {
                const consultName = await knex("bus_route").where('route_nome', 'like', `%${nome}%`);
                const consultRoutes = await knex("routes").where('bus_route_rote_id', '=', consultName[0].rote_id);
                console.log('test consultRoutes: ', consultRoutes);
                var consultStop = new Array
                for (let index = 0; index < consultRoutes.length; index++) {
                    const [ destruct ] = await knex("bus_stop").where('stop_id', '=', consultRoutes[index].bus_stop_stop_id)
                    consultStop.push(destruct);
                    console.log('this is consultStop: ', consultStop);
                    console.log('teste index: ', index, ' and ', consultRoutes.length);
                    
                    if (consultRoutes.length == (index + 1)) {
                        console.log('aaaaaaaaaaaaa');
                        console.log('this is consul Name: ', consultName);
                        const relatory = {consultName, consultStop}
                        return res.status(201).send(relatory);
                    }
            }}
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