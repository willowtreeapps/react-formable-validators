# Validators for [react-formable](https://github.com/willowtreeapps/react-formable)

A validator in react-formable is any function that takes in a value, some JSON that represents the state of your form, and optionally returns a value. If the return value of the validator is a `Promihese` then any value returned in `then` will be considered an error. If the validator returns some other truthy value besides a `Promise` it is considered an error and will be rendered to the screen.

```tsx
function validator<T>(inputValue: any, formValue: any): T | undefined {}
```

## Validators:

The validators found in this repo are just convenience functions that we have found usefull. They take in an initial configuration and return a function which then acts as the validator. These can be understood as _"When thehis input's value does not meet this requirement, display this error message"_.

Each of these functions typically take one or two parameters. The first is typically some configuration based on the validator and the second is always the error message you want to display if the validation fails.

* Length:
  * [`length`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/length.ts#L7)
    * The generic validator which the rest of `length` uses. It takes in a predicate, if the predicate returns `true` the error message is displayed.
  * [`lengthGT`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/length.ts#L15)
  * [`lengthGTE`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/length.ts#L17)
  * [`lengthLT`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/length.ts#L20)
  * [`lengthLTE`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/length.ts#L22)
  * [`lengthEQ`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/length.ts#L25)
* Nuber:
  * [`number`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/number.ts#L6)
    * The generic validator which the rest of `number` uses. This tries to convert the input's value to a number and then compares it. It takes in a predicate, if the predicate returns `true` the error message is displayed.
  * [`numberGT`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/number.ts#L20)
  * [`numberGTE`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/number.ts#L22)
  * [`numberLT`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/number.ts#L25)
  * [`numberLTE`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/number.ts#L27)
  * [`numberEQ`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/number.ts#L30)
* Regular Expressions:
  * [`regexp`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/regexp.ts#L6)
  * [`email`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/regexp.ts#L20)
* Other
  * [`required`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/required.ts#L9)
    * Ensures values are not null, undefiend, or strings passed in have a length.
  * [`matchesField`](https://github.com/willowtreeapps/react-formable-validators/blob/master/src/matchesField.ts#L11)
    * Usefull for when you have a dependency between field values. The input you attach this to must match the field whos name is specified.

## Examples:

```tsx
import * as React from "react";
import { Form } from "react-formable";
import * as validators from "react-formable-validators";

const Component = () => (
  <Form onSubmit={console.log}>
    <input
      name="firstName"
      validators={[validators.required("a first name is required")]}
    />

    <input
      name="lastName"
      validators={[validators.required("a last name is required")]}
    />

    <input
      name="email"
      type="email"
      validators={[validators.email("an email is required")]}
    />

    <input
      name="phone"
      type="tel"
      validators={[
        validators.lengthEQ(7, "a phone number of 7 digits is requierd")
      ]}
    />
  </Form>
);
```
