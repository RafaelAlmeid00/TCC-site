/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const controllersUser = require('./controllers/user/index');
const routes = express.Router();

routes.get('/user', controllersUser.searchUser);
routes.post('/user', controllersUser.createUser);
routes.delete('/user', controllersUser.deleteUser);
routes.get('/user/login', controllersUser.getLogin)
routes.get('/user/verify', controllersUser.verifyJWT)
routes.post('/user/login', controllersUser.Login)

module.exports = routes;