import React, { useState } from "react";
import PreBookingForm from "@/components/PreBookingForm";

const PreBookingPage = () => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [lastBooking, setLastBooking] = useState(null);

  const addBooking = (booking) => {
    const newBooking = {
      bookingId: bookingHistory.length + 1,
      ...booking,
      status: "Confirmed",
      date: new Date().toISOString().split('T')[0]
    };
    
    setBookingHistory(prev => [...prev, newBooking]);
    setLastBooking(newBooking);
    setShowConfirmation(true);
    
    // Auto-hide confirmation after 5 seconds
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Pre-Book a Meal</h1>
          <p className="text-blue-700 font-medium">
            Reserve your preferred canteen meal slot in advance for a guaranteed dining experience
          </p>
        </div>

        {/* Success Confirmation */}
        {showConfirmation && lastBooking && (
          <div className="mb-6 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-6 shadow-lg animate-fade-in">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Booking Confirmed Successfully!
                </h3>
                <div className="bg-white rounded-lg p-4 border border-green-200 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm">
                        {lastBooking.bookingId}
                      </div>
                      <div>
                        <div className="font-bold text-blue-900">Booking #{lastBooking.bookingId}</div>
                        <div className="text-sm text-blue-700 font-medium">{lastBooking.date}</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 border border-green-200 text-green-800 text-sm font-bold rounded-full">
                      {lastBooking.status}
                    </span>
                  </div>
                  <div className="text-green-700 font-medium">
                    <strong>Reserved:</strong> {lastBooking.slot} on {new Date(lastBooking.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <p className="text-sm text-green-700 mt-3 font-medium">
                  Your food is reserved! Please arrive within 15 minutes of your selected time slot.
                </p>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                >
                  Perfect! ✓
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-900">
            <div className="text-3xl font-bold text-blue-900 mb-1">{bookingHistory.length}</div>
            <div className="text-sm text-blue-700 font-semibold">Total Bookings Made</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-600 mb-1">
              {bookingHistory.filter(b => b.status === "Confirmed").length}
            </div>
            <div className="text-sm text-green-700 font-semibold">Active Reservations</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
            <div className="text-3xl font-bold text-orange-600 mb-1">
              {bookingHistory.filter(b => new Date(b.date) >= new Date()).length}
            </div>
            <div className="text-sm text-orange-700 font-semibold">Upcoming Meals</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6 bg-white rounded-lg shadow-lg p-6 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Actions</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-all duration-200 flex items-center font-semibold shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              View Booking History
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 flex items-center font-semibold shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Check Today's Menu
            </button>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all duration-200 flex items-center font-semibold shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Contact Canteen
            </button>
          </div>
        </div>

        {/* Main Booking Form - Note: This will render the updated PreBookingForm component */}
        <PreBookingForm onBook={addBooking} />

        {/* Booking Guidelines */}
        <div className="mt-8 bg-blue-50 rounded-lg border-l-4 border-blue-900 p-6 shadow-md">
          <h3 className="text-xl font-bold text-blue-900 mb-4">📋 Canteen Booking Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-800">
            <div className="flex items-start">
              <span className="text-blue-900 mr-3 text-lg font-bold">•</span>
              <div>
                <span className="font-bold">Advanced Booking:</span>
                <div className="text-blue-900 font-medium">Bookings can be made up to 7 days in advance</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-900 mr-3 text-lg font-bold">•</span>
              <div>
                <span className="font-bold">Arrival Time:</span>
                <div className="text-blue-900 font-medium">Please arrive within 15 minutes of reserved time</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-900 mr-3 text-lg font-bold">•</span>
              <div>
                <span className="font-bold">Cancellation Policy:</span>
                <div className="text-blue-900 font-medium">Cancellations must be made at least 2 hours prior</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-900 mr-3 text-lg font-bold">•</span>
              <div>
                <span className="font-bold">Special Requests:</span>
                <div className="text-blue-900 font-medium">Contact canteen staff for special dietary requirements</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Bookings Summary */}
        {bookingHistory.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-lg border border-blue-200">
            <div className="p-6 border-b border-blue-100 bg-blue-50">
              <h3 className="text-xl font-bold text-blue-900">Recent Bookings</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {bookingHistory.slice(-3).reverse().map((booking) => (
                  <div key={booking.bookingId} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-800">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm">
                          {booking.bookingId}
                        </div>
                        <div>
                          <div className="font-bold text-blue-900">Booking #{booking.bookingId}</div>
                          <div className="text-sm text-blue-700 font-medium">{booking.date} • {booking.slot}</div>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded-full border border-green-200">
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {bookingHistory.length > 3 && (
                <div className="text-center mt-4">
                  <button className="text-blue-800 hover:text-blue-900 font-semibold underline">
                    View All {bookingHistory.length} Bookings →
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

       
      </div>
    </div>
  );
};

export default PreBookingPage;
