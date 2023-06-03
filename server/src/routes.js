/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const controllersUser = require('./controllers/user/index');
const controllersBussines = require('./controllers/bussines/index');
const controllerListCPF = require('./controllers/list_CPF/index');
const controllersSac = require('./controllers/sac/index');
const middleware = require('./controllers/Middleware');


const routes = express.Router();

routes.get('/user', controllersUser.searchUser);
routes.post('/user', controllersUser.createUser);
routes.delete('/user/:del', controllersUser.deleteUser);
routes.get('/user/login', controllersUser.UserLogin);
routes.post('/user/login', controllersUser.UserLogin);

routes.get('/bussines/search/:CNPJ', controllersBussines.SpecificBussines)
routes.get('/bussines', controllersBussines.searchBussines);
routes.post('/bussines', controllersBussines.createBussines);
routes.delete('/bussines/:CNPJ', controllersBussines.deleteBussines);

routes.post('/listCpf', controllerListCPF.createListCpf);
routes.delete('/listCpf/:CNPJ', controllerListCPF.listcpfDelete);

routes.use(middleware.mid);
routes.post('/sac', controllersSac.CadSac);

module.exports = routes;