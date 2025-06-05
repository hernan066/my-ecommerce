import { ProductRepository } from "@domain/repositories/product-repository";

interface UpdateProductInput {
  id: string;
  name: string;
  price: number;
}

export class UpdateProduct {
  constructor(private readonly repository: ProductRepository) {}

  async execute({ id, name, price }: UpdateProductInput): Promise<void> {
    const product = await this.repository.getById(id);
    if (!product) throw new Error("Product not found");
    if (price <= 0) throw new Error("Price must be greater than zero");

    const updatedProduct = {
      ...product,
      name,
      price,
    };

    await this.repository.update(updatedProduct);
  }
}
