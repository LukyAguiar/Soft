import express, {Request, Response, NextFunction} from 'express';
import usersRoute  from './routes/users.route';
import nfRoute from './routes/nf.route';
import boletoRoute from './routes/boleto';
import billetRoute  from './routes/users.route';


const app = express(); 

// Configuração da Aplicação para receber JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/status', (req: Request, res:Response, next:NextFunction) => {
        res.status(200).send({foo:'Sucesso'})
});
app.use(express.json());

app.use(usersRoute);
app.use(nfRoute);
app.use(boletoRoute);
app.use(express.urlencoded({ extended: true}));


// Configurações de Rotas 
app.use(usersRoute); // Rota dos Usuarios {Cadastro & Busca de cadastro}
app.use(billetRoute); // Rota dos Boletos {Cadastro}


// Inicialização do servidor 
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!')
});