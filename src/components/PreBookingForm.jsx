import React, { useState } from "react";
import { meals } from "@/data/menuData";

const PreBookingForm = ({ onBook }) => {
  const [selectedMeal, setSelectedMeal] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [date, setDate] = useState("");

  const handleBooking = () => {
    if (selectedMeal && selectedSlot && date) {
      onBook({ mealId: parseInt(selectedMeal), slot: selectedSlot, date });
      setSelectedMeal("");
      setSelectedSlot("");
      setDate("");
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  // Get selected meal details
  const selectedMealData = selectedMeal ? meals.find(m => m.mealId === parseInt(selectedMeal)) : null;

  return (
    <div className="bg-white rounded-lg shadow-lg border border-blue-200">
      {/* Header Section */}
      <div className="p-6 border-b border-blue-100 bg-blue-50">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900">Pre-Book Meal</h3>
            <p className="text-sm text-blue-700 font-medium">Reserve your preferred dining experience</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Meal Selection */}
        <div>
          <label className="block text-sm font-bold text-blue-900 mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Select Meal Type
          </label>
          <select 
            value={selectedMeal} 
            onChange={e => {
              setSelectedMeal(e.target.value);
              setSelectedSlot(""); // Reset slot when meal changes
            }}
            className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 bg-white font-medium text-blue-900 transition-all duration-200"
          >
            <option value="" className="text-gray-400">Choose your preferred meal...</option>
            {meals.map(meal => (
              <option key={meal.mealId} value={meal.mealId} className="font-medium">
                {meal.name} ({meal.timeSlot})
              </option>
            ))}
          </select>
          {selectedMealData && (
            <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 font-medium">
                 Selected: <span className="font-bold">{selectedMealData.name}</span> • Available during {selectedMealData.timeSlot}
              </p>
            </div>
          )}
        </div>

        {/* Slot Selection */}
        <div>
          <label className="block text-sm font-bold text-blue-900 mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Select Time Slot
          </label>
          <select 
            value={selectedSlot} 
            onChange={e => setSelectedSlot(e.target.value)} 
            disabled={!selectedMeal}
            className={`w-full px-4 py-3 border-2 rounded-lg shadow-sm font-medium transition-all duration-200 ${
              selectedMeal 
                ? 'border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 bg-white text-blue-900' 
                : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <option value="" className="text-gray-400">
              {selectedMeal ? "Choose your time slot..." : "⚠️ Please select a meal first"}
            </option>
            {selectedMealData?.availableSlots.map(slot => (
              <option key={slot} value={slot} className="font-medium">{slot}</option>
            ))}
          </select>
          {selectedMealData && (
            <p className="text-sm text-blue-700 mt-2 font-medium">
              Available slots for <span className="font-bold text-blue-800">{selectedMealData.name}</span>
            </p>
          )}
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-sm font-bold text-blue-900 mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Select Reservation Date
          </label>
          <input 
            type="date" 
            value={date} 
            onChange={e => setDate(e.target.value)}
            min={today}
            className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 font-medium text-blue-900 transition-all duration-200"
          />
          <p className="text-sm text-blue-700 mt-2 font-medium flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Bookings available from today onwards (up to 7 days in advance)
          </p>
        </div>

        {/* Booking Progress Indicators */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-4">
            {/* Step 1 */}
            <div className={`flex items-center ${selectedMeal ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                selectedMeal ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                1
              </div>
              <span className="ml-2 text-xs font-medium">Meal</span>
            </div>
            
            {/* Step 2 */}
            <div className={`flex items-center ${selectedSlot ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                selectedSlot ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                2
              </div>
              <span className="ml-2 text-xs font-medium">Time</span>
            </div>
            
            {/* Step 3 */}
            <div className={`flex items-center ${date ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                date ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                3
              </div>
              <span className="ml-2 text-xs font-medium">Date</span>
            </div>
          </div>
          
          <div className="text-xs text-gray-600 font-medium">
            {[selectedMeal, selectedSlot, date].filter(Boolean).length}/3 Complete
          </div>
        </div>

        {/* Booking Summary */}
        {selectedMeal && selectedSlot && date && (
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-800 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-blue-900 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Booking Summary
              </h4>
              <div className="text-green-600 font-bold text-sm"> Ready to Book</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="text-blue-600 font-semibold text-sm mb-1">Meal Selection</div>
                <div className="font-bold text-blue-900">{selectedMealData?.name}</div>
                <div className="text-blue-700 text-sm">({selectedMealData?.timeSlot})</div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="text-blue-600 font-semibold text-sm mb-1">Time Slot</div>
                <div className="font-bold text-blue-900">{selectedSlot}</div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="text-blue-600 font-semibold text-sm mb-1">Reservation Date</div>
                <div className="font-bold text-blue-900">{new Date(date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</div>
              </div>
            </div>
          </div>
        )}

        {/* Book Button */}
        <button 
          onClick={handleBooking} 
          disabled={!selectedMeal || !selectedSlot || !date}
          className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-200 text-lg flex items-center justify-center ${
            (!selectedMeal || !selectedSlot || !date)
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-blue-800 text-white hover:bg-blue-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
          }`}
        >
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {(!selectedMeal || !selectedSlot || !date) ? 
            'Complete all fields' : 
            'Confirm Booking Now'
          }
        </button>

      
        
      </div>
    </div>
  );
};

export default PreBookingForm;
