import express, {Request, Response, NextFunction} from 'express';

const app = express(); 

app.get('/status', (req: Request, res:Response, next:NextFunction) => {
        res.status(200).send({foo:'bar 10'})
});

app.get('/cadastro', (req: Request, res:Response, next:NextFunction) => {
    res.status(200).send({
        nome:'',
        email:'',
        cep:'',
        telefone:'',
        cidade:''})
});

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!')
});