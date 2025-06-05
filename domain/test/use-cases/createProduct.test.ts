import { Product } from "@domain/entities/Product";
import { CreateProduct } from "@domain/use-cases/createProduct";
import { InMemoryProductRepository } from "../mocks/in-memory-product-repository";

describe("CreateProduct", () => {
  it("should not allow a product with price 0", async () => {
    const repository = new InMemoryProductRepository();
    const useCase = new CreateProduct(repository);

    await expect(() =>
      useCase.execute({ name: "Invalid Product", price: 0 })
    ).rejects.toThrow("Price must be greater than zero");
  });

  it("should not allow a product with negative price", async () => {
    const repository = new InMemoryProductRepository();
    const useCase = new CreateProduct(repository);

    await expect(() =>
      useCase.execute({ name: "Invalid Product", price: -10 })
    ).rejects.toThrow("Price must be greater than zero");
  });

  it("should allow a product with valid name and price", async () => {
    const repository = new InMemoryProductRepository();
    const useCase = new CreateProduct(repository);

    const product = await useCase.execute({
      name: "Valid Product",
      price: 100,
    });

    expect(product).toBeInstanceOf(Product);
    expect(product.name).toBe("Valid Product");
    expect(product.price).toBe(100);
  });
});
