/**
 * Tests the value passed in as a number. The error message is shown if:
 * - If the predicate provided return truthy
 * - The value passed in isn't parsable as a number
 */
export const number = <T>(fn: (val: number) => boolean, errorMessage: T) => {
  return function(val?: string | number): T | undefined {
    if (!(typeof val === "string" || typeof val === "number")) {
      return errorMessage;
    }

    let num = typeof val === "number" ? val : parseFloat(val);

    if (Number.isNaN(num) || fn(num)) {
      return errorMessage;
    }
  };
};

export const numberGT = <T>(num: number, error: T) =>
  number(valNum => valNum <= num, error);
export const numberGTE = <T>(num: number, error: T) =>
  number(valNum => valNum < num, error);

export const numberLT = <T>(num: number, error: T) =>
  number(valNum => valNum >= num, error);
export const numberLTE = <T>(num: number, error: T) =>
  number(valNum => valNum > num, error);

export const numberEQ = <T>(num: number, error: T) =>
  number(valNum => valNum !== num, error);
