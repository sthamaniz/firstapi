import './env';

import * as express from "express";
import * as bodyParser from "body-parser";

import routes from './routes';

import * as notFoundError from './errors/notFound';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//configuring routes
app.use('/', routes);

//handling no route found error
app.use(notFoundError.notFound);

export default app;