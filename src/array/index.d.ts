namespace Array {
  type Create<N extends number, T extends any[] = []> = T["length"] extends N ? T : Create<N, [...T, any]>;
}
