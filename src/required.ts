/**
 * validateRequired
 *
 * @param {String} errorMessage An error message to display
 * @param {String} val A value to validate over
 * @return {String|Void} The validation
 */

export function required<T>(errorMessage: T) {
  return function(val?: string | boolean | number | undefined | null) {
    if (val == null) {
      return errorMessage;
    }

    if (typeof val === "string" && !val) {
      return errorMessage;
    }
  };
}
