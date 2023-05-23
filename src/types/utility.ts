export type Nullable<T> = T | null;

export type WithLoading<T> = T & {
  isLoading: boolean;
};

export type Api<T, key extends string> = {
  status: boolean;
} & {
  [P in key]: T;
};

export type Select<T, K extends keyof T> = T[K];
