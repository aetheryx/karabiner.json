import { devices } from './devices/index.js';
import { functionKeys } from './function-keys.js';
import { rules } from './rules/rules.js';

export const profile = {
  name: 'Default profile',
  complex_modifications: {
    parameters: {
      'basic.simultaneous_threshold_milliseconds': 50,
      'basic.to_delayed_action_delay_milliseconds': 500,
      'basic.to_if_alone_timeout_milliseconds': 1000,
      'basic.to_if_held_down_threshold_milliseconds': 500,
      'mouse_motion_to_scroll.speed': 100,
    },
    rules,
  },
  devices,
  fn_function_keys: functionKeys,
  parameters: {
    delay_milliseconds_before_open_device: 1000,
  },
  selected: true,
  simple_modifications: [],
  virtual_hid_keyboard: {
    country_code: 0,
    indicate_sticky_modifier_keys_state: true,
    mouse_key_xy_scale: 100,
  },
};
