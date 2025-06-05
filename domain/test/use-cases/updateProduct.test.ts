import { UpdateProduct } from "@domain/use-cases/updateProduct";
import { InMemoryProductRepository } from "../mocks/in-memory-product-repository";
import { Product } from "@domain/entities/Product";

describe("UpdateProduct", () => {
  it("should update an existing product", async () => {
    const repository = new InMemoryProductRepository();

    const product = new Product({ id: "1", name: "Old", price: 10 });
    await repository.create(product);

    const useCase = new UpdateProduct(repository);

    await useCase.execute({
      id: "1",
      name: "Updated",
      price: 99,
    });

    const updated = await repository.getById("1");

    expect(updated?.name).toBe("Updated");
    expect(updated?.price).toBe(99);
  });

  it("should throw if product does not exist", async () => {
    const repository = new InMemoryProductRepository();
    const useCase = new UpdateProduct(repository);

    await expect(
      useCase.execute({ id: "999", name: "X", price: 20 })
    ).rejects.toThrow("Product not found");
  });

  it("should throw if product is not found", async () => {
    const repository = new InMemoryProductRepository();
    const useCase = new UpdateProduct(repository);

    await expect(
      useCase.execute({ id: "999", name: "New", price: 100 })
    ).rejects.toThrow("Product not found");
  });

  it("should not allow a product with price 0", async () => {
    const repository = new InMemoryProductRepository();
    const useCase = new UpdateProduct(repository);

    const product = new Product({ id: "2", name: "Test", price: 50 });
    await repository.create(product);

    await expect(
      useCase.execute({ id: "2", name: "Test", price: 0 })
    ).rejects.toThrow("Price must be greater than zero");
  });

  it("should not allow a product with negative price", async () => {
    const repository = new InMemoryProductRepository();
    const useCase = new UpdateProduct(repository);

    const product = new Product({ id: "3", name: "Test", price: 50 });
    await repository.create(product);

    await expect(
      useCase.execute({ id: "3", name: "Test", price: -10 })
    ).rejects.toThrow("Price must be greater than zero");
  });
});
