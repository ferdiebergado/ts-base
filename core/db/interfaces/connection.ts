import { Entity } from "./entity";

export type QueryResult<T extends Entity> =
  | T
  | T[]
  | Promise<T | T[]>
  | Record<string, any>;

export interface Connection {
  query: <T extends Entity>(sql: string) => QueryResult<T>;
  execute: <T extends Entity>(
    sql: string,
    params: Record<string, any>
  ) => QueryResult<T>;
}
