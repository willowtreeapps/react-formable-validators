import { numberEQ, numberLT, numberLTE, numberGT, numberGTE } from "./number";

it("number validation", () => {
  const error = "error message";

  expect(numberGT(1, error)(1)).toBeTruthy();
  expect(numberGT(0, error)(1)).toBeFalsy();

  expect(numberGTE(1, error)(1)).toBeFalsy();
  expect(numberGTE(1, error)(0)).toBeTruthy();

  expect(numberLT(1, error)(1)).toBeTruthy();
  expect(numberLT(4, error)(2)).toBeFalsy();

  expect(numberLTE(1, error)(1)).toBeFalsy();
  expect(numberLTE(1, error)(2)).toBeTruthy();

  expect(numberEQ(1, error)(1)).toBeFalsy();
  expect(numberEQ(1, error)(2)).toBeTruthy();
});
