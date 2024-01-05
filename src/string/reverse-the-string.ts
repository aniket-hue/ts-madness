type ReverseTheString<S extends string> = S extends ""
  ? ""
  : S extends `${infer T}${infer D}`
  ? `${ReverseTheString<D>}${T}`
  : S;

type A = ReverseTheString<"ABC">; // "CBA"
