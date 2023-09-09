import { Modifier } from './modifier';

type KeyType = keyof typeof keyTypes;
const keyTypes = {
  consumer: 'consumer_key_code',
  apple_keyboard: 'apple_vendor_keyboard_key_code',
  apple_top_case: 'apple_vendor_top_case_key_code',
  plain: 'key_code',
} as const;

export type KeyResolvable =
  | string
  | Partial<Record<KeyType, string>> & {
    modifiers?:
      | Modifier[]
      | Partial<Record<'optional' | 'mandatory', Modifier[]>>;
  };

export const resolveKey = (keyResolvable: KeyResolvable) =>
  typeof keyResolvable === 'string'
    ? { key_code: keyResolvable }
    : Object.fromEntries(
      Object.entries(keyResolvable)
        .map(([ key, value ]) => [
          key in keyTypes ? keyTypes[key as KeyType] : key,
          value,
        ]),
    );

export type KeyMapping = {
  from: KeyResolvable;
  to: KeyResolvable;
  conditions?: any;
};

export const createMapping = (mapping: KeyMapping) => ({
  ...mapping,
  from: resolveKey(mapping.from),
  to: [
    resolveKey(mapping.to),
  ],
});

export const swap = <T1 extends KeyResolvable, T2 extends KeyResolvable>(
  a: T1,
  b: T2,
): Array<{ from: T1 | T2; to: T1 | T2 }> => {
  const forwards = { from: a, to: b };
  const backwards = { from: b, to: a };

  return [ forwards, backwards ];
};
