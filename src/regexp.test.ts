import { regexp, email } from "./regexp";

it("number validation", () => {
  const error = "error message";

  expect(regexp(/hello/, error)("wrong")).toBeTruthy();
  expect(regexp(/hello/, error)("hello")).toBeFalsy();

  expect(email(error)("hello")).toBeTruthy();
  expect(email(error)("test@")).toBeTruthy();
  expect(email(error)("test@test")).toBeTruthy();
  expect(email(error)("test@test.")).toBeTruthy();
  expect(email(error)("test@test.com")).toBeFalsy();
});
