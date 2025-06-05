import { ProductRepository } from "@domain/repositories/product-repository";
import { Product } from "@domain/entities/Product";

export class GetProductById {
  constructor(private readonly repository: ProductRepository) {}

  async execute(id: string): Promise<Product> {
    const product = await this.repository.getById(id);

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  }
}
