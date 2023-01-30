import { KeyMapping, createMapping } from '../util/key-mapping.js';

const keys: KeyMapping[] = [
  { from: 'f1', to: { consumer: 'display_brightness_decrement' } },
  { from: 'f2', to: { consumer: 'display_brightness_increment' } },
  { from: 'f3', to: { apple_keyboard: 'mission_control' } },
  { from: 'f4', to: { apple_keyboard: 'spotlight' } },
  { from: 'f5', to: { consumer: 'dictation' } },
  { from: 'f6', to: 'f6' },
  { from: 'f7', to: { consumer: 'rewind' } },
  { from: 'f8', to: { consumer: 'play_or_pause' } },
  { from: 'f9', to: { consumer: 'fast_forward' } },
  { from: 'f10', to: { consumer: 'mute' } },
  { from: 'f11', to: { consumer: 'volume_decrement' } },
  { from: 'f12', to: { consumer: 'volume_increment' } },
];

export const functionKeys = keys.map(createMapping);
