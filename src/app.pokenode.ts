// Init
import { config } from 'dotenv';
import express from 'express';

import exphbs from 'express-handlebars';
import { resolve } from 'path';
import {pokerouter} from './app.pokerouter'

// variables env

config({path:'variables.env'});
const PORT = process.env.PORT || 5000


// Input
const app = express();

// handlebars config
app.set('views', resolve(process.cwd(),"src", "views"));
app.engine('.hbs', exphbs({extname:'.hbs'}));
app.set('view engine', '.hbs');


// routes
app.use(pokerouter);


// Output
app.listen(PORT, () => {
  console.log (`The server is running http://localhost:${PORT}`)
})
