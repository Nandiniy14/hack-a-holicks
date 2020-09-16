import bodyParser from 'body-parser';
import cors from 'cors';
import express, { ErrorRequestHandler, Express, NextFunction, Request, Response } from 'express';
import { Server } from 'http';
import { bookingAPI } from '../api/bookingAPI';
import { deskAPI } from '../api/deskAPI';
import { pingAPI } from '../api/pingAPI';
import { userAPI } from '../api/userAPI';
import { workspaceAPI } from '../api/workspaceAPI';
import { IConfiguration } from '../types/IConfiguration';

export const start = (configuration: IConfiguration) => {
  console.info('starting server...');
  return new Promise<Server>((resolve, reject) => {
    if (
      !configuration ||
      !configuration.mongo_db_name ||
      !configuration.mongo_port ||
      !configuration.mongo_server ||
      !configuration.server_port
    ) {
      reject('invalid options object');
    }

    const app: Express = express();

    // bypass cors in dev environment
    if (process.env.NODE_ENV !== 'production') {
      app.use(
        cors({
          optionsSuccessStatus: 200,
          origin: '*',
        })
      );
    }

    // setup app to be able to parse json in request bodies
    app.use(bodyParser.json());
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    // setup generic error handler for application
    app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
      console.error('Something went wrong');
      reject(new Error('unexpected error.'));
      res.status(500).send('Internal server error');
    });

    console.info('adding api routes...');
    pingAPI(app, configuration);
    userAPI(app, configuration);
    workspaceAPI(app, configuration);
    deskAPI(app, configuration);
    bookingAPI(app, configuration);

    console.info('server started!');
    const server = app.listen(configuration.server_port, () => resolve(server));
  });
};

export default start;
