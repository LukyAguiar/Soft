import  statusCodes from 'http-status-codes';
import { Router, Request, Response, NextFunction } from 'express';

const billetRoute = Router(); 

billetRoute.post('/postBillet', (req: Request<{ uuid:string }>, res: Response, next: NextFunction) => {
    const newBilletUser = req.body
    console.log(req.body)
    res.status(statusCodes.CREATED).send(newBilletUser)
    console.log(newBilletUser);
});

export default billetRoute; 