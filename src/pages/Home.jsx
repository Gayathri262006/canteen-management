import React from "react";

const Home = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center shadow-2xl">
            <div className="flex items-center space-x-1">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-6.88-6.88 1.27-1.27z"/>
              </svg>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8"/>
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 leading-tight">
          Welcome to
        </h1>
        <div className="text-3xl md:text-5xl font-bold text-blue-800 mb-6">
          CANTEEN MANAGEMENT SYSTEM
        </div>
        <p className="text-lg md:text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed font-medium">
          Your comprehensive solution for seamless food ordering, meal reservations, and canteen management. 
          Experience delicious dining with professional service at your fingertips! 🍽️
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-800 text-center">
          <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
          <div className="text-blue-700 font-semibold">Happy Customers</div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
          <div className="text-green-700 font-semibold">Menu Items</div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
          <div className="text-orange-700 font-semibold">Service Available</div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {/* Orders Card */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">🍕 Food Orders</h3>
                <p className="text-green-100 font-medium">Quick & Easy Ordering</p>
              </div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-blue-800 mb-6 font-medium leading-relaxed">
              Browse our extensive menu featuring fresh, delicious meals prepared daily by our expert chefs. 
              Place orders instantly and track your food preparation in real-time.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-blue-700">
                <svg className="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Real-time order tracking</span>
              </div>
              <div className="flex items-center text-blue-700">
                <svg className="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Fresh ingredients daily</span>
              </div>
              <div className="flex items-center text-blue-700">
                <svg className="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Multiple payment options</span>
              </div>
            </div>
            <button className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors shadow-md flex items-center justify-center">
              <span>Start Ordering Now</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pre-booking Card */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">📅 Meal Pre-booking</h3>
                <p className="text-blue-100 font-medium">Reserve Your Table</p>
              </div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-blue-800 mb-6 font-medium leading-relaxed">
              Secure your preferred dining times and never miss out on your favorite meals. 
              Book tables in advance for breakfast, lunch, or dinner with guaranteed seating.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-blue-700">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Guaranteed seating</span>
              </div>
              <div className="flex items-center text-blue-700">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Book up to 7 days ahead</span>
              </div>
              <div className="flex items-center text-blue-700">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Flexible cancellation</span>
              </div>
            </div>
            <button className="w-full bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors shadow-md flex items-center justify-center">
              <span>Reserve Your Meal</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto mb-16 border border-blue-200">
        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">🚀 How It Works</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800">1</span>
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Browse Menu</h4>
            <p className="text-blue-700 text-sm">Explore our diverse food options</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800">2</span>
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Place Order</h4>
            <p className="text-blue-700 text-sm">Select items and place your order</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800">3</span>
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Track Status</h4>
            <p className="text-blue-700 text-sm">Monitor your order preparation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800">4</span>
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Enjoy Meal</h4>
            <p className="text-blue-700 text-sm">Collect and enjoy your food</p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl shadow-lg p-8 max-w-3xl mx-auto text-white text-center">
        <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
        <p className="text-blue-100 mb-8 font-medium">
          Use the navigation bar above to explore our comprehensive canteen services
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="font-bold">Food Orders</span>
            </div>
            <p className="text-blue-100 text-sm">Browse menu & place instant orders</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-bold">Pre-Booking</span>
            </div>
            <p className="text-blue-100 text-sm">Reserve meals & secure dining slots</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-16">
        <p className="text-blue-700 font-medium">
          🍽️ Powered by professional canteen management • Serving quality food with excellence 🌟
        </p>
      </div>
    </div>
  </div>
);

export default Home;
