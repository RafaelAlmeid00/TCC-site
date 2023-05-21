/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const controllersUser = require('./controllers/user/index');
const controllersBussines = require('./controllers/bussines/index')
const controllerListWorker = require('./controllers/list_worker/index');
const routes = express.Router();

routes.get('/user', controllersUser.searchUser);
routes.post('/user', controllersUser.createUser);
routes.delete('/user', controllersUser.deleteUser);
routes.get('/user/login', controllersUser.getLogin)
routes.get('/user/verify', controllersUser.verifyJWT)
routes.post('/user/login', controllersUser.Login)

routes.get('/bussines', controllersBussines.searchBussines);
routes.post('/bussines', controllersBussines.createBussines);
routes.delete('/bussines', controllersBussines.deleteBussines);

routes.get('/listworker', controllerListWorker.searchListWorker);
routes.post('/listworker', controllerListWorker.createListWorker);
routes.delete('/listworker', controllerListWorker.deleteListWorker);

module.exports = routes;