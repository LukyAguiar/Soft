import { Router, Request, Response, NextFunction } from 'express';

const usersRoute = Router(); 

usersRoute.get('/users', (req: Request, res:Response, next:NextFunction) => {
    const users = [{userName: 'Aguiar', userEmail: 'lucas.nunes@outlook.com.br', cep:'06882-700', telefone:''}];
    res.json(users);
});

usersRoute.get('/users/:uuid')

usersRoute.post('/users')

usersRoute.put('/users/:uuid')

export default usersRoute;