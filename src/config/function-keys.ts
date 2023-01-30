import { createMapping, KeyResolvable } from '../util/key-mapping.js';

const keys: Record<string, KeyResolvable> = {
  f1: { consumer: 'display_brightness_decrement' },
  f2: { consumer: 'display_brightness_increment' },
  f3: { apple_keyboard: 'mission_control' },
  f4: { apple_keyboard: 'spotlight' },
  f5: { consumer: 'dictation' },
  f6: 'f6',
  f7: { consumer: 'rewind' },
  f8: { consumer: 'play_or_pause' },
  f9: { consumer: 'fast_forward' },
  f10: { consumer: 'mute' },
  f11: { consumer: 'volume_decrement' },
  f12: { consumer: 'volume_increment' },
};

export const functionKeys = Object.entries(keys)
  .map(([ from, to ]) => createMapping({ from, to }));
