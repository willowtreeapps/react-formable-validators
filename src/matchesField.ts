/**
 * matchesField
 *
 * @param {String} errorMessage An error message to display
 * @param {String} fieldName the name of the field taken in
 * @param {String} val A value to validate over
 * @param {String} fieldValues value of the field taken in
 * @return {String|Void} The validation
 */

export const matchesField = <T>(fieldName: string, errorMessage: T) => {
  return (val: string | undefined, fieldValues: any) => {
    if (val !== fieldValues[fieldName]) {
      return errorMessage;
    }
  };
};
