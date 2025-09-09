import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { PreBooking } from "@/types/admin";
import { useToast } from "@/hooks/use-toast";

const mockBookings: PreBooking[] = [
  {
    bookingId: 2001,
    customerId: 1,
    customerName: "Alice Wilson",
    mealId: 1,
    mealName: "Lunch Special",
    date: new Date("2024-01-16T12:00:00"),
    slot: "12:00 PM - 1:00 PM",
    status: "pending"
  },
  {
    bookingId: 2002,
    customerId: 2,
    customerName: "Bob Brown",
    mealId: 2,
    mealName: "Dinner Buffet",
    date: new Date("2024-01-16T19:00:00"),
    slot: "7:00 PM - 8:00 PM", 
    status: "pending"
  },
  {
    bookingId: 2003,
    customerId: 3,
    customerName: "Carol Davis",
    mealId: 3,
    mealName: "Weekend Brunch",
    date: new Date("2024-01-20T11:00:00"),
    slot: "11:00 AM - 12:00 PM",
    status: "approved"
  }
];

export function BookingManagement() {
  const [bookings, setBookings] = useState<PreBooking[]>(mockBookings);
  const { toast } = useToast();

  const updateBookingStatus = (bookingId: number, newStatus: PreBooking['status']) => {
    setBookings(bookings.map(booking => 
      booking.bookingId === bookingId ? { ...booking, status: newStatus } : booking
    ));
    
    toast({
      title: "Booking Updated",
      description: `Booking #${bookingId} has been ${newStatus}`,
    });
  };

  const getStatusBadge = (status: PreBooking['status']) => {
    const variants = {
      pending: "secondary",
      approved: "default", 
      rejected: "destructive"
    } as const;

    return (
      <Badge variant={variants[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Booking Management</h2>
        <p className="text-muted-foreground">Review and manage meal bookings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Meal</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time Slot</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.bookingId}>
                  <TableCell className="font-medium">#{booking.bookingId}</TableCell>
                  <TableCell>{booking.customerName}</TableCell>
                  <TableCell>{booking.mealName}</TableCell>
                  <TableCell>{booking.date.toLocaleDateString()}</TableCell>
                  <TableCell>{booking.slot}</TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  <TableCell>
                    {booking.status === 'pending' && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => updateBookingStatus(booking.bookingId, 'approved')}
                          className="bg-primary hover:bg-primary/90"
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateBookingStatus(booking.bookingId, 'rejected')}
                        >
                          <X className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}
                    {booking.status !== 'pending' && (
                      <span className="text-sm text-muted-foreground">
                        {booking.status === 'approved' ? 'Approved' : 'Rejected'}
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}