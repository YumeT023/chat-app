export type Nullable<T> = T | null;

export type WithLoading<T> = T & {
  isLoading: boolean;
};

export type WithStatus<T> = {
  status: boolean;
} & T;
