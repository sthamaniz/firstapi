import './env';

import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';

import routes from './routes';

import * as errorHandler from './middlewares/errorHandler';


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * get routes
 */
app.use('/', routes);

/**
 * route not found error
 */
app.use(errorHandler.notFound);

/**
 * generic errors
 */
app.use(errorHandler.genericErrors);

export default app;