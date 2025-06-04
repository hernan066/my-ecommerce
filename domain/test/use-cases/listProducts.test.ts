import { ListProducts } from "@domain/use-cases/listProducts";

describe("ListProducts", () => {
  it("should return a list of products", async () => {
    const mockRepository = {
      findAll: vi.fn().mockResolvedValue([
        { id: "1", name: "Product A", price: 100 },
        { id: "2", name: "Product B", price: 200 },
      ]),
    };

    const useCase = new ListProducts(mockRepository);

    const result = await useCase.execute();

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("Product A");
  });
});
