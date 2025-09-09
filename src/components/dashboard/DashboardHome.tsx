import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Calendar, DollarSign, Users } from "lucide-react";

export function DashboardHome() {
  const stats = [
    { title: "Total Orders", value: "247", icon: ShoppingCart, change: "+12%" },
    { title: "Pending Bookings", value: "18", icon: Calendar, change: "+3%" },
    { title: "Revenue Today", value: "$2,847", icon: DollarSign, change: "+8%" },
    { title: "Active Customers", value: "142", icon: Users, change: "+5%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Order #{1000 + i}</p>
                    <p className="text-sm text-muted-foreground">Customer {i}</p>
                  </div>
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                    Preparing
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pending Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Booking #{2000 + i}</p>
                    <p className="text-sm text-muted-foreground">12:00 PM - Table {i}</p>
                  </div>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}