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

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async update(product: Product): Promise<void> {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
  }

  async delete(id: string): Promise<void> {
    this.products = this.products.filter((p) => p.id !== id);
  }
}
