export interface IDictionary<T> {
  [key: string]: T;
}

export interface IMeta {
  page: number;
  pageSize: number;
  count: number;
}
