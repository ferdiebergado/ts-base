import { Entity } from "./entity";

export interface Repository<T extends Entity> {
  find: (id: number) => T | null | Promise<T | null>;
  findAll: () => T[] | Promise<T[]>;
  create: (entity: Partial<T>) => number | Promise<number>;
  update: (id: number, updates: Partial<T>) => T | null | Promise<T | null>;
  delete: (id: number) => boolean | Promise<boolean>;
}
