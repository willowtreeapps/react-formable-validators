import { matchesField } from "./matchesField";

it("matches field values", () => {
  const fields = { one: "one", two: "two" };
  const error = "error message";

  expect(matchesField("one", error)("one", fields)).toBeFalsy();
  expect(matchesField("two", error)("two", fields)).toBeFalsy();
  expect(matchesField("one", error)("two", fields)).toBeTruthy();
});
