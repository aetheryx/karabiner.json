import { KeyMapping, swap } from '../../util/key-mapping.js';
import { Modifier } from '../../util/modifier.js';
import { createRule } from '../../util/rule.js';

const manipulator = (
  plain: string,
  from: Modifier,
  to: Modifier,
  modifiers: Modifier[] = [],
): KeyMapping => ({
  from: {
    plain,
    modifiers: {
      mandatory: [ from, ...modifiers ],
      optional: [ 'caps_lock' ],
    },
  },
  to: {
    plain,
    modifiers: [ to, ...modifiers ],
  },
});

export const cursorJump = createRule({
  description: 'cursor jump',

  *getManipulators() {
    for (const { from, to } of swap('left_command', 'left_option')) {
      for (const direction of [ 'left', 'right', 'up', 'down' ]) {
        for (const modifiers of [ [], [ 'left_shift' ] ] as Modifier[][]) {
          yield manipulator(`${direction}_arrow`, from, to, modifiers);
        }
      }

      yield {
        ...manipulator('delete_or_backspace', from, to),
        conditions: [
          {
            type: 'frontmost_application_unless',
            bundle_identifiers: [ 'com.apple.finder' ],
          },
        ],
      };
    }
  },
});
