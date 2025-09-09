import React, { useState } from "react";
import OrderForm from "@/components/OrderForm";
import { menuItems } from "@/data/menuData";

const OrderPage = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [lastOrder, setLastOrder] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const addOrder = (order) => {
    const newOrder = {
      orderId: orderHistory.length + 1,
      items: order,
      date: new Date().toLocaleDateString(),
      status: 'Pending'
    };
    
    setOrderHistory(prev => [...prev, newOrder]);
    setLastOrder(newOrder);
    setShowConfirmation(true);

    // Auto-hide confirmation after 5 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  // Calculate order total
  const calculateOrderTotal = (orderItems) => {
    return orderItems.reduce((total, item) => {
      const menuItem = menuItems.find(mi => mi.foodId === item.foodId);
      return total + (menuItem ? menuItem.price * item.quantity : 0);
    }, 0);
  };

  // Get item name
  const getItemName = (foodId) => {
    const item = menuItems.find(item => item.foodId === foodId);
    return item ? item.name : "Unknown";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">🍽️ Place Your Order</h1>
          <p className="text-blue-700 font-medium">
            Browse our fresh canteen menu and place your order for quick pickup
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="text-3xl font-bold text-green-600 mb-1">{menuItems.length}</div>
              <div className="text-sm text-green-700 font-semibold">Fresh Menu Items</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-900">
              <div className="text-3xl font-bold text-blue-900 mb-1">{orderHistory.length}</div>
              <div className="text-sm text-blue-700 font-semibold">Orders Placed Today</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-600 mb-1">
                {orderHistory.filter(o => o.status === 'Pending').length}
              </div>
              <div className="text-sm text-orange-700 font-semibold">Orders in Queue</div>
            </div>
          </div>
        </div>

        {/* Order Confirmation */}
        {showConfirmation && lastOrder && (
          <div className="mb-6 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-6 shadow-lg animate-fade-in">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                  🎉 Order Placed Successfully!
                </h3>
                
                <div className="bg-white rounded-lg p-5 border border-green-200 shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm">
                        {lastOrder.orderId}
                      </div>
                      <div>
                        <div className="font-bold text-blue-900">Order #{lastOrder.orderId}</div>
                        <div className="text-sm text-blue-700 font-medium">{lastOrder.date}</div>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm font-bold rounded-full">
                      ⏳ {lastOrder.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-bold text-blue-800 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Items Ordered:
                    </div>
                    <div className="space-y-2">
                      {lastOrder.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center bg-blue-50 p-3 rounded-lg border border-blue-100">
                          <span className="text-blue-900 font-medium">
                            <span className="font-bold text-blue-800">{item.quantity}x</span> {getItemName(item.foodId)}
                          </span>
                          <span className="font-bold text-green-600">
                            ₹{((menuItems.find(mi => mi.foodId === item.foodId)?.price || 0) * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t-2 border-blue-200 pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-900">Total Amount:</span>
                    <span className="text-2xl font-bold text-green-600">₹{calculateOrderTotal(lastOrder.items).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Your order is being prepared by our kitchen staff. You'll receive updates on the status.
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-green-700 font-medium">
                    Estimated preparation time: 10-15 minutes
                  </div>
                  <button 
                    onClick={() => setShowConfirmation(false)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                  >
                    Got it! ✓
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mb-6 bg-white rounded-lg shadow-lg p-6 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4">⚡ Quick Actions</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-all duration-200 flex items-center font-semibold shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Today's Special Menu
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 flex items-center font-semibold shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reorder Last Order
            </button>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all duration-200 flex items-center font-semibold shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              View Order History
            </button>
          </div>
        </div>

        {/* Order Form */}
        <OrderForm onPlaceOrder={addOrder} />

        {/* Recent Orders Summary */}
        {orderHistory.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg border border-blue-200">
            <div className="p-6 border-b border-blue-100 bg-blue-50">
              <h3 className="text-xl font-bold text-blue-900 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                📋 Recent Orders
              </h3>
            </div>
            
            <div className="p-6 space-y-4">
              {orderHistory.slice(-3).reverse().map((order, index) => (
                <div key={order.orderId} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-800 hover:shadow-md transition-all duration-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm">
                        {order.orderId}
                      </div>
                      <div>
                        <span className="font-bold text-blue-900">Order #{order.orderId}</span>
                        <div className="text-sm text-blue-700 font-medium">{order.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          ₹{calculateOrderTotal(order.items).toFixed(2)}
                        </div>
                        <div className="text-xs text-blue-600">
                          {order.items.reduce((sum, item) => sum + item.quantity, 0)} items
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full border ${
                        order.status === "Delivered" ? "bg-green-100 text-green-800 border-green-200" :
                        order.status === "Preparing" ? "bg-blue-100 text-blue-800 border-blue-200" :
                        "bg-yellow-100 text-yellow-800 border-yellow-200"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {orderHistory.length > 3 && (
              <div className="p-4 bg-blue-50 border-t border-blue-100 text-center">
                <button className="text-blue-800 hover:text-blue-900 font-semibold underline">
                  View All {orderHistory.length} Orders →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Canteen Information */}
        <div className="mt-8 bg-blue-50 rounded-lg border-l-4 border-blue-900 p-6 shadow-md">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🏪 Canteen Information</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-800">
            <div className="flex items-start">
              <span className="text-blue-900 mr-3 text-lg font-bold">⏰</span>
              <div>
                <span className="font-bold">Operating Hours:</span>
                <div className="text-blue-900 font-semibold">Monday - Friday: 7:00 AM - 8:00 PM</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-900 mr-3 text-lg font-bold">🚀</span>
              <div>
                <span className="font-bold">Average Preparation Time:</span>
                <div className="text-blue-900 font-semibold">10-15 minutes for most orders</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-900 mr-3 text-lg font-bold">💳</span>
              <div>
                <span className="font-bold">Payment Methods:</span>
                <div className="text-blue-900 font-semibold">Cash, Card, Digital Wallets</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-900 mr-3 text-lg font-bold">📞</span>
              <div>
                <span className="font-bold">Need Help?</span>
                <div className="text-blue-900 font-semibold">Contact canteen staff for assistance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
