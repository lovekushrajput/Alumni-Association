import React, { useEffect, useState } from 'react';

function EventFeed() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Default events to display
    const defaultEvents = [
        { _id: '1', title: 'Annual Alumni Meet', date: '2025-01-01', venue: 'Infosys Campus, Bangalore' },
        { _id: '2', title: 'Tech Innovation Summit', date: '2025-01-02', venue: 'TIDEL Park, Chennai' },
        { _id: '3', title: 'Alumni Sports Day', date: '2025-01-03', venue: 'Cyber City, Gurugram' },
    ];

    useEffect(() => {
        async function fetchEvents() {
            try {
                const res = await fetch('http://localhost:4000/api/events');
                const data = await res.json();
                // Use fetched events if available, otherwise use default events
                setEvents(data?.events && data.events.length > 0 ? data.events : defaultEvents);
            } catch (err) {
                console.error('Failed to load events', err);
                // Fall back to default events on error
                setEvents(defaultEvents);
            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);

    if (loading) {
        return <div className="text-center text-gray-500 py-8">Loading events...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div key={event._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="flex items-start gap-3 mb-4">
                            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.3-1.54c-.3-.36-.77-.36-1.06 0-.3.36-.3.95.01 1.3l1.85 2.14c.3.35.77.35 1.07 0L20.09 7.29c.3-.36.3-.95-.01-1.3-.31-.35-.77-.35-1.07.01l-4.05 4.29z"/>
                            </svg>
                            <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-9h-4v4h4v-4z"/>
                                </svg>
                                <span>Date: {new Date(event.date).toLocaleDateString('en-CA')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                                </svg>
                                <span>Venue: {event.venue}</span>
                            </div>
                        </div>
                        <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-medium transition">
                            Register
                        </button>
                    </div>
                ))}
            </div>
            {events.length > 6 && (
                <div className="flex justify-center mt-8">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition">
                        Load More ▼
                    </button>
                </div>
            )}
        </div>
    );
}

export default EventFeed;
