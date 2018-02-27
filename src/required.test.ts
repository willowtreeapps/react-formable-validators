import { required } from "./required";

it("makes fields required", () => {
  const error = "error message";
  const validate = required(error);

  expect(validate()).toEqual(error);
  expect(validate(undefined)).toEqual(error);
  expect(validate(null)).toEqual(error);

  expect(validate("value")).toEqual(undefined);
  expect(validate("")).toEqual(error);

  expect(validate(1)).toEqual(undefined);
  expect(validate(0)).toEqual(undefined);

  expect(validate(false)).toEqual(undefined);
  expect(validate(true)).toEqual(undefined);
});
