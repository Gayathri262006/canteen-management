import React from "react";

const BookingHistory = ({ bookings, meals }) => {
  const getMealName = id => meals.find(meal => meal.mealId === id)?.name || "Unknown";

  const getStatusBadge = (status) => {
    const statusClasses = {
      "Confirmed": "bg-green-100 text-green-800 border border-green-200",
      "Completed": "bg-blue-100 text-blue-800 border border-blue-200", 
      "Cancelled": "bg-red-100 text-red-800 border border-red-200",
      "Pending": "bg-yellow-100 text-yellow-800 border border-yellow-200"
    };
    
    return statusClasses[status] || "bg-gray-100 text-gray-800 border border-gray-200";
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "Confirmed":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case "Completed":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case "Cancelled":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-blue-200">
      <div className="p-6 border-b border-blue-100 bg-blue-50">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-blue-900 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Booking History
          </h3>
          <div className="text-sm text-blue-700 font-semibold">
            {bookings.length} {bookings.length === 1 ? 'booking' : 'bookings'} found
          </div>
        </div>
      </div>

      <div className="p-6">
        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-2">No bookings made yet</h4>
            <p className="text-blue-700 italic">Start by making your first canteen reservation!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <div key={booking.bookingId} className="bg-gray-50 rounded-lg p-5 border-l-4 border-blue-800 hover:shadow-md transition-all duration-200 hover:bg-blue-50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-3 text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-blue-900 text-lg">{booking.date}</div>
                      <div className="text-xs text-blue-700 font-medium">Booking ID: #{booking.bookingId}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(booking.status || "Confirmed")}`}>
                      {getStatusIcon(booking.status || "Confirmed")}
                      {booking.status || "Confirmed"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center p-3 bg-white rounded-lg border border-blue-100">
                    <svg className="w-5 h-5 mr-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <div className="text-blue-600 font-semibold">Meal</div>
                      <div className="text-blue-900 font-bold">{getMealName(booking.mealId)}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-white rounded-lg border border-blue-100">
                    <svg className="w-5 h-5 mr-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="text-blue-600 font-semibold">Time Slot</div>
                      <div className="text-blue-900 font-bold">{booking.slot}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {(booking.status || "Confirmed") === "Confirmed" && (
                    <>
                      <button className="text-xs bg-blue-800 text-white px-3 py-1 rounded-lg hover:bg-blue-900 transition-colors font-semibold">
                        Modify Booking
                      </button>
                      <button className="text-xs bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                        Cancel Booking
                      </button>
                    </>
                  )}
                  {booking.status === "Completed" && (
                    <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                      Reorder
                    </button>
                  )}
                  <button className="text-xs bg-gray-600 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {bookings.length > 0 && (
        <div className="p-4 bg-blue-50 border-t border-blue-100 rounded-b-lg">
          <div className="text-center">
            <p className="text-sm text-blue-700 font-medium">
              💡 Need help with your bookings? 
              <button className="ml-2 text-blue-800 hover:text-blue-900 font-semibold underline">
                Contact Canteen Support
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
