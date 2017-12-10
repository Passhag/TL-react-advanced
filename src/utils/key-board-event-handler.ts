import * as React from 'react';

export const KeyValues = {
  ENTER: 'Enter',
  TAB: 'Tab',
  SPACE: ' ',
  ALT: 'Alt',
  CAPS_LOCK: 'CapsLock',
  SHIFT: 'Shift',
};

export default (key: string, cb: Function, event: React.KeyboardEvent<HTMLInputElement>): void => {
  const normalizeKey = (key: string) =>
    key === KeyValues.SPACE ? 'SPACE' : key.replace(/([a-z]+)([A-Z]{1})/g, '$1_$2').toUpperCase();

  if (KeyValues[normalizeKey(event.key)] === key) {
    cb(event);
  }
};
