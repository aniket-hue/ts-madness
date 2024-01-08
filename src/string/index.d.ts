namespace String {
  type LengthOfString<S extends string> = Split<S, "">["length"];

  type Split<S extends string, D extends string> = S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [];

  type IfAStringIsPalindrome<S extends string> = S extends ReverseTheString<S> ? true : false;

  type ReverseTheString<S extends string> = S extends `${infer T}${infer D}` ? `${ReverseTheString<D>}${T}` : "";

  type Substring<S extends string, End extends number> = End extends 0
    ? ""
    : S extends `${infer T}${infer U}`
    ? `${T}${Substring<U, Math.Subtract<End, 1>>}`
    : "";

  type DoesStringExistInAnotherString<S extends string, T extends string> = S extends `${infer U}${T}${infer V}`
    ? true
    : false;
}
