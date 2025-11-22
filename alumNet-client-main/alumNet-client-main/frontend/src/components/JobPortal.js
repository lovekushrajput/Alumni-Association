import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function JobPortal() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const jobListings = [
        {
            _id: '1',
            title: 'Senior Software Engineer',
            company: 'TechCorp India',
            location: 'Bangalore',
            type: 'Full-time',
            salary: '₹25-35 LPA',
            experience: '5-8 years',
            skills: ['React', 'Node.js', 'AWS'],
            postedBy: 'Rajesh Kumar',
            posted: '2 days ago',
            description: 'Looking for experienced software engineers to lead our product development.'
        },
        {
            _id: '2',
            title: 'Product Manager',
            company: 'StartupXYZ',
            location: 'Mumbai',
            type: 'Full-time',
            salary: '₹20-28 LPA',
            experience: '3-5 years',
            skills: ['Product Strategy', 'Analytics', 'Leadership'],
            postedBy: 'Priya Singh',
            posted: '5 days ago',
            description: 'Join our growing startup as a Product Manager to drive product vision.'
        },
        {
            _id: '3',
            title: 'Data Scientist',
            company: 'AnalyticsInc',
            location: 'Hyderabad',
            type: 'Full-time',
            salary: '₹18-26 LPA',
            experience: '2-4 years',
            skills: ['Python', 'Machine Learning', 'SQL'],
            postedBy: 'Neha Gupta',
            posted: '1 week ago',
            description: 'We are seeking Data Scientists to build ML models and drive insights.'
        },
        {
            _id: '4',
            title: 'DevOps Engineer',
            company: 'CloudSystems',
            location: 'Bangalore',
            type: 'Full-time',
            salary: '₹22-30 LPA',
            experience: '4-6 years',
            skills: ['Docker', 'Kubernetes', 'CI/CD'],
            postedBy: 'Anjali Verma',
            posted: '3 days ago',
            description: 'Build and maintain cloud infrastructure for our global platform.'
        },
        {
            _id: '5',
            title: 'Business Development Executive',
            company: 'ConsultancyGlobal',
            location: 'Delhi',
            type: 'Full-time',
            salary: '₹15-22 LPA',
            experience: '2-4 years',
            skills: ['Sales', 'Client Management', 'Strategy'],
            postedBy: 'Vikram Sharma',
            posted: '4 days ago',
            description: 'Drive business growth through strategic partnerships and client acquisition.'
        },
        {
            _id: '6',
            title: 'UI/UX Designer',
            company: 'DesignStudio',
            location: 'Pune',
            type: 'Full-time',
            salary: '₹12-18 LPA',
            experience: '2-3 years',
            skills: ['Figma', 'UI Design', 'Prototyping'],
            postedBy: 'Arjun Patel',
            posted: '6 days ago',
            description: 'Create stunning user experiences for web and mobile applications.'
        }
    ];

    const filterOptions = [
        { value: 'all', label: 'All Jobs' },
        { value: 'fulltime', label: 'Full-time' },
        { value: 'internship', label: 'Internship' },
        { value: 'contract', label: 'Contract' }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">💼 Job Portal</h2>
                <p className="text-gray-600">Discover career opportunities posted by alumni and companies.</p>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input 
                        type="text" 
                        placeholder="Search by job title or company..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>All Locations</option>
                        <option>Bangalore</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Hyderabad</option>
                        <option>Delhi</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>All Experience Levels</option>
                        <option>Entry Level</option>
                        <option>Mid Level</option>
                        <option>Senior</option>
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
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
                {jobListings.map(job => (
                    <div key={job._id} className="bg-white rounded-lg shadow hover:shadow-lg transition border-l-4 border-green-500 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg mb-1">{job.title}</h3>
                                <p className="text-gray-600 font-semibold">{job.company}</p>
                                <p className="text-xs text-gray-500 mt-1">Posted by {job.postedBy} • {job.posted}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"/>
                                    </svg>
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">{job.type}</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm"><span className="text-gray-500">Salary:</span> <span className="font-bold text-gray-800">{job.salary}</span></p>
                                <p className="text-sm"><span className="text-gray-500">Experience:</span> <span className="font-semibold text-gray-700">{job.experience}</span></p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
                                    Apply Now
                                </button>
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold transition">
                                    Save Job
                                </button>
                            </div>
                        </div>

                        {/* Description and Skills */}
                        <p className="text-gray-700 mb-3">{job.description}</p>
                        <div className="flex gap-2 flex-wrap">
                            {job.skills.map((skill, idx) => (
                                <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-8">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition">
                    Load More Jobs ▼
                </button>
            </div>
        </div>
    );
}

export default JobPortal;
