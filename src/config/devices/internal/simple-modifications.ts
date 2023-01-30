import { createMapping, KeyMapping, swap } from '../../../util/key-mapping.js';

const mappings: KeyMapping[] = [
  ...swap('left_control', { apple_top_case: 'keyboard_fn' }),
  ...swap('grave_accent_and_tilde', 'non_us_backslash'),
];

export const simpleModifications = mappings.map(createMapping);

