import { Product } from "@domain/entities/Product";

export interface ProductRepository {
  create(product: Product): Promise<void>;
  findByName(name: string): Promise<Product | null>;
  getById(id: string): Promise<Product | null>;
}
