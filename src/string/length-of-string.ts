type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];

type LengthOfString<S extends string> = Split<S, "">["length"];

type x = LengthOfString<"OOPS">;

const a: x = 4; // This is fine
// const b: x = 5; // This is not fine
