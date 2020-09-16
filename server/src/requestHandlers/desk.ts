import { Request, Response } from 'express';
import status from 'http-status';
import { Db, MongoClient } from 'mongodb';
import { IConfiguration } from '../types/IConfiguration';

const deskCollectionName: string = "desks";

export const getDesks = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    return database.collection(deskCollectionName).find().toArray()
    .then(desks => res.status(status.OK).json(desks));
  })
  .catch(err=>console.log(err));
};

export const getDesksFromFloor = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    const floor = req.params.flooruid;
    return database.collection(deskCollectionName).find({flooruid: floor}).toArray()
    .then(desks => res.status(status.OK).json(desks));
  })
  .catch(err=>console.log(err));
};

export const getDesk = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    const deskuid = req.params.deskuid;
    return database.collection(deskCollectionName).findOne({uid: deskuid})
    .then(desk => res.status(status.OK).json(desk));
  })
  .catch(err=>console.log(err));
};

export const postDesk = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    if(req.body!= null && !Array.isArray(req.body)){
      const deskuid = req.body.uid;
      database.collection(deskCollectionName).insertOne(req.body).then(insertedDesk => {
        return database.collection(deskCollectionName).findOne({uid: deskuid})
        .then(desk => res.status(status.OK).json(desk));
      });
    } else {
      database.collection(deskCollectionName).insertMany(req.body).then(desk => res.status(status.OK).json({}));
    }        
  })
  .catch(err=>console.log(err));
};