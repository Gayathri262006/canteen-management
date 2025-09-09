import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Routes, Route } from "react-router-dom";
import { OrderManagement } from "@/components/dashboard/OrderManagement";
import { BookingManagement } from "@/components/dashboard/BookingManagement";
import { DashboardHome } from "@/components/dashboard/DashboardHome";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/orders" element={<OrderManagement />} />
              <Route path="/bookings" element={<BookingManagement />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;