namespace Series {
  type Fibonacci<N extends number> = N extends 0
    ? 0
    : N extends 1
    ? 1
    : Math.Add<Fibonacci<Math.Subtract<N, 1>>, Fibonacci<Math.Subtract<N, 2>>>;
}
