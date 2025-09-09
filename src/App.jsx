import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import OrderPage from "@/pages/OrdersPage";
import OrderHistoryPage from "@/pages/Orderhistory";
import PreBookingPage from "@/pages/PreBookingPage";
import BookingHistoryPage from "@/pages/Prebookinghist";
import Home from "@/pages/Home";
import logooo from '@/assets/logooo.png';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { path: "/order", label: "Order Food", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
    { path: "/order-history", label: "Order History", icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
    { path: "/prebooking", label: "Pre-Booking", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { path: "/booking-history", label: "Booking History", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg border-b-4 border-blue-900 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-2xl overflow-hidden p-2 border-4 border-blue-900">
                <img src={logooo} alt="Canteen Management System" />
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-900">CANTEEN</span>
                <span className="text-sm font-semibold text-blue-700 -mt-1">MANAGEMENT SYSTEM</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center ${
                    isActive(item.path)
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'text-blue-800 hover:text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-blue-800 hover:text-blue-900 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-blue-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-900 text-white'
                      : 'text-blue-800 hover:text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/order-history" element={<OrderHistoryPage />} />
            <Route path="/prebooking" element={<PreBookingPage />} />
            <Route path="/booking-history" element={<BookingHistoryPage />} />
            <Route path="*" element={<OrderPage />} /> {/* Default page */}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white border-t-4 border-blue-800">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-6.88-6.88 1.27-1.27z"/>
                    </svg>
                    <svg className="w-2 h-2 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="8"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-blue-100 text-sm font-bold">© 2025 Canteen Management System</div>
                  <div className="text-blue-200 text-xs">All rights reserved • Serving quality food with excellence</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-blue-200">
                <button className="hover:text-white transition-colors font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Help & Support
                </button>
                <button className="hover:text-white transition-colors font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Terms of Service
                </button>
                <button className="hover:text-white transition-colors font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Privacy Policy
                </button>
              </div>
            </div>

            {/* Additional Footer Information */}
            <div className="mt-6 pt-6 border-t border-blue-800 text-center">
              <div className="grid md:grid-cols-3 gap-6 text-sm text-blue-200">
                <div>
                  <div className="font-semibold text-white mb-2">🏪 Canteen Hours</div>
                  <div>Monday - Friday: 7:00 AM - 9:00 PM</div>
                  <div>Saturday: 8:00 AM - 8:00 PM</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">📞 Contact Info</div>
                  <div>Phone: +91-XXXX-XXXXXX</div>
                  <div>Email: canteen@company.com</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">🍽️ Services</div>
                  <div>Food Orders </div>
                  <div>Fresh Meals • Quick Service</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
