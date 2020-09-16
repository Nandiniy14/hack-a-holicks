import { Request, Response } from 'express';
import status from 'http-status';
import { Db, MongoClient } from 'mongodb';
import { IConfiguration } from '../types/IConfiguration';

const workspaceCollectionName: string = "workspace";

export const getLocations = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    return database.collection(workspaceCollectionName).find().toArray();
  })
  .then(locations => res.status(status.OK).json(locations))
  .catch(err=>console.log(err));
};

export const getLocation = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    const locationuid = req.params.locationuid;
    return database.collection(workspaceCollectionName).findOne({uid: locationuid})
    .then(location => res.status(status.OK).json(location));
  })
  .catch(err=>console.log(err));
};

export const postLocation = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    const locationuid = req.body.uid;
    database.collection(workspaceCollectionName).insertOne(req.body).then(insertedLocation => {
      return database.collection(workspaceCollectionName).findOne({uid: locationuid}).then(
        location => res.status(status.OK).json(location)
      );
    });    
  })
  .catch(err=>console.log(err));
};

export const getBuildings = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    const locationuid = req.params.locationuid;
    return database.collection(workspaceCollectionName).findOne({uid: locationuid})
    .then(location => res.status(status.OK).json(location.buildings));
  })
  .catch(err=>console.log(err));
};

export const getBuilding = (req: Request, res: Response, config: IConfiguration) => {
  const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
  MongoClient.connect(url).then((mongoClientInstance) => {
    const database: Db = mongoClientInstance.db(config.mongo_db_name);
    const locationuid = req.params.locationuid;
    const buildinguid = req.params.buildinguid;
    return database.collection(workspaceCollectionName).findOne({uid: locationuid})
    .then(location => res.status(status.OK).json(location.buildings.filter((building: { uid: string; }) => building.uid === buildinguid)[0]));
  })
  .catch(err=>console.log(err));
};

// export const postBuilding = (req: Request, res: Response, config: IConfiguration) => {
//   const url: string = `mongodb://${config.mongo_server}:${config.mongo_port}`;
//   MongoClient.connect(url).then((mongoClientInstance) => {
//     const database: Db = mongoClientInstance.db(config.mongo_db_name);
//     const locationuid = req.params.locationuid;
//     const buildinguid = req.body.uid;
//     database.collection(workspaceCollectionName).findOne({uid: locationuid})
//     .then(location => {
//       if(location.buildings !=null){
//         location.buildings.push(req.body);        
//         database.collection(workspaceCollectionName).updateOne({uid: locationuid}, {$set:{'buildings':location.buildings}});
//         return database.collection(workspaceCollectionName).findOne({uid: locationuid})
//         .then(updatedLocation => {
//           res.status(status.OK).json(updatedLocation.buildings.filter((building: { uid: string; }) => building.uid === buildinguid)[0])
//         });
//       }
//     });    
//   })
//   .catch(err=>console.log(err));
// };