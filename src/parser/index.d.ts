namespace Parser {
  type GetByDot<
    S extends string,
    X extends {
      [key: string]: any;
    },
  > = S extends `${infer T}${infer D}${infer U}` ? Currying<U, X[T]> : X[S] extends unknown ? undefined : X[S];
}
