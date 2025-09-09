import { TupleKeys } from "node_modules/react-hook-form/dist/types/path/common";

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string|string[];
  image: string;
  availability: boolean;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed';
  orderDate: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
}