import { ProductRepository } from "@domain/repositories/product-repository";

export class DeleteProduct {
  constructor(private readonly productRepo: ProductRepository) {}

  async execute(id: string): Promise<void> {
    const product = await this.productRepo.getById(id);
    if (!product) {
      throw new Error("Product not found");
    }

    await this.productRepo.delete(id);
  }
}
