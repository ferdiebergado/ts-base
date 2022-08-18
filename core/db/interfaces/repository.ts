import { Entity } from "./entity";

export interface Repository<T extends Entity> {
  find: (id: number) => T | null | Promise<T | null>;
  findAll: () => T[] | Promise<T[]>;
  findBy: (where: {
    [key: string]: string | number;
  }) => T[] | null | Promise<T[] | null>;
  create: (entity: Partial<T>) => number | Promise<number>;
  update: (id: number, updates: Partial<T>) => T | null | Promise<T | null>;
  destroy: (id: number) => boolean | Promise<boolean>;
}
