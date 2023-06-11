/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cookie = require('cookie-parser');

//controllers
const controllersUser = require('./controllers/user/index');
const controllersBussines = require('./controllers/bussines/index');
const controllerListCPF = require('./controllers/list_CPF/index');
const controllersSac = require('./controllers/sac/index');
const controllersRequestCard = require('./controllers/request_card/index');
const controllerBusRoute = require('./controllers/buss_route/index');
const controllerBuss = require('./controllers/buss/index');
const controllerStop = require('./controllers/bus_stop/index');
const controllerTurn = require('./controllers/turn_bus/index');
const controllerDriver = require('./controllers/driver_bus/index');

const middleware = require('./controllers/Middleware');

const routes = express.Router();

routes.use(cookie());

routes.post('/user', controllersUser.createUser);
routes.get('/user/login', controllersUser.UserLogin);
routes.post('/user/login', controllersUser.UserLogin);

routes.post('/user/delete', controllersUser.DeleteUser)
//👇 middlleware pra uma maior proteção do sistéma 👇
routes.use(middleware.mid);


routes.get('/bussines/search/:CNPJ', controllersBussines.SpecificBussines)
routes.get('/bussines', controllersBussines.searchBussines);
routes.post('/bussines', controllersBussines.createBussines);
routes.delete('/bussines/:CNPJ', controllersBussines.deleteBussines);

routes.post('/listcpf', controllerListCPF.createListCpf);
routes.delete('/listcpf/:CNPJ', controllerListCPF.listcpfDelete);
routes.get('/listcpf', controllerListCPF.searchListCpf);
 
routes.post('/routes', controllerBusRoute.cadRoutes);
routes.put('/routes', controllerBusRoute.attRoutes);
routes.delete('/routes', controllerBusRoute.excldRoutes);

routes.post('/buss', controllerBuss.cadBuss);
routes.put('/buss', controllerBuss.attBuss);
routes.delete('/buss', controllerBuss.exlcdBuss);

routes.post('/buss/stop', controllerStop.cadStop);
routes.put('/buss/stop', controllerStop.attStop);
routes.delete('/buss/stop', controllerStop.exlcdStop);

routes.post('/turn', controllerTurn.cadTurn);
routes.delete('/turn', controllerTurn.exlcdTurn);

routes.post('/driver', controllerDriver.cadDriver);
routes.delete('/driver', controllerDriver.attDriver);

routes.post('/card', controllersRequestCard.CadReqCard);

routes.post('/sac', controllersSac.CadSac);
routes.get('/sac', controllersSac.Search);

routes.get('/user', controllersUser.searchUser);

module.exports = routes;