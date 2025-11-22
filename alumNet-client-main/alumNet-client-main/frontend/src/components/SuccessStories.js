import React, { useState } from 'react';

function SuccessStories() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const stories = [
        {
            _id: '1',
            name: 'Rajesh Jain',
            batch: '2015',
            image: 'RJ',
            title: 'Founder & CEO at TechStart',
            category: 'entrepreneurship',
            story: 'Started with a small idea and turned it into a ₹50 crore company. AlumNet helped me connect with mentors who guided me through the journey.',
            achievement: '50+ Team • ₹5M Funding',
            quote: 'The support from the alumni network was crucial in our success.',
            tags: ['Startup', 'Tech', 'Mentorship']
        },
        {
            _id: '2',
            name: 'Priya Kumari',
            batch: '2018',
            image: 'PK',
            title: 'Senior Manager at Google',
            category: 'corporate',
            story: 'Built a successful career at one of the world\'s leading tech companies. Started as an intern and grew to lead product teams.',
            achievement: 'Leading 15+ Engineers • APAC Region',
            quote: 'Career growth comes from continuous learning and networking.',
            tags: ['Corporate', 'Leadership', 'Growth']
        },
        {
            _id: '3',
            name: 'Arjun Kumar',
            batch: '2016',
            image: 'AK',
            title: 'Angel Investor & Mentor',
            category: 'investing',
            story: 'Transitioned from software engineer to investor. Now mentoring 20+ startups and helping the next generation of entrepreneurs.',
            achievement: '15 Investments • 3 Exits',
            quote: 'Giving back to the community has been the most fulfilling journey.',
            tags: ['Investing', 'Mentoring', 'Impact']
        },
        {
            _id: '4',
            name: 'Neha Gupta',
            batch: '2019',
            image: 'NG',
            title: 'Data Science Lead at AnalyticsInc',
            category: 'research',
            story: 'Pioneering work in ML and data analytics. Published 5 research papers and speaking at international conferences.',
            achievement: '5 Papers Published • 100K+ Followers',
            quote: 'Innovation happens when you continuously challenge yourself.',
            tags: ['Research', 'AI/ML', 'Innovation']
        },
        {
            _id: '5',
            name: 'Vikram Sharma',
            batch: '2014',
            image: 'VS',
            title: 'CEO at ConsultancyGlobal',
            category: 'corporate',
            story: 'Built a global consulting firm from scratch. Now serving 500+ clients across 20 countries with 200+ consultants.',
            achievement: '200 Employees • 20 Countries',
            quote: 'Dream big and execute with persistence.',
            tags: ['Entrepreneurship', 'Consulting', 'Global']
        },
        {
            _id: '6',
            name: 'Anjali Verma',
            batch: '2017',
            image: 'AV',
            title: 'Social Impact Founder',
            category: 'social',
            story: 'Left corporate to start an NGO focused on education for underprivileged children. Impacting 10,000+ lives annually.',
            achievement: '10K+ Lives Impacted • 50 Schools',
            quote: 'Success is measured by the impact you create.',
            tags: ['Social Impact', 'Education', 'NGO']
        }
    ];

    const categories = [
        { value: 'all', label: 'All Stories' },
        { value: 'entrepreneurship', label: '🚀 Entrepreneurship' },
        { value: 'corporate', label: '💼 Corporate' },
        { value: 'investing', label: '💰 Investing' },
        { value: 'research', label: '🔬 Research' },
        { value: 'social', label: '❤️ Social Impact' }
    ];

    const filteredStories = selectedCategory === 'all' 
        ? stories 
        : stories.filter(story => story.category === selectedCategory);

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">🏆 Success Stories</h2>
                <p className="text-gray-600">Inspiring journeys of alumni who made an impact in their respective fields.</p>
            </div>

            {/* Category Filter */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
                <div className="flex gap-2 flex-wrap">
                    {categories.map(category => (
                        <button
                            key={category.value}
                            onClick={() => setSelectedCategory(category.value)}
                            className={`px-4 py-2 rounded-full font-medium transition ${
                                selectedCategory === category.value
                                    ? 'bg-yellow-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {filteredStories.map(story => (
                    <div key={story._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border-t-4 border-yellow-400">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {story.image}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800 text-lg">{story.name}</h3>
                                    <p className="text-sm text-gray-600">Batch {story.batch}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 font-semibold">{story.title}</p>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {/* Quote */}
                            <blockquote className="bg-gray-50 border-l-4 border-yellow-400 p-3 mb-4 rounded">
                                <p className="text-gray-700 italic text-sm">"{story.quote}"</p>
                            </blockquote>

                            {/* Story */}
                            <p className="text-gray-700 mb-4">{story.story}</p>

                            {/* Achievement */}
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                                <p className="text-sm text-gray-600 font-semibold">
                                    <span className="text-yellow-600">⭐ Achievement:</span> {story.achievement}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2 flex-wrap">
                                {story.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action */}
                            <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition">
                                Share & Inspire
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg shadow p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Alumni Impact by Numbers</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <p className="text-4xl font-bold text-yellow-600 mb-2">500+</p>
                        <p className="text-gray-700 font-semibold">Startups Founded</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-yellow-600 mb-2">15K+</p>
                        <p className="text-gray-700 font-semibold">Jobs Created</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-yellow-600 mb-2">₹5000Cr</p>
                        <p className="text-gray-700 font-semibold">Value Created</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-yellow-600 mb-2">100+</p>
                        <p className="text-gray-700 font-semibold">Global Recognitions</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white rounded-lg shadow p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Share Your Success Story</h3>
                <p className="text-gray-600 mb-6">Inspire fellow alumni by sharing your journey and achievements.</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold transition">
                    Submit Your Story
                </button>
            </div>
        </div>
    );
}

export default SuccessStories;
