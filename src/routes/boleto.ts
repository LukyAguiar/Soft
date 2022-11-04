import express, { Request, Response, NextFunction, Router} from 'express';

const boletoRoute = Router(); 


//getBoletoSegundaViaPeloCPF
boletoRoute.get('/boletov2/:uuid', (req: Request< { uuid: string } >, res:Response, next: NextFunction) => {
    const boletoV2Array = [{ numeroBoleto: '2123435sdiksaghjknvskf69856=3812bfmndk3496874', RG: '0938421', CEP: '968432201'}];
    res.status(200).send({boletoV2Array});
});

//postBoletoSegundaViaPeloCPF
// boletoRoute.post('/boletov2', (req: Request, res:Response, next: NextFunction) => {
//     const newBoleto = req.body;
//     console.log(req.body);
//     res.status(200).send(newBoleto);
// });

export default boletoRoute;