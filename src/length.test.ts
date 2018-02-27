import { lengthEQ, lengthGT, lengthGTE, lengthLT, lengthLTE } from "./length";

it("validates field length", () => {
  const error = "error message";

  expect(lengthLT(1, error)()).toBeTruthy();
  expect(lengthLT(1, error)({})).toBeTruthy();
  expect(lengthLT(1, error)(false)).toBeTruthy();
  expect(lengthLT(1, error)(0)).toBeTruthy();
  expect(lengthLT(1, error)("1")).toBeTruthy();
  expect(lengthLT(1, error)("")).toBeFalsy();
  expect(lengthLTE(1, error)("1")).toBeFalsy();

  expect(lengthGT(1, error)("1")).toBeTruthy();
  expect(lengthGT(1, error)("11")).toBeFalsy();

  expect(lengthGTE(1, error)("")).toBeTruthy();
  expect(lengthGTE(1, error)("1")).toBeFalsy();
  expect(lengthGTE(1, error)("11")).toBeFalsy();

  expect(lengthEQ(1, error)("1")).toBeFalsy();
  expect(lengthEQ(1, error)("11")).toBeTruthy();
});
