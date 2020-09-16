import { Express } from 'express';
import { getUser, getUsers, postUser } from '../requestHandlers/user';
import { IConfiguration } from '../types/IConfiguration';

export const base = '/api/services/hackoholics';

export const userAPI = (app: Express, configuration: IConfiguration) => {
  app.get(`${base}/users`, (req, res) => {
    getUsers(req, res, configuration);
  });

  app.get(`${base}/users/:useruid`, (req, res) => {
    getUser(req, res, configuration);
  });

  app.post(`${base}/users`, (req, res) => {
    postUser(req, res, configuration);
  });
};
