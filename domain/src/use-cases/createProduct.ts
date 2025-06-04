import { Product } from "../entities/Product";
import { randomUUID } from "crypto";

export class CreateProduct {
  execute({ name, price }: { name: string; price: number }): Product {
    return new Product({ id: randomUUID(), name, price });
  }
}
