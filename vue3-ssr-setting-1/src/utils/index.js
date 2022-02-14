export const err = (msg) => {
  throw new Error(msg);
};

/**
 * @param {any} arg
 * @return {'array' | 'string' | 'number' | 'boolean' | 'function' | 'object' | 'promise' | ''}
 */
export const getType = (arg) => {
  if (Array.isArray(arg)) return "array";
  else return typeof arg;
};
