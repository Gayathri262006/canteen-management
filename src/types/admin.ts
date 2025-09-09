// Types based on the class diagram
export interface User {
  userId: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface Staff extends User {
  staffId: number;
  designation: string;
  permissions: string;
}

export interface Customer extends User {
  customerId: number;
  orderHistory: Order[];
  bookingHistory: PreBooking[];
}

export interface Order {
  orderId: number;
  customerId: number;
  orderItems: OrderItem[];
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  date: Date;
  type: string;
  totalAmount: number;
  customerName: string;
}

export interface OrderItem {
  foodId: number;
  quantity: number;
  subtotal: number;
  itemName: string;
}

export interface PreBooking {
  bookingId: number;
  customerId: number;
  mealId: number;
  date: Date;
  slot: string;
  status: 'pending' | 'approved' | 'rejected';
  customerName: string;
  mealName: string;
}

export interface Food {
  foodId: number;
  name: string;
  price: number;
  description: string;
  category: string;
  availability: boolean;
}

export interface Category {
  categoryId: number;
  name: string;
  description: string;
}

export interface Inventory {
  inventoryId: number;
  itemList: Item[];
  lastCheckedDate: Date;
}

export interface Item {
  itemId: number;
  name: string;
  stockLevel: number;
  unit: string;
  threshold: number;
}

export interface Bill {
  billId: number;
  orderId: number;
  totalAmount: number;
  paymentStatus: string;
  paymentMode: string;
}