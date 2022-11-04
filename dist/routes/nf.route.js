"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nfRoute = (0, express_1.Router)();
nfRoute.get('/nf/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
});
nfRoute.get('/nfAll', (req, res, next) => {
    const notaFiscalArray = [{ numeroNF: '2123435', RG: '0938421', CEP: '968432201' }];
    res.status(200).send({ notaFiscalArray });
});
nfRoute.post('/nfNew', (req, res, next) => {
    const newNF = req.body;
    console.log(req.body);
    res.status(200).send(newNF);
});
exports.default = nfRoute;
