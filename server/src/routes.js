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
const controllerMessage = require('./controllers/sac_message/index')
const othersRec_Pass = require('./others/rec_pass')

const middleware = require('./controllers/Middleware');

const routes = express.Router();

routes.use(cookie());


routes.post('/user', controllersUser.createUser);
routes.get('/user/login', controllersUser.UserLogin);
routes.post('/user/login', controllersUser.UserLogin);
routes.post('/user/email', controllersUser.searchUserEmail);
routes.post('/user/cpf', controllersUser.searchUserCPF);
routes.post('/user/token', controllersUser.UpdateToken);
routes.post('/user/login/PassRec', othersRec_Pass.EmailRec);


routes.post('/bussines', controllersBussines.createBussines);
routes.get('/bussines', controllersBussines.searchBussines);

routes.post('/user/update', controllersUser.UpdateUser);

routes.post('/listcpf', controllerListCPF.createListCpf);
routes.delete('/listcpf/:CNPJ', controllerListCPF.listcpfDelete);
routes.get('/listcpf', controllerListCPF.searchListCpf);
routes.post('/listcpf/search', controllerListCPF.searchCpf);


routes.post('/card', controllersRequestCard.CadReqCard);
routes.get('/card', controllersRequestCard.searchReqCard);
routes.post('/card/search', controllersRequestCard.searchReqCPF);

//👇 middlleware pra uma maior proteção do sistéma 👇
routes.use(middleware.mid);
routes.post('/user/delete', controllersUser.DeleteUser);
routes.get('/bussines/search/:CNPJ', controllersBussines.SpecificBussines)

routes.delete('/bussines/:CNPJ', controllersBussines.deleteBussines);

routes.post('/routes', controllerBusRoute.cadRoutes);
routes.put('/routes', controllerBusRoute.attRoutes);
routes.delete('/routes', controllerBusRoute.excldRoutes);
routes.post('/routes/search', controllerBusRoute.consultRoute);

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


routes.post('/sac', controllersSac.CadSac);
routes.get('/sac', controllersSac.Search);

routes.post('/message', controllerMessage.CadMessage);
routes.get('/message', controllerMessage.SearchMessage)
module.exports = routes;