"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const nf_route_1 = __importDefault(require("./routes/nf.route"));
const boleto_1 = __importDefault(require("./routes/boleto"));
const app = (0, express_1.default)();
app.get('/status', (req, res, next) => {
    res.status(200).send({ foo: 'Sucesso' });
});
app.use(express_1.default.json());
app.use(users_route_1.default);
app.use(nf_route_1.default);
app.use(boleto_1.default);
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});
