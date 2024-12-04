# TypeScript Type Error: Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript type error: 'Type 'string[]' is not assignable to type 'string'. This error arises when a function expecting a single string argument receives an array of strings instead.  The example showcases the error and provides a solution.

## Problem

The `greeter` function expects a single string. However, it's called with an array of strings (`user`). TypeScript correctly flags this as a type mismatch.

## Solution

The provided solution demonstrates two approaches to resolve this:

1. **Modifying the function signature:** Change `greeter` to accept an array of strings.
2. **Modifying the argument:** Pass a single string to the function (e.g., by accessing an element of the array).

Choose the appropriate solution based on your application's logic.  Refer to the `bugSolution.ts` file for the solutions.