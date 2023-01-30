import { writeFileSync } from 'node:fs';
import { config } from './config/config.js';

writeFileSync('./karabiner.json', JSON.stringify(config, null, '  '));
console.log('done');
