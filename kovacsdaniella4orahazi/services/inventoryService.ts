import { Product } from "../models/product";

export class InventoryService {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  findById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getAll(): Product[] {
    return this.products;
  }
}
