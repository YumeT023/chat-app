export type Nullable<T> = T | null;

export type WithLoading<T> = T & {
  isLoading: boolean;
};
