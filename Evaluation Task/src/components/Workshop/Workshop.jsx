import React from 'react';
import { FaRegCalendar } from "react-icons/fa";

function Workshop() {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">THIS IS WORKSHOP SECTION</h2>
      <p className="text-center mb-8">This is the description for workshop sections.</p>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-4 flex flex-col items-start w-96">
          <img src="src/img/more_money.webp" alt="How to make more money image" className="mb-4 w-full  object-cover" />
          <h3 className="text-xl font-semibold mb-2 ml-10">How to make more money</h3>
          <p className="text-gray-600 flex justify-center items-center gap-2 mb-4 ml-10"><FaRegCalendar />Jun 11th, 2024 at 10:00 AM (IST)</p>
          <div className="flex items-center justify-between w-full">
            <img src="src/img/bruce_wayne.jpg" alt="Icon" className="w-10 h-10 rounded-full" />
            <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">View Details</a>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex flex-col items-start w-96">
          <img src="src/img/fight_crime.webp" alt="How to fight crime image" className="mb-4 w-full object-cover" />
          <h3 className="text-xl font-semibold mb-2">How to fight crime</h3>
          <p className="text-gray-600 flex justify-center items-center gap-2 mb-4"><FaRegCalendar />Jun 1st, 2034 at 10:00 AM (IST)</p>
          <div className="flex items-center justify-between w-full">
            <img src="src/img/dark_night.jpg" alt="Icon" className="w-10 h-10 rounded-full" />
            <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">View Details</a>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex flex-col items-start w-96">
          <img src="src/img/workshop_connected.webp" alt="This is a workshop connected to a ticket image" className="mb-4 w-full object-cover" />
          <h3 className="text-xl font-semibold mb-2">This is a workshop connected to a ticket</h3>
          <p className="text-gray-600 flex justify-center items-center gap-2 mb-4"><FaRegCalendar />Jun 1st, 2034 at 10:00 AM (IST)</p>
          <div className="flex items-center justify-between w-full">
            <div className='flex'>
            <img src="src/img/bruce_wayne.jpg" alt="Icon" className="w-10 h-10 rounded-full" />
            <img src="src/img/dark_night.jpg" alt="Icon" className="w-10 h-10 rounded-full" />
            </div>
            
            <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshop;
