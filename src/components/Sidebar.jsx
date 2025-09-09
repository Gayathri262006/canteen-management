import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col min-h-screen shadow-xl">
      <div className="px-6 py-4 text-center font-bold text-xl md:text-xl tracking-wider">
  Canteen Management Application
</div>

      <nav className="flex-1">
        <ul>
          <DropdownMenu label="Dashboard">
            <SidebarLink to="/menu" label="Menu" />
            <SidebarLink to="/mycart" label="My Cart" />
            <SidebarLink to="/order-history" label="Order History" />
            <SidebarLink to="/booking-history" label="Booking History" />
          </DropdownMenu>
          <DropdownMenu label="My Profile">
            <SidebarLink to="/my-info" label="My Info" />
            <SidebarLink to="/privacy-security" label="Privacy and Security" />
            <SidebarLink to="/payment-preference" label="Payment Preference" />
            <SidebarLink to="/logout" label="Log Out" />
          </DropdownMenu>
        </ul>
      </nav>
    </aside>
  );
}

function SidebarLink({ to, label }) {
  // Use NavLink if you want active state
  return (
    <li>
      <a
  href={to}
  className="block py-2 px-6 text-xl md:text-xl hover:bg-blue-800 rounded transition"
>
  {label}
</a>

    </li>
  );
}
