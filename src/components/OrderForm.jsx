import React, { useState } from "react";
import { menuItems } from "@/data/menuData";

const OrderForm = ({ onPlaceOrder }) => {
  // State to keep track of selected food items with quantity
  const [order, setOrder] = useState([]); // Each item is { foodId, quantity }

  // Handle adding a menu item or increasing its quantity
  const handleAddItem = (foodId) => {
    setOrder(prev =>
      prev.some(item => item.foodId === foodId)
        ? prev.map(item =>
            item.foodId === foodId ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prev, { foodId, quantity: 1 }]
    );
  };

  // Handle decreasing quantity or removing items
  const handleRemoveItem = (foodId) => {
    setOrder(prev =>
      prev
        .map(item =>
          item.foodId === foodId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Place the order by passing the order array up to parent
  const placeOrder = () => {
    if (order.length > 0) {
      onPlaceOrder(order);
      setOrder([]);
    }
  };

  // Calculate total items and total price
  const totalItems = order.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = order.reduce((sum, item) => {
    const menuItem = menuItems.find(mi => mi.foodId === item.foodId);
    return sum + (menuItem ? menuItem.price * item.quantity : 0);
  }, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-blue-200">
      {/* Header Section */}
      <div className="p-6 border-b border-blue-100 bg-blue-50">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-blue-900 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            🍽️ Order Food
          </h3>
          {totalItems > 0 && (
            <div className="flex items-center bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 16a1 1 0 01-1-1v-3a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H8z" clipRule="evenodd"/>
              </svg>
              {totalItems} items
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Menu Items */}
        <div className="space-y-4 mb-6">
          {menuItems.map((item, index) => {
            const orderItem = order.find(oi => oi.foodId === item.foodId);
            const hasItems = orderItem && orderItem.quantity > 0;
            
            return (
              <div 
                key={item.foodId} 
                className={`rounded-lg p-4 border-l-4 transition-all duration-200 ${
                  hasItems 
                    ? 'bg-blue-50 border-blue-800 shadow-md' 
                    : 'bg-gray-50 border-gray-300 hover:border-blue-600 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    {/* Item Number */}
                    <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="font-bold text-blue-900 text-lg">{item.name}</div>
                      <div className="flex items-center mt-1">
                        <span className="text-green-600 font-bold text-lg">₹{item.price}</span>
                        {item.category && (
                          <span className="ml-3 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                            {item.category}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-sm text-blue-700 mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 ml-4">
                    <button 
                      onClick={() => handleRemoveItem(item.foodId)} 
                      disabled={!orderItem}
                      className="w-10 h-10 rounded-full bg-red-600 text-white font-bold text-xl flex items-center justify-center hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
                    >
                      −
                    </button>
                    
                    <div className="w-12 h-10 bg-white border-2 border-blue-200 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-900 text-lg">
                        {orderItem ? orderItem.quantity : 0}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => handleAddItem(item.foodId)}
                      className="w-10 h-10 rounded-full bg-green-600 text-white font-bold text-xl flex items-center justify-center hover:bg-green-700 transition-all duration-200 shadow-md"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Individual Item Total */}
                {hasItems && (
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <div className="flex justify-end">
                      <span className="text-blue-800 font-semibold">
                        Subtotal: ₹{(item.price * orderItem.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        {order.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-6 border-l-4 border-blue-800 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-blue-900 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                📋 Order Summary
              </h4>
            </div>
            
            <div className="space-y-2 mb-4">
              {order.map(orderItem => {
                const menuItem = menuItems.find(mi => mi.foodId === orderItem.foodId);
                return menuItem ? (
                  <div key={orderItem.foodId} className="flex justify-between text-sm text-blue-800">
                    <span className="font-medium">
                      {menuItem.name} × {orderItem.quantity}
                    </span>
                    <span className="font-bold">₹{(menuItem.price * orderItem.quantity).toFixed(2)}</span>
                  </div>
                ) : null;
              })}
            </div>
            
            <div className="border-t border-blue-300 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-blue-900 font-bold text-lg">
                  Total Items: {totalItems}
                </span>
                <span className="text-blue-900 font-bold text-2xl">
                  ₹{totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Place Order Button */}
        <button 
          onClick={placeOrder} 
          disabled={order.length === 0}
          className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center text-lg ${
            order.length === 0 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-blue-800 text-white hover:bg-blue-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
          }`}
        >
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m.6 8l-1-5M7 13L5.4 5M7 13l-1.35 5.39A1 1 0 006.61 19H19M9 19a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
          {order.length === 0 ? '🍽️ Add items to place order' : `🚀 Place Order (${totalItems} items - ₹${totalPrice.toFixed(2)})`}
        </button>

        {/* Quick Actions */}
        {order.length > 0 && (
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <button 
              onClick={() => setOrder([])}
              className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
            >
              Clear Cart
            </button>
            <button className="flex-1 bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors font-semibold text-sm">
              Save for Later
            </button>
          </div>
        )}
      </div>

      {/* Footer Tips */}
      <div className="p-4 bg-blue-50 border-t border-blue-100 rounded-b-lg">
        <div className="text-center">
          <p className="text-xs text-blue-700 font-medium">
            💡 <span className="font-semibold">Canteen Tips:</span> Order ahead to skip the queue • Fresh food prepared daily • Special dietary options available
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
