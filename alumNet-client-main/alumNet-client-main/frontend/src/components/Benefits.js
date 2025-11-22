import React from 'react';

function Benefits() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow text-gray-800 mt-10">
      <h1 className="text-3xl font-bold mb-4">🎁 Benefits</h1>
      <p className="mb-6">Unlock exclusive alumni benefits and perks. Enjoy special offers, career services, and lifelong learning opportunities.</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Discounts on courses and certifications</li>
        <li>Access to alumni events and workshops</li>
        <li>Networking opportunities and career support</li>
      </ul>
      <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">View Benefits</button>
    </div>
  );
}

export default Benefits;
