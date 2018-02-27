/**
 * Tests the value passed in as a string. The error message is shown if:
 * - The regular expression doesn't match the string provided
 * - Something besides a string is passed to the function
 */
export const regexp = <T>(regexp: RegExp, error: T) => {
  return (val?: string) => {
    if (typeof val !== "string") {
      return error;
    }

    const r = regexp && regexp.test ? regexp : new RegExp(regexp);

    if (!val || !r.test(val)) {
      return error;
    }
  };
};

export const email = <T>(error: T) => regexp(/.+@.+\..+/, error);
