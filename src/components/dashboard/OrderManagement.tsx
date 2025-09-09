import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Order } from "@/types/admin";

const mockOrders: Order[] = [
  {
    orderId: 1001,
    customerId: 1,
    customerName: "John Doe",
    orderItems: [
      { foodId: 1, quantity: 2, subtotal: 25.50, itemName: "Chicken Burger" },
      { foodId: 2, quantity: 1, subtotal: 12.00, itemName: "French Fries" }
    ],
    status: "pending",
    date: new Date("2024-01-15T10:30:00"),
    type: "Dine-in",
    totalAmount: 37.50
  },
  {
    orderId: 1002,
    customerId: 2,
    customerName: "Jane Smith",
    orderItems: [
      { foodId: 3, quantity: 1, subtotal: 18.00, itemName: "Pasta Carbonara" }
    ],
    status: "preparing",
    date: new Date("2024-01-15T11:15:00"),
    type: "Takeaway",
    totalAmount: 18.00
  },
  {
    orderId: 1003,
    customerId: 3,
    customerName: "Mike Johnson",
    orderItems: [
      { foodId: 4, quantity: 2, subtotal: 32.00, itemName: "Pizza Margherita" }
    ],
    status: "ready",
    date: new Date("2024-01-15T12:00:00"),
    type: "Delivery",
    totalAmount: 32.00
  }
];

export function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const updateOrderStatus = (orderId: number, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.orderId === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusBadge = (status: Order['status']) => {
    const variants = {
      pending: "destructive",
      confirmed: "secondary", 
      preparing: "outline",
      ready: "default",
      delivered: "default",
      cancelled: "destructive"
    } as const;

    return (
      <Badge variant={variants[status] || "secondary"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Order Management</h2>
        <p className="text-muted-foreground">View and manage all customer orders</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell className="font-medium">#{order.orderId}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {order.orderItems.map((item, index) => (
                        <div key={index} className="text-sm">
                          {item.quantity}x {item.itemName}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{order.type}</TableCell>
                  <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>{order.date.toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Select
                      value={order.status}
                      onValueChange={(value) => updateOrderStatus(order.orderId, value as Order['status'])}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="preparing">Preparing</SelectItem>
                        <SelectItem value="ready">Ready</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}