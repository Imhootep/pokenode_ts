import { Request, Response} from 'express';

class PokeHandler {
    // root page response
    static rootPage = (req: Request, res: Response) => {
      res.send('coucou petit pokémon!!!');
    };
}

export {PokeHandler};