import { getRootLogger } from '@backstage/backend-common';
import yn from 'yn';
import { startStandaloneServer } from './service/standaloneServer';
import { configApiRef, useApi } from '@backstage/core-plugin-api';

const port = process.env.PLUGIN_PORT ? Number(process.env.PLUGIN_PORT) : 7007;
const enableCors = yn(process.env.PLUGIN_CORS, { default: false });
const logger = getRootLogger();
const config = useApi(configApiRef);

startStandaloneServer({ port, enableCors, logger, config }).catch(err => {
  logger.error('Standalone server failed:', err);
  process.exit(1);
});

process.on('SIGINT', () => {
  logger.info('CTRL+C pressed; exiting.');
  process.exit(0);
});
