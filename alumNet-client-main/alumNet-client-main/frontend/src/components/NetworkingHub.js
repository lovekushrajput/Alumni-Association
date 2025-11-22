import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NetworkingHub() {
    const [activeFilter, setActiveFilter] = useState('all');

    // Mock networking connections data
    const networkingConnections = [
        {
            _id: '1',
            name: 'Rajesh Kumar',
            batch: '2015',
            department: 'Computer Science',
            currentRole: 'Senior Software Engineer at TechCorp',
            expertise: ['Node.js', 'React', 'AWS'],
            location: 'Bangalore',
            image: 'RK'
        },
        {
            _id: '2',
            name: 'Priya Singh',
            batch: '2018',
            department: 'Electronics',
            currentRole: 'Product Manager at StartupXYZ',
            expertise: ['Product Strategy', 'Leadership', 'Analytics'],
            location: 'Mumbai',
            image: 'PS'
        },
        {
            _id: '3',
            name: 'Arjun Patel',
            batch: '2016',
            department: 'Mechanical',
            currentRole: 'Founder at EngineerHub',
            expertise: ['CAD', 'Manufacturing', 'Innovation'],
            location: 'Pune',
            image: 'AP'
        },
        {
            _id: '4',
            name: 'Neha Gupta',
            batch: '2019',
            department: 'Computer Science',
            currentRole: 'Data Scientist at AnalyticsInc',
            expertise: ['Machine Learning', 'Python', 'Big Data'],
            location: 'Hyderabad',
            image: 'NG'
        },
        {
            _id: '5',
            name: 'Vikram Sharma',
            batch: '2014',
            department: 'Business Administration',
            currentRole: 'CEO at ConsultancyGlobal',
            expertise: ['Business Strategy', 'Finance', 'Consulting'],
            location: 'Delhi',
            image: 'VS'
        },
        {
            _id: '6',
            name: 'Anjali Verma',
            batch: '2017',
            department: 'Computer Science',
            currentRole: 'DevOps Engineer at CloudSystems',
            expertise: ['Kubernetes', 'Docker', 'CI/CD'],
            location: 'Bangalore',
            image: 'AV'
        }
    ];

    const filterOptions = [
        { value: 'all', label: 'All Professionals' },
        { value: 'mentor', label: 'Available for Mentoring' },
        { value: 'collaborate', label: 'Open to Collaboration' },
        { value: 'hiring', label: 'Currently Hiring' }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">🤝 Networking Hub</h2>
                <p className="text-gray-600">Connect with alumni professionals, find mentors, and collaborate on opportunities.</p>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input 
                        type="text" 
                        placeholder="Search by name or role..." 
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>All Departments</option>
                        <option>Computer Science</option>
                        <option>Electronics</option>
                        <option>Mechanical</option>
                        <option>Business Administration</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>All Locations</option>
                        <option>Bangalore</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Hyderabad</option>
                        <option>Delhi</option>
                    </select>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-2 flex-wrap">
                    {filterOptions.map(option => (
                        <button
                            key={option.value}
                            onClick={() => setActiveFilter(option.value)}
                            className={`px-4 py-2 rounded-full font-medium transition ${
                                activeFilter === option.value
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Connections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {networkingConnections.map(connection => (
                    <div key={connection._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                        {/* Header with color based on expertise */}
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                        {/* Content */}
                        <div className="p-6">
                            {/* Avatar and Name */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {connection.image}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800 text-lg">{connection.name}</h3>
                                    <p className="text-sm text-gray-600">Batch {connection.batch}</p>
                                </div>
                            </div>

                            {/* Current Role */}
                            <p className="text-sm text-gray-700 mb-3 font-semibold">{connection.currentRole}</p>

                            {/* Location */}
                            <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                                </svg>
                                <span>{connection.location}</span>
                            </div>

                            {/* Expertise Tags */}
                            <div className="mb-4">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Expertise</p>
                                <div className="flex gap-2 flex-wrap">
                                    {connection.expertise.map((skill, idx) => (
                                        <span key={idx} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-2">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition">
                                    💬 Connect
                                </button>
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg text-sm font-medium transition">
                                    👁️ View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition">
                    Load More Connections ▼
                </button>
            </div>

            {/* Networking Tips Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                    <div className="text-3xl mb-3">💡</div>
                    <h4 className="font-bold text-gray-800 mb-2">Pro Tips</h4>
                    <p className="text-sm text-gray-700">Complete your profile to increase visibility. Add skills and experiences to help others find you.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                    <div className="text-3xl mb-3">🎯</div>
                    <h4 className="font-bold text-gray-800 mb-2">Mentorship</h4>
                    <p className="text-sm text-gray-700">Connect with experienced mentors who can guide your career journey and share valuable insights.</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                    <div className="text-3xl mb-3">🚀</div>
                    <h4 className="font-bold text-gray-800 mb-2">Collaborate</h4>
                    <p className="text-sm text-gray-700">Find potential collaborators for projects, startups, and professional initiatives.</p>
                </div>
            </div>
        </div>
    );
}

export default NetworkingHub;
