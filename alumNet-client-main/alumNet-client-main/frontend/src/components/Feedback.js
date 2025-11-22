import React, { useState } from 'react';

function Feedback() {
    const [feedbackType, setFeedbackType] = useState('general');
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const feedbackTypes = [
        { value: 'general', label: '💭 General Feedback' },
        { value: 'bug', label: '🐛 Report a Bug' },
        { value: 'feature', label: '💡 Feature Request' },
        { value: 'improvement', label: '📈 Improvement' },
        { value: 'other', label: '📌 Other' }
    ];

    const recentFeedback = [
        {
            _id: '1',
            author: 'Rajesh Kumar',
            type: 'feature',
            rating: 5,
            message: 'The networking hub is fantastic! Would love to see a mentorship matching algorithm.',
            date: '2 days ago',
            avatar: 'RK'
        },
        {
            _id: '2',
            author: 'Priya Singh',
            type: 'improvement',
            rating: 4,
            message: 'Great platform overall. Mobile app would be really useful for on-the-go access.',
            date: '1 week ago',
            avatar: 'PS'
        },
        {
            _id: '3',
            author: 'Arjun Patel',
            type: 'general',
            rating: 5,
            message: 'Reconnected with college friends after 10 years. Love the events feature!',
            date: '2 weeks ago',
            avatar: 'AP'
        },
        {
            _id: '4',
            author: 'Neha Gupta',
            type: 'feature',
            rating: 4,
            message: 'Would be great to have discussion forums or community channels for alumni in the same field.',
            date: '3 weeks ago',
            avatar: 'NG'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setMessage('');
                setRating(0);
                setFeedbackType('general');
            }, 3000);
        }
    };

    const getTypeColor = (type) => {
        const colors = {
            general: 'bg-blue-100 text-blue-700',
            bug: 'bg-red-100 text-red-700',
            feature: 'bg-green-100 text-green-700',
            improvement: 'bg-purple-100 text-purple-700',
            other: 'bg-gray-100 text-gray-700'
        };
        return colors[type] || colors.general;
    };

    const getTypeLabel = (type) => {
        const item = feedbackTypes.find(t => t.value === type);
        return item ? item.label.split(' ').pop() : 'General';
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">💬 Feedback & Suggestions</h2>
                <p className="text-gray-600">Help us improve AlumNet. Your feedback is valuable and will be reviewed by our team.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Feedback Form */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow p-6 sticky top-8">
                        <h3 className="font-bold text-gray-800 mb-4 text-lg">Send Feedback</h3>

                        {submitted ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                                <p className="text-green-700 font-semibold">✅ Thank you!</p>
                                <p className="text-sm text-green-600 mt-2">Your feedback has been received.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Feedback Type</label>
                                    <select 
                                        value={feedbackType}
                                        onChange={(e) => setFeedbackType(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {feedbackTypes.map(type => (
                                            <option key={type.value} value={type.value}>{type.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setRating(star)}
                                                className={`text-2xl transition ${
                                                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Feedback</label>
                                    <textarea 
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Share your thoughts, suggestions, or report issues..."
                                        rows="5"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold transition"
                                >
                                    Submit Feedback
                                </button>
                            </form>
                        )}

                        {/* Quick Tips */}
                        <div className="mt-6 pt-6 border-t">
                            <p className="text-xs font-semibold text-gray-600 uppercase mb-2">📝 Tips</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                                <li>• Be specific and descriptive</li>
                                <li>• Include steps to reproduce bugs</li>
                                <li>• Check if similar feedback exists</li>
                                <li>• Share your use case for features</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Feedback Display */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 text-center">
                            <p className="text-3xl font-bold text-blue-600">847</p>
                            <p className="text-sm text-gray-700 font-semibold">Total Feedback</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200 text-center">
                            <p className="text-3xl font-bold text-green-600">42</p>
                            <p className="text-sm text-gray-700 font-semibold">Implemented</p>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 border border-yellow-200 text-center">
                            <p className="text-3xl font-bold text-yellow-600">4.7/5</p>
                            <p className="text-sm text-gray-700 font-semibold">Avg Rating</p>
                        </div>
                    </div>

                    {/* Recent Feedback */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="font-bold text-gray-800 mb-4 text-lg">Recent Feedback</h3>
                        <div className="space-y-4">
                            {recentFeedback.map(feedback => (
                                <div key={feedback._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                {feedback.avatar}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800">{feedback.author}</p>
                                                <p className="text-xs text-gray-500">{feedback.date}</p>
                                            </div>
                                        </div>
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getTypeColor(feedback.type)}`}>
                                            {getTypeLabel(feedback.type)}
                                        </span>
                                    </div>

                                    {/* Rating */}
                                    <div className="mb-2">
                                        <span className="text-yellow-400">
                                            {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                                        </span>
                                    </div>

                                    {/* Message */}
                                    <p className="text-gray-700 text-sm">{feedback.message}</p>

                                    {/* Reactions */}
                                    <div className="mt-3 flex gap-4">
                                        <button className="text-sm text-gray-600 hover:text-blue-600 transition">👍 Helpful</button>
                                        <button className="text-sm text-gray-600 hover:text-blue-600 transition">💬 Reply</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="font-bold text-gray-800 mb-4 text-lg">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <details className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                                <summary className="font-semibold text-gray-800">How is my feedback used?</summary>
                                <p className="text-gray-600 text-sm mt-2">Your feedback helps us prioritize features and improvements. We review all submissions and implement the most impactful suggestions.</p>
                            </details>
                            <details className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                                <summary className="font-semibold text-gray-800">Will I get notified when my suggestion is implemented?</summary>
                                <p className="text-gray-600 text-sm mt-2">Yes! We send notifications to users whose suggestions have been implemented. Check your email preferences for notification settings.</p>
                            </details>
                            <details className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                                <summary className="font-semibold text-gray-800">Can I track the status of my feedback?</summary>
                                <p className="text-gray-600 text-sm mt-2">Absolutely! You can view all your submitted feedback and their status from your profile dashboard.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
