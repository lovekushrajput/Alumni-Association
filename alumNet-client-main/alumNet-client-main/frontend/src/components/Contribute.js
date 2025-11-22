import React from 'react';

function Contribute() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow text-gray-800 mt-10">
      <h1 className="text-3xl font-bold mb-4">🤲 Contribute</h1>
      <p className="mb-6">Support your alma mater and alumni community. Discover ways to give back, volunteer, or share your expertise.</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Make a donation to support scholarships</li>
        <li>Become a mentor for students and alumni</li>
        <li>Volunteer for events and reunions</li>
      </ul>
      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">Get Involved</button>
    </div>
  );
}

export default Contribute;
