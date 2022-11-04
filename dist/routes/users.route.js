"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRoute = (0, express_1.Router)();
usersRoute.get('/users', (req, res, next) => {
    const users = [{ userName: 'Aguiar', userEmail: 'lucas.nunes@outlook.com.br', cep: '06882-700', telefone: '' }];
    res.json(users);
});
usersRoute.get('/users/:uuid');
usersRoute.post('/users');
usersRoute.put('/users/:uuid');
exports.default = usersRoute;
