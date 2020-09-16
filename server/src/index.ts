import config from './config/configuration';
import server from './server/server';

console.info('--- Service for Desk booking ---');

process.on('uncaughtException', err => {
  console.error('Unhandled Exception', err);
});

console.info('starting server for dev environment');

server(config).then(result => {
  console.info(`Running on port: ${config.server_port}`);
});
