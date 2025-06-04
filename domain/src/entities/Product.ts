export class Product {
  public readonly id: string;
  public readonly name: string;
  public readonly price: number;

  constructor(props: { id: string; name: string; price: number }) {
    if (!props.name) throw new Error("Name is required");
    if (props.price <= 0) throw new Error("Price must be greater than zero");

    this.id = props.id;
    this.name = props.name;
    this.price = props.price;
  }
}
