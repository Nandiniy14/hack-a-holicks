import { Request, Response } from 'express';
import status from 'http-status';
import { Db, MongoClient } from 'mongodb';
import { IConfiguration } from '../types/IConfiguration';

const bookingCollectionName: string = "bookings";

export const getBookings = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    return database.collection(bookingCollectionName).find().toArray()
    .then(desks => res.status(status.OK).json(desks));
  })
  .catch(err=>console.log(err));
};

export const getBookingsFromDates = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    const starttime = req.query.starttime;
    const endtime = req.query.endtime;
    return database.collection(bookingCollectionName).find({ $and: [ {startDateTime:{$gte:starttime}}, {endDateTime:{$lte:endtime}} ] }).toArray()
    .then(desks => res.status(status.OK).json(desks));
  })
  .catch(err=>console.log(err));
};

export const getBooking = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    const bookinguid = req.params.bookinguid;
    return database.collection(bookingCollectionName).findOne({uid: bookinguid})
    .then(desk => res.status(status.OK).json(desk));
  })
  .catch(err=>console.log(err));
};

export const postBooking = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    if(req.body!= null && !Array.isArray(req.body)){
      const bookinguid = req.body.uid;
      database.collection(bookingCollectionName).insertOne(req.body).then(insertedBooking => {
        return database.collection(bookingCollectionName).findOne({uid: bookinguid})
        .then(booking => res.status(status.OK).json(booking));
      });
    } else {
      database.collection(bookingCollectionName).insertMany(req.body).then(booking => res.status(status.OK).json({}));
    }        
  })
  .catch(err=>console.log(err));
};