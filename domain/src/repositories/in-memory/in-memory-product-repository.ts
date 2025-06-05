import { Product } from "@domain/entities/Product";
import { ProductRepository } from "@domain/repositories/product-repository";

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  async create(product: Product): Promise<void> {
    this.products.push(product);
  }

  async findByName(name: string): Promise<Product | null> {
    const product = this.products.find((p) => p.name === name);
    return product ?? null;
  }

  async getById(id: string): Promise<Product | null> {
    const product = this.products.find((p) => p.id === id);
    return product ?? null;
  }
}
