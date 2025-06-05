import { GetProductById } from "@domain/use-cases/getProductById";
import { InMemoryProductRepository } from "../mocks/in-memory-product-repository";

describe("GetProductById", () => {
  it("should return the product by its ID", async () => {
    const repository = new InMemoryProductRepository();
    const useCase = new GetProductById(repository);

    const product = { id: "test-id", name: "Test Product", price: 100 };
    await repository.create(product);

    const result = await useCase.execute(product.id);

    expect(result).toEqual(product);
  });

  it("should throw an error if product is not found", async () => {
    const repository = new InMemoryProductRepository();
    const useCase = new GetProductById(repository);

    await expect(useCase.execute("non-existent-id")).rejects.toThrow(
      "Product not found"
    );
  });
});
