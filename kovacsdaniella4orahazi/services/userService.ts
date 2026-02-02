import { User } from "../models/user";
import { Order } from "../models/order";
import { InventoryService } from "./inventoryService";
import { Product } from "../models/product";

export class UserService {
  placeOrder(
    user: User,
    inventory: InventoryService,
    productIds: string[]
  ): Order {
    const products: Product[] = [];

    for (const id of productIds) {
      const product = inventory.findById(id);
      if (!product) {
        throw new Error("Ő nem található: " + id);
      }
      products.push(product);
    }

    return new Order(
      `ORD-${Date.now()}`,
      products
    );
  }
}
