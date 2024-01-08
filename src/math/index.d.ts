namespace Math {
  type Add<A extends number, B extends number> = [...Array.Create<A>, ...Array.Create<B>]["length"];

  type Subtract<A extends number, B extends number> = Array.Create<A> extends [...Array.Create<B>, ...infer R]
    ? R["length"]
    : never;

  type Multiply<A extends number, B extends number> = B extends 0 ? 0 : Add<A, Multiply<A, Subtract<B, 1>>>;
}
