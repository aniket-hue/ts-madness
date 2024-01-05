type LengthOfString<S extends string> = Split<S, "">["length"];

type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];

type IfAStringIsPalindrome<S extends string> = S extends ReverseTheString<S> ? true : false;

type ReverseTheString<S extends string> = S extends ""
  ? ""
  : S extends `${infer T}${infer D}`
  ? `${ReverseTheString<D>}${T}`
  : S;
