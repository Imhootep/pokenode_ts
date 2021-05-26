import {Router} from 'express';
import{PokeHandler} from './handlers/pokehandler'

const pokerouter = Router();

// root Homepage
//pokerouter.get('/', (req: Request, res: Response) => {
 // res.send('coucou petit pokemon, vient voir mes boules ....')
//});

pokerouter.get('/', PokeHandler.rootPage );

export {pokerouter};