import { Express } from 'express';
import { ping } from '../requestHandlers/ping';
import { IConfiguration } from '../types/IConfiguration';

export const base = '/api/services/hackoholics';

export const pingAPI = (app: Express, configuration: IConfiguration) => {
  app.get(`${base}/ping`, (req, res) => {
    console.info('service was pinged');
    ping(req, res);
  });
};
