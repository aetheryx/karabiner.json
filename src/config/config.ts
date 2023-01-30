import { profile } from './profile.js';

export const config = {
  global: {
    ask_for_confirmation_before_quitting: true,
    check_for_updates_on_startup: false,
    show_in_menu_bar: false,
    show_profile_name_in_menu_bar: false,
    unsafe_ui: false,
  },
  profiles: [ profile ],
};

