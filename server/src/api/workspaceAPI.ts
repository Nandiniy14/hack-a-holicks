import { Express } from 'express';
import { getBuilding, getBuildings, getLocation, getLocations, postLocation } from '../requestHandlers/workspace';
import { IConfiguration } from '../types/IConfiguration';

export const base = '/api/services/hackoholics';

export const workspaceAPI = (app: Express, configuration: IConfiguration) => {
  app.get(`${base}/locations`, (req, res) => {
    getLocations(req, res, configuration);
  });

  app.get(`${base}/locations/:locationuid`, (req, res) => {
    getLocation(req, res, configuration);
  });

  app.post(`${base}/locations`, (req, res) => {
    postLocation(req, res, configuration);
  });

  app.get(`${base}/locations/:locationuid/buildings`, (req, res) => {
    getBuildings(req, res, configuration);
  });

  app.get(`${base}/locations/:locationuid/buildings/:buildinguid`, (req, res) => {
    getBuilding(req, res, configuration);
  });

  // app.post(`${base}/locations/:locationuid/buildings`, (req, res) => {
  //   postBuilding(req, res, configuration);
  // });
};
