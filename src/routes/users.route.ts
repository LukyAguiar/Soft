import  statusCodes from 'http-status-codes';
import { Router, Request, Response, NextFunction } from 'express';

const usersRoute = Router(); 
var user:any;

usersRoute.get('/users', (req: Request, res:Response, next:NextFunction) => {
    const users = [{userName: user.userName, userEmail: user.userEmail, userCep: user.userCep, userPhone: user.userPhone, userCPF: user.userCPF, userRG:user.userRG,}];
    res.status(statusCodes.OK).send({ users });
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid:string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(statusCodes.OK).send({ uuid })
});

usersRoute.post('/users', (req: Request<{ uuid:string }>, res: Response, next: NextFunction) => {
    const newUser = req.body
    console.log(req.body)
    res.status(statusCodes.CREATED).send(newUser)
    user = newUser;
});

export default usersRoute; 
