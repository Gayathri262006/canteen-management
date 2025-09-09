import React from "react";

const OrderHistory = ({ orders, menuItems }) => {
  const getItemName = id => menuItems.find(item => item.foodId === id)?.name || "Unknown";
  
  // Calculate total price for an order
  const calculateOrderTotal = (orderItems) => {
    return orderItems.reduce((total, item) => {
      const menuItem = menuItems.find(mi => mi.foodId === item.foodId);
      return total + (menuItem ? menuItem.price * item.quantity : 0);
    }, 0);
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      "Delivered": "bg-green-100 text-green-800 border border-green-200",
      "Preparing": "bg-blue-100 text-blue-800 border border-blue-200",
      "Ready": "bg-purple-100 text-purple-800 border border-purple-200",
      "Cancelled": "bg-red-100 text-red-800 border border-red-200",
      "Pending": "bg-yellow-100 text-yellow-800 border border-yellow-200"
    };
    
    return statusClasses[status] || "bg-gray-100 text-gray-800 border border-gray-200";
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "Delivered":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case "Preparing":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
        );
      case "Ready":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
      case "Cancelled":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-blue-200">
      {/* Header Section */}
      <div className="p-6 border-b border-blue-100 bg-blue-50">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-blue-900 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Order History
          </h3>
          <div className="text-sm text-blue-700 font-semibold">
            {orders.length} {orders.length === 1 ? 'order' : 'orders'} found
          </div>
        </div>
      </div>

      <div className="p-6">
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-2">No orders placed yet</h4>
            <p className="text-blue-700 italic">Start by ordering your favorite food from our canteen!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div key={order.orderId} className="bg-gray-50 rounded-lg border-l-4 border-blue-800 hover:shadow-md transition-all duration-200 overflow-hidden">
                {/* Order Header */}
                <div className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-3 text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-bold text-blue-900 text-lg">{order.date}</div>
                        <div className="text-xs text-blue-700 font-medium">Order ID: #{order.orderId}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(order.status || "Pending")}`}>
                        {getStatusIcon(order.status || "Pending")}
                        {order.status || "Pending"}
                      </span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="mb-4">
                    <div className="text-sm text-blue-700 font-semibold mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Items Ordered:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {order.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="flex items-center justify-between bg-white px-4 py-2 rounded-lg border border-blue-100"
                        >
                          <span className="text-blue-900 font-medium">
                            {getItemName(item.foodId)}
                          </span>
                          <span className="text-blue-700 font-bold">
                            {item.quantity}x
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-blue-700">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <span className="font-semibold">
                          {order.items.reduce((sum, item) => sum + item.quantity, 0)} items total
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          ₹{calculateOrderTotal(order.items).toFixed(2)}
                        </div>
                        <div className="text-xs text-blue-600 font-medium">Total Amount</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(order.status || "Pending") === "Delivered" && (
                      <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                        Reorder
                      </button>
                    )}
                    {((order.status || "Pending") === "Pending" || (order.status || "Pending") === "Preparing") && (
                      <button className="text-xs bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                        Cancel Order
                      </button>
                    )}
                    <button className="text-xs bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                      View Details
                    </button>
                    <button className="text-xs bg-gray-600 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                      Download Receipt
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {orders.length > 0 && (
        <div className="p-4 bg-blue-50 border-t border-blue-100 rounded-b-lg">
          <div className="text-center">
            <p className="text-sm text-blue-700 font-medium">
              💡 Questions about your order? 
              <button className="ml-2 text-blue-800 hover:text-blue-900 font-semibold underline">
                Contact Canteen Support
              </button>
              
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
