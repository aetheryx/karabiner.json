import { config } from './config/config.js';

const configRaw = JSON.stringify(config, null, '  ');
process.stdout.write(configRaw);
