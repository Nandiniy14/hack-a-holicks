import { IConfiguration } from '../types/IConfiguration';

export const devOptions: IConfiguration = {
  mongo_db_name: process.env.mongo_db_name ? process.env.mongo_db_name : 'hackoholics',
  mongo_port: process.env.mongo_port ? Number.parseInt(process.env.mongo_port, 10) : 3003,
  mongo_server: process.env.mongo_server ? process.env.mongo_server : 'localhost',
  server_port: process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3001,
};

export default devOptions;