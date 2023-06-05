/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cookie = require('cookie-parser')

//controllers
const controllersUser = require('./controllers/user/index');
const controllersBussines = require('./controllers/bussines/index');
const controllerListCPF = require('./controllers/list_CPF/index');
const controllersSac = require('./controllers/sac/index');
const controllersRequestCard = require('./controllers/request_card/index');
const controllerBusRoute = require('./controllers/buss_route/index');
const controllerBuss = require('./controllers/buss/index');

const middleware = require('./controllers/Middleware');

const routes = express.Router();

routes.use(cookie())

routes.post('/user', controllersUser.createUser);
routes.get('/user/login', controllersUser.UserLogin);
routes.post('/user/login', controllersUser.UserLogin);

routes.get('/bussines/search/:CNPJ', controllersBussines.SpecificBussines)
routes.get('/bussines', controllersBussines.searchBussines);
routes.post('/bussines', controllersBussines.createBussines);
routes.delete('/bussines/:CNPJ', controllersBussines.deleteBussines);

routes.post('/listcpf', controllerListCPF.createListCpf);
routes.delete('/listcpf/:CNPJ', controllerListCPF.listcpfDelete);
routes.get('/listcpf', controllerListCPF.searchListCpf);
 
routes.use(middleware.mid);

routes.post('/routes', controllerBusRoute.cadRoutes);
routes.put('/routes', controllerBusRoute.attRoutes);
routes.delete('/routes', controllerBusRoute.excldRoutes);

routes.post('/buss', controllerBuss.cadBuss);
routes.put('/buss', controllerBuss.attBuss);
routes.delete('/buss', controllerBuss.exlcdBuss);

routes.post('/card', controllersRequestCard.CadReqCard);


routes.post('/sac', controllersSac.CadSac);
routes.get('/sac', controllersSac.Search);

routes.get('/user', controllersUser.searchUser);

module.exports = routes;