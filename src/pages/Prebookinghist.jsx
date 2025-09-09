import React, { useState } from "react";
import BookingHistory from "@/components/BookingHistory";
import { meals } from "@/data/menuData";

const BookingHistoryPage = () => {
  const [bookingHistory] = useState([
    // Sample booking history data for demonstration
    {
      bookingId: 1,
      mealId: 1,
      slot: "12:00 PM - 1:00 PM",
      date: "2024-01-20",
      status: "Confirmed"
    },
    {
      bookingId: 2,
      mealId: 2,
      slot: "7:00 PM - 8:00 PM",
      date: "2024-01-18",
      status: "Completed"
    },
    {
      bookingId: 3,
      mealId: 1,
      slot: "1:00 PM - 2:00 PM",
      date: "2024-01-15",
      status: "Cancelled"
    },
    {
      bookingId: 4,
      mealId: 3,
      slot: "8:00 AM - 9:00 AM",
      date: "2024-01-22",
      status: "Confirmed"
    }
  ]);

  // Calculate booking statistics
  const confirmedBookings = bookingHistory.filter(booking => booking.status === "Confirmed").length;
  const completedBookings = bookingHistory.filter(booking => booking.status === "Completed").length;
  const cancelledBookings = bookingHistory.filter(booking => booking.status === "Cancelled").length;

  // Get upcoming bookings (confirmed bookings with future dates)
  const today = new Date();
  const upcomingBookings = bookingHistory.filter(booking => {
    const bookingDate = new Date(booking.date);
    return booking.status === "Confirmed" && bookingDate >= today;
  }).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Booking History</h1>
          <p className="text-blue-700 font-medium">
            Track all your canteen meal bookings 
          </p>
          
          {/* Stats Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-900">
              <div className="text-3xl font-bold text-blue-900 mb-1">{bookingHistory.length}</div>
              <div className="text-sm text-blue-700 font-semibold">Total Bookings</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="text-3xl font-bold text-green-600 mb-1">{confirmedBookings}</div>
              <div className="text-sm text-green-700 font-semibold">Confirmed</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-600 mb-1">{completedBookings}</div>
              <div className="text-sm text-purple-700 font-semibold">Completed</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-600 mb-1">{upcomingBookings}</div>
              <div className="text-sm text-orange-700 font-semibold">Upcoming</div>
            </div>
          </div>
        </div>

      

   
            

        {/* Booking History Component */}
        <BookingHistory bookings={bookingHistory} meals={meals} />

        {/* Enhanced Empty State */}
        {bookingHistory.length === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-blue-200">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">No bookings made yet</h3>
            <p className="text-blue-700 mb-6 font-medium">
              You haven't made any meal reservations yet. Start by booking your favorite canteen meal!
            </p>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-all duration-200 font-semibold shadow-md flex items-center mx-auto">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Make Your First Booking
            </button>
          </div>
        )}

      

        {/* Upcoming Bookings Alert */}
        {upcomingBookings > 0 && (
          <div className="mt-6 bg-green-50 rounded-lg border-l-4 border-green-500 p-6 shadow-md">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="text-lg font-bold text-green-800">Upcoming Bookings</h4>
                <p className="text-green-700 font-medium">
                  You have <span className="font-bold">{upcomingBookings}</span> confirmed meal {upcomingBookings === 1 ? 'booking' : 'bookings'} coming up. Don't forget to arrive on time!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistoryPage;
