import express, {Request, Response, NextFunction} from 'express';
import usersRoute  from './routes/users.route';
import nfRoute from './routes/nf.route';
import boletoRoute from './routes/boleto';

const app = express(); 

app.get('/status', (req: Request, res:Response, next:NextFunction) => {
        res.status(200).send({foo:'Sucesso'})
});
app.use(express.json());

app.use(usersRoute);
app.use(nfRoute);
app.use(boletoRoute);
app.use(express.urlencoded({ extended: true}));


app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!')
});