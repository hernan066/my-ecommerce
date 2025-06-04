type Product = {
  id: string;
  name: string;
  price: number;
};

interface ProductRepository {
  findAll(): Promise<Product[]>;
}

export class ListProducts {
  constructor(private readonly repository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.repository.findAll();
  }
}
