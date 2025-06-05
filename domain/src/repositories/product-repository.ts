import { Product } from "@domain/entities/Product";

export interface ProductRepository {
  create(product: Product): Promise<void>;
  findByName(name: string): Promise<Product | null>;
  getById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  update(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
