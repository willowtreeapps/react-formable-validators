/**
 * Tests the length of the value passed in as a number. The length of the value
 * is the only parameter passed to the predicate. The error message is returned if:
 * - If the predicate provided return truthy
 * - The value passed in isn't parsable as a number
 */
export const length = <T>(fn: (length: number) => boolean, error: T) => {
  return (val?: any) => {
    if (typeof val !== "string" || fn(val.length)) {
      return error;
    }
  };
};

export const lengthGT = <T>(len: number, error: T) =>
  length(valLen => valLen <= len, error);
export const lengthGTE = <T>(len: number, error: T) =>
  length(valLen => valLen < len, error);

export const lengthLT = <T>(len: number, error: T) =>
  length(valLen => valLen >= len, error);
export const lengthLTE = <T>(len: number, error: T) =>
  length(valLen => valLen > len, error);

export const lengthEQ = <T>(len: number, error: T) =>
  length(valLen => valLen !== len, error);
