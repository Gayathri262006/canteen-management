import React, { useState } from "react";
import OrderHistory from "@/components/OrderHistory";
import { menuItems } from "@/data/menuData";

const OrderHistoryPage = () => {
  const [orderHistory /*, setOrderHistory*/] = useState([
    // Sample order history data for demonstration
    {
      orderId: 1,
      date: "2024-01-15",
      status: "Delivered",
      items: [
        { foodId: 1, quantity: 2 },
        { foodId: 3, quantity: 1 }
      ]
    },
    {
      orderId: 2,
      date: "2024-01-10",
      status: "Cancelled",
      items: [
        { foodId: 2, quantity: 1 },
        { foodId: 4, quantity: 3 }
      ]
    },
    {
      orderId: 3,
      date: "2024-01-08",
      status: "Preparing",
      items: [
        { foodId: 1, quantity: 1 },
        { foodId: 5, quantity: 2 }
      ]
    }
  ]);

  // Calculate order statistics
  const deliveredOrders = orderHistory.filter(order => order.status === "Delivered").length;
  const cancelledOrders = orderHistory.filter(order => order.status === "Cancelled").length;
  const activeOrders = orderHistory.filter(order => order.status === "Preparing" || order.status === "Pending").length;
  
  // Calculate total items ordered
  const totalItems = orderHistory.reduce((sum, order) => 
    sum + order.items.reduce((orderSum, item) => orderSum + item.quantity, 0), 0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Order History</h1>
          <p className="text-blue-700 font-medium">
            Track all your food orders and view their current status in your canteen account
          </p>
          
          {/* Stats Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-900">
              <div className="text-3xl font-bold text-blue-900 mb-1">{orderHistory.length}</div>
              <div className="text-sm text-blue-700 font-semibold">Total Orders</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="text-3xl font-bold text-green-600 mb-1">{deliveredOrders}</div>
              <div className="text-sm text-green-700 font-semibold">Delivered</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="text-3xl font-bold text-yellow-600 mb-1">{activeOrders}</div>
              <div className="text-sm text-yellow-700 font-semibold">Active Orders</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-600 mb-1">{totalItems}</div>
              <div className="text-sm text-purple-700 font-semibold">Items Ordered</div>
            </div>
          </div>
        </div>


           
        {/* Order History Component */}
        <OrderHistory orders={orderHistory} menuItems={menuItems} />

        {/* Enhanced Empty State */}
        {orderHistory.length === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-blue-200">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">No orders placed yet</h3>
            <p className="text-blue-700 mb-6 font-medium">
              You haven't placed any food orders yet. Start by exploring our delicious canteen menu!
            </p>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-all duration-200 font-semibold shadow-md flex items-center mx-auto">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Browse Our Menu
            </button>
          </div>
        )}

        {/* Order Insights */}
      
             
              
              
            </div>
          </div>
        )};
     


export default OrderHistoryPage;
