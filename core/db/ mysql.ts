import { Config, Connection, Database, Entity } from "./interfaces";
import { QueryResult } from "./interfaces/connection";

const config: Config = {
  host: "localhost",
  port: 3306,
  user: "",
  password: "",
  database: "",
};

const db: Database = {
  connect: async function (
    provider: Record<string, any>,
    config: Config
  ): Promise<Connection> {
    return await provider.createPool(config);
  },
};

const conn: Connection = {
  query: <T extends Entity>(sql: string): QueryResult<T> => {
    throw new Error("Function not implemented.");
  },

  execute: <T extends Entity>(
    sql: string,
    params: Record<string, any>
  ): QueryResult<T> => {
    throw new Error("Function not implemented.");
  },
};
