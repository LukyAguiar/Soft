"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const boletoRoute = (0, express_1.Router)();
boletoRoute.get('/boletov2/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
});
boletoRoute.get('/boletov2', (req, res, next) => {
    const newBoleto = req.body;
    console.log(req.body);
    res.status(200).send(newBoleto);
});
exports.default = boletoRoute;
