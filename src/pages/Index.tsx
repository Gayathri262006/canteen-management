import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">Canteen Management System</h1>
        <p className="text-xl text-muted-foreground">Admin portal for managing orders and bookings</p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/dashboard">Access Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
