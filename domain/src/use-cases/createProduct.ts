import { Product } from "@domain/entities/Product";

export class CreateProduct {
  execute(input: { name: string; price: number }) {
    const product = new Product({
      id: "1",
      name: input.name,
      price: input.price,
    });

    return product;
  }
}
