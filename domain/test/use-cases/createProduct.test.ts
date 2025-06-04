import { Product } from "@domain/entities/Product";
import { CreateProduct } from "@domain/use-cases/createProduct";

describe("CreateProduct", () => {
  it("should not allow a product with price 0", () => {
    const useCase = new CreateProduct();

    expect(() =>
      useCase.execute({ name: "Invalid Product", price: 0 })
    ).toThrow("Price must be greater than zero");
  });

  it("should not allow a product with negative price", () => {
    const useCase = new CreateProduct();

    expect(() =>
      useCase.execute({ name: "Invalid Product", price: -10 })
    ).toThrow("Price must be greater than zero");
  });

  it("should allow a product with valid name and price", () => {
    const useCase = new CreateProduct();

    const product = useCase.execute({ name: "Valid Product", price: 100 });

    expect(useCase.execute({ name: "Valid", price: 100 })).toBeInstanceOf(
      Product
    );
  });
});
