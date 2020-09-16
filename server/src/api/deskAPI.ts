import { Express } from 'express';
import { getDesk, getDesks, getDesksFromFloor, postDesk } from '../requestHandlers/desk';
import { IConfiguration } from '../types/IConfiguration';

export const base = '/api/services/hackoholics';

export const deskAPI = (app: Express, configuration: IConfiguration) => {
  app.get(`${base}/desks`, (req, res) => {
    getDesks(req, res, configuration);
  });

  app.get(`${base}/floor/:flooruid/desks`, (req, res) => {
    getDesksFromFloor(req, res, configuration);
  });

  app.get(`${base}/desks/:deskuid`, (req, res) => {
    getDesk(req, res, configuration);
  });

  app.post(`${base}/desks`, (req, res) => {
    postDesk(req, res, configuration);
  });
};
