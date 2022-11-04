import express, { Request, Response, NextFunction, Router} from 'express';


const nfRoute = Router(); 

//getNotaFiscalporDocumento
nfRoute.get('/nf/:uuid', (req: Request< { uuid: string } >, res:Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send( { uuid });
});

//getNotasFiscais
nfRoute.get('/nfAll', (req: Request, res:Response, next: NextFunction) => {
    const notaFiscalArray = [{ numeroNF: '2123435', RG: '0938421', CEP: '968432201'}];
    res.status(200).send({notaFiscalArray});
});


//post Nota Fiscal
nfRoute.post('/nfNew', (req: Request, res:Response, next: NextFunction) => {
    const newNF = req.body;
    console.log(req.body);
    res.status(200).send(newNF);
});
//delete Nota Fiscal
//get boleto
export default nfRoute;