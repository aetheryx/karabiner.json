import { createRule } from '../../util/rule.js';

export const dmenuSpotlight = createRule({
  description: 'dmenu-spotlight',

  *getManipulators() {
    yield {
      from: {
        plain: 'd',
        modifiers: {
          mandatory: [ 'left_command' ],
        },
      },
      to: {
        plain: 'spacebar',
        modifiers: [ 'left_command' ],
      },
      conditions: [
        {
          type: 'frontmost_application_unless',
          bundle_identifiers: [ 'com.microsoft.VSCode' ],
        },
      ],
    };
  },
});
