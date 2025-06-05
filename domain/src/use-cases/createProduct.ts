import { ProductRepository } from "@domain/repositories/product-repository";
import { Product } from "@domain/entities/Product";
import { randomUUID } from "crypto";
// import { validateName, validatePrice } from "./validators";

export class CreateProduct {
  constructor(private readonly productRepo: ProductRepository) {}

  async execute({ name, price }: { name: string; price: number }) {
    /*  validateName(name);
    validatePrice(price); */

    const product = new Product({ id: randomUUID(), name, price });
    await this.productRepo.create(product);

    return product;
  }
}
