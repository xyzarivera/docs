# TypeScript

## No Truthy-Falsy short-circuiting

Check for `null`|`undefined` or nullish coalescing operator.

```TypeScript
if (a != null) {
    ...
}

const b:string = c ?? `default`; // empty string is valid
```
**Relying on truthy/falsy value:**
- impairs readability/context for what should the type of results be, especially if we are comparing a boolean or number
- means we have to know implicity if empty strings, zero or empty array is a valid value or not.

**Are the following a valid value:**
- empty array `[]`: `truthy`
- empty object `{}`: `truthy`
- empty strings `''`: `falsy`
- zero `0` `falsy`

