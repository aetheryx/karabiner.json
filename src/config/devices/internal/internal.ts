import { simpleModifications } from './simple-modifications.js';

export const internal = {
  disable_built_in_keyboard_if_exists: false,
  fn_function_keys: [],
  identifiers: {
    is_keyboard: true,
    is_pointing_device: false,
    product_id: 0x0342,
    vendor_id: 0x05AC,
  },
  ignore: false,
  manipulate_caps_lock_led: false,
  simple_modifications: simpleModifications,
  treat_as_built_in_keyboard: false,
};
