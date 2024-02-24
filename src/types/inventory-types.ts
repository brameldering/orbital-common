export interface IInventoryProduct {
  productId: string;
  name: string;
  brand: string;
  category: string;
}

export interface IInventory extends IInventoryProduct {
  quantity: number;
}
