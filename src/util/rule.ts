import { createMapping, KeyMapping } from './key-mapping.js';

type RuleOptions = {
  description: string;
  getManipulators: () => Generator<KeyMapping>;
};

export const createRule = (options: RuleOptions) => ({
  description: options.description,
  manipulators: [ ...options.getManipulators() ].map(manipulator => ({
    ...createMapping(manipulator),
    type: 'basic',
  })),
});
