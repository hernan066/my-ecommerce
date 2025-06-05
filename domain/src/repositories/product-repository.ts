import { Product } from "@domain/entities/Product";

export interface ProductRepository {
  create(product: Product): Promise<void>;
  findByName(name: string): Promise<Product | null>;
  getById(id: string): Promise<Product | null>;
  // Agregaremos más métodos con el tiempo, según lo necesiten los casos de uso.
}
