import { Router } from 'express';
import { User} from '../models/user.models';

//import { config } from;
//import * as userController from '../controllers/user.controller';
//import * as sessionController from '../controllers/session.controller';

const apiRouter = Router();

/* ROTAS GERAIS */

apiRouter.get('/', (req, res) => {
    return res.json({
        message: 'Nossa primeira rota de API'
    });
});

/* ROTAS DE USUÁRIO*/ 

apiRouter.post('/users/new', (req, res) => {
    const {name, email, password} = req.body;

    const user = new User({name, email, password});

    user.save((error: any, result: any): void => {
        if (error) {
            console.log('Error: ', typeof error);
            res.json(error);

        }

        console.log('Result: ', typeof result);

        res.status(201).json(result);
    });
    
   });

//apiRouter.get('/users/id/:id', userController.view);
//apiRouter.delete('/users/destroy/:id', userController.destroy);

/* ROTAS DE SESSÃO */

//apiRouter.post('/users/new', sessionController.create);

/* ROTAS DE FILME */

/* ROTAS DE LISTA */

export { apiRouter };