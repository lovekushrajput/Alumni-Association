import React, { useState } from 'react';

function Donations() {
    const [donationAmount, setDonationAmount] = useState('');
    const [selectedCause, setSelectedCause] = useState('education');

    const causes = [
        {
            _id: '1',
            name: 'Education Support',
            description: 'Help underprivileged students get quality education',
            target: 100000,
            raised: 75000,
            donors: 245,
            icon: '📚',
            color: 'blue'
        },
        {
            _id: '2',
            name: 'Infrastructure Development',
            description: 'Upgrade campus facilities and learning infrastructure',
            target: 500000,
            raised: 320000,
            donors: 89,
            icon: '🏗️',
            color: 'purple'
        },
        {
            _id: '3',
            name: 'Scholarship Fund',
            description: 'Provide scholarships to meritorious but financially weak students',
            target: 250000,
            raised: 180000,
            donors: 156,
            icon: '🎓',
            color: 'green'
        },
        {
            _id: '4',
            name: 'Healthcare & Wellness',
            description: 'Support student health, counseling, and wellness programs',
            target: 150000,
            raised: 95000,
            donors: 134,
            icon: '⚕️',
            color: 'red'
        }
    ];

    const recentDonations = [
        { donor: 'Rajesh Kumar', amount: 5000, cause: 'Education Support', date: '2 days ago' },
        { donor: 'Priya Singh', amount: 10000, cause: 'Scholarship Fund', date: '1 week ago' },
        { donor: 'Arjun Patel', amount: 3000, cause: 'Infrastructure Development', date: '2 weeks ago' },
        { donor: 'Neha Gupta', amount: 2500, cause: 'Healthcare & Wellness', date: '3 weeks ago' }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: 'bg-blue-100 text-blue-600 border-blue-300',
            purple: 'bg-purple-100 text-purple-600 border-purple-300',
            green: 'bg-green-100 text-green-600 border-green-300',
            red: 'bg-red-100 text-red-600 border-red-300'
        };
        return colors[color] || colors.blue;
    };

    const getProgressColor = (color) => {
        const colors = {
            blue: 'bg-blue-500',
            purple: 'bg-purple-500',
            green: 'bg-green-500',
            red: 'bg-red-500'
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">💝 Donations</h2>
                <p className="text-gray-600">Support your alma mater and give back to the community.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Donation Form */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow p-6 sticky top-8">
                        <h3 className="font-bold text-gray-800 mb-4 text-lg">Make a Donation</h3>
                        
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Cause</label>
                            <select 
                                value={selectedCause}
                                onChange={(e) => setSelectedCause(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                {causes.map(cause => (
                                    <option key={cause._id} value={cause._id}>{cause.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Donation Amount</label>
                            <div className="relative">
                                <span className="absolute left-3 top-2 text-gray-600">₹</span>
                                <input 
                                    type="number" 
                                    value={donationAmount}
                                    onChange={(e) => setDonationAmount(e.target.value)}
                                    placeholder="Enter amount"
                                    className="w-full pl-6 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4">
                            {[500, 1000, 5000].map(amount => (
                                <button
                                    key={amount}
                                    onClick={() => setDonationAmount(amount.toString())}
                                    className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-600 py-2 rounded text-sm font-semibold transition"
                                >
                                    ₹{amount}
                                </button>
                            ))}
                        </div>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold transition mb-3">
                            Donate Now
                        </button>

                        <p className="text-xs text-gray-500 text-center">Secure payment via UPI, Card, or Net Banking</p>
                    </div>
                </div>

                {/* Causes and Impact */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Causes Grid */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4 text-lg">Support These Causes</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {causes.map(cause => {
                                const progress = (cause.raised / cause.target) * 100;
                                return (
                                    <div key={cause._id} className={`${getColorClasses(cause.color)} border-2 rounded-lg p-4`}>
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <p className="text-2xl mb-1">{cause.icon}</p>
                                                <h4 className="font-bold text-gray-800">{cause.name}</h4>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-700 mb-3">{cause.description}</p>
                                        
                                        {/* Progress Bar */}
                                        <div className="mb-3">
                                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div 
                                                    className={`${getProgressColor(cause.color)} h-full transition-all`}
                                                    style={{width: `${progress}%`}}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between text-sm font-semibold text-gray-700">
                                            <span>₹{cause.raised.toLocaleString()} of ₹{cause.target.toLocaleString()}</span>
                                            <span>{cause.donors} donors</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Recent Donations */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="font-bold text-gray-800 mb-4 text-lg">Recent Donations</h3>
                        <div className="space-y-3">
                            {recentDonations.map((donation, idx) => (
                                <div key={idx} className="flex items-center justify-between pb-3 border-b last:border-b-0">
                                    <div>
                                        <p className="font-semibold text-gray-800">{donation.donor}</p>
                                        <p className="text-sm text-gray-600">{donation.cause} • {donation.date}</p>
                                    </div>
                                    <span className="font-bold text-purple-600">₹{donation.amount.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200 text-center">
                            <p className="text-3xl font-bold text-purple-600">₹8.7L</p>
                            <p className="text-sm text-gray-700 font-semibold">Total Raised</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 text-center">
                            <p className="text-3xl font-bold text-blue-600">624</p>
                            <p className="text-sm text-gray-700 font-semibold">Total Donors</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200 text-center">
                            <p className="text-3xl font-bold text-green-600">92%</p>
                            <p className="text-sm text-gray-700 font-semibold">Target Progress</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donations;
