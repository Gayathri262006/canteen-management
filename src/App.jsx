import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MyCart from "./pages/MyCart";
import OrderHistory from "./pages/OrderHistory";
import BookingHistory from "./pages/BookingHistory";
import MyInfo from "./pages/MyInfo";
import PrivacySecurity from "./pages/PrivacySecurity";
import PaymentPreference from "./pages/PaymentPreference";
import LogOut from "./pages/LogOut";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 bg-white overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/mycart" element={<MyCart />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/booking-history" element={<BookingHistory />} />
            <Route path="/my-info" element={<MyInfo />} />
            <Route path="/privacy-security" element={<PrivacySecurity />} />
            <Route path="/payment-preference" element={<PaymentPreference />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
