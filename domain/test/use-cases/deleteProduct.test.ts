import { CreateProduct } from "@domain/use-cases/createProduct";
import { DeleteProduct } from "@domain/use-cases/deleteProduct";
import { InMemoryProductRepository } from "../mocks/in-memory-product-repository";

describe("DeleteProduct", () => {
  it("should delete a product by id", async () => {
    const repository = new InMemoryProductRepository();
    const create = new CreateProduct(repository);
    const remove = new DeleteProduct(repository);

    const product = await create.execute({ name: "To delete", price: 50 });
    await remove.execute(product.id);

    const result = await repository.getById(product.id);
    expect(result).toBeNull();
  });

  it("should throw if product does not exist", async () => {
    const repository = new InMemoryProductRepository();
    const remove = new DeleteProduct(repository);

    await expect(remove.execute("non-existent-id")).rejects.toThrow(
      "Product not found"
    );
  });
});
