namespace Array {
  type Length<T extends any[]> = T["length"];
  type Create<N extends number, T extends any[] = []> = Length<T> extends N ? T : Create<N, [...T, any]>;
  type Push<X extends any[], T extends any> = [...X, T];
  type Pop<X extends any[]> = X extends [...infer T, any] ? T : never;
  type Shift<X extends any[]> = X extends [any, ...infer T] ? T : never;
}
