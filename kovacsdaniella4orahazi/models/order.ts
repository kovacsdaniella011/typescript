import { Product } from "./product";

export enum OrderStatus {
  New,
  Processing,
  Shipped
}

export class Order {
  constructor(
    public readonly id: string,
    public products: Product[],
    public status: OrderStatus = OrderStatus.New
  ) {}

  getTotalPrice(): number {
    return this.products.reduce((s, p) => s + p.price, 0);
  }
}
