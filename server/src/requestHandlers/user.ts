import { Request, Response } from 'express';
import status from 'http-status';
import { Db, MongoClient } from 'mongodb';
import { IConfiguration } from '../types/IConfiguration';

const userCollectionName: string = "users";

export const getUsers = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    return database.collection(userCollectionName).find().toArray()
    .then(users => res.status(status.OK).json(users));
  })
  .catch(err=>console.log(err));
};

export const getUser = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    const useruid = req.params.useruid;
    return database.collection(userCollectionName).findOne({uid: useruid})
    .then(user => res.status(status.OK).json(user));
  })
  .catch(err=>console.log(err));
};

export const postUser = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    const useruid = req.body.uid;
    database.collection(userCollectionName).insertOne(req.body).then(insertedUser => {
      return database.collection(userCollectionName).findOne({uid: useruid})
      .then(user => res.status(status.OK).json(user));
    });    
  })
  .catch(err=>console.log(err));
};