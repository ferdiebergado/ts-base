import { Config } from "./config";
import { Connection } from "./connection";

export interface Database {
  connect: (config: Config) => Connection;
}
