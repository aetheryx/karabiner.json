type ModifierKey = 'command' | 'option' | 'shift';
type Direction = 'left' | 'right';

export type Modifier =
  | ModifierKey
  | `${Direction}_${ModifierKey}`
  | 'caps_lock'
  | 'fn';
