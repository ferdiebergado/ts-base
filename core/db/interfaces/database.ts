import { Config } from "./config";
import { Connection } from "./connection";

export interface Database {
  connect: (
    provider: Record<string, any>,
    config: Config
  ) => Connection | Promise<Connection>;
}
