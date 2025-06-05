import { ListProducts } from "@domain/use-cases/listProducts";
import { InMemoryProductRepository } from "../mocks/in-memory-product-repository";

describe("ListProducts", () => {
  it("should return all products", async () => {
    const repository = new InMemoryProductRepository();
    const useCase = new ListProducts(repository);

    await repository.create({ id: "1", name: "Product A", price: 10 });
    await repository.create({ id: "2", name: "Product B", price: 20 });

    const result = await useCase.execute();

    expect(result).toEqual([
      { id: "1", name: "Product A", price: 10 },
      { id: "2", name: "Product B", price: 20 },
    ]);
  });
});
