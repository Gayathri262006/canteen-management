import { LayoutDashboard, ShoppingCart, Calendar, Users, Package, FileText, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Order Management", url: "/dashboard/orders", icon: ShoppingCart },
  { title: "Booking Management", url: "/dashboard/bookings", icon: Calendar },
  { title: "Customer Management", url: "/dashboard/customers", icon: Users },
  { title: "Inventory", url: "/dashboard/inventory", icon: Package },
  { title: "Reports", url: "/dashboard/reports", icon: FileText },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <h2 className="text-lg font-bold text-primary">
            {state === "collapsed" ? (
              <div className="w-8 h-8 rounded-full logo-pulse shadow-glow overflow-hidden">
                <img 
                  src="logooo.png" 
                  alt="Canteen Management System Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <>
                <div className="w-12 h-12 rounded-full logo-pulse shadow-glow overflow-hidden bg-white">
                  <img 
                    src="logooo.png" 
                    alt="Canteen Management System Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-sidebar-foreground leading-tight">
                    Canteen Management
                  </h2>
                  <p className="text-xs text-sidebar-foreground/60">
                    Admin Dashboard
                  </p>
                </div>
              </>
            )}
          </h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end
                      className={({ isActive }) =>
                        isActive 
                          ? "bg-accent text-accent-foreground font-medium" 
                          : "hover:bg-muted/50"
                      }
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}