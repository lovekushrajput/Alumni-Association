import React from 'react';

function More() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow text-gray-800 mt-10">
      <h1 className="text-3xl font-bold mb-4">➕ More</h1>
      <p className="mb-6">Discover additional resources, news, and updates for alumni. Stay connected and informed about your community.</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Latest alumni news and announcements</li>
        <li>Community forums and discussion boards</li>
        <li>Contact alumni office for support</li>
      </ul>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">Explore More</button>
    </div>
  );
}

export default More;
