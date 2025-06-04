import { describe, it, expect } from "vitest";
import { CreateProduct } from "@domain/use-cases/createProduct";

describe("CreateProduct use case", () => {
  it("should create a product with name and price", () => {
    const useCase = new CreateProduct();

    const product = useCase.execute({
      name: "Sample Product",
      price: 19.99,
    });

    expect(product).toEqual({
      id: expect.any(String),
      name: "Sample Product",
      price: 19.99,
    });
  });
});
