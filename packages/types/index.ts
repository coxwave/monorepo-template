export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Fn<T> = () => T;
export type MayBePromise<T> = T | Promise<T>;
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
export type Params = Record<string, any>;
