import { NavLink, Link } from 'react-router-dom'

function Home() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-fixed overflow-hidden"
                style={{
                    backgroundImage: "url('/images/hero.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-purple-900/40"></div>
                <div className="relative z-10 text-center">
                    <h1 className="bg-white/90 text-blue-700 p-8 rounded-2xl text-center text-3xl shadow-2xl font-bold backdrop-blur-sm max-w-2xl mx-auto mb-6">
                        🎓 Welcome to AlumNet <br />
                        <span className="text-lg mt-3 block text-gray-700">Stay connected with your college community. <br />
                        Find old classmates, share your journey, and explore opportunities.</span>
                    </h1>
                    <Link to="/register" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition shadow-lg">
                        Join AlumNet Today
                    </Link>
                </div>
            </div>

            {/* Statistics Section */}
            <section className="max-w-6xl mx-auto my-12 p-8">
                <h2 className="text-2xl font-bold mb-8 text-purple-700 text-center">📊 Growing Alumni Network</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                        <h3 className="text-4xl font-bold mb-2">15,000+</h3>
                        <p className="text-lg">Active Alumni</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                        <h3 className="text-4xl font-bold mb-2">45+</h3>
                        <p className="text-lg">Countries Worldwide</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                        <h3 className="text-4xl font-bold mb-2">500+</h3>
                        <p className="text-lg">Job Opportunities</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                        <h3 className="text-4xl font-bold mb-2">120+</h3>
                        <p className="text-lg">Annual Events</p>
                    </div>
                </div>
            </section>

            {/* What You Can Do Section */}
            <section className="max-w-6xl mx-auto my-12 p-8 bg-white rounded-xl shadow-md border border-blue-100">
                <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">🚀 What You Can Do on AlumNet</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center hover:shadow-lg p-6 rounded-xl transition">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                            <span className="text-3xl">🔍</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-blue-600">Find Connections</h3>
                        <p className="text-gray-600">Search and connect with alumni from any year, department, or profession across the globe.</p>
                    </div>
                    <div className="flex flex-col items-center text-center hover:shadow-lg p-6 rounded-xl transition">
                        <div className="bg-green-100 p-4 rounded-full mb-4">
                            <span className="text-3xl">📢</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-green-600">Share Your Story</h3>
                        <p className="text-gray-600">Post about your achievements, career milestones, and inspire the community with your journey.</p>
                    </div>
                    <div className="flex flex-col items-center text-center hover:shadow-lg p-6 rounded-xl transition">
                        <div className="bg-purple-100 p-4 rounded-full mb-4">
                            <span className="text-3xl">💼</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-purple-600">Explore Opportunities</h3>
                        <p className="text-gray-600">Access exclusive job postings, internships, and mentorship programs from successful alumni.</p>
                    </div>
                    <div className="flex flex-col items-center text-center hover:shadow-lg p-6 rounded-xl transition">
                        <div className="bg-yellow-100 p-4 rounded-full mb-4">
                            <span className="text-3xl">🗓️</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-yellow-600">Attend Events</h3>
                        <p className="text-gray-600">Participate in alumni reunions, webinars, networking events, and professional development workshops.</p>
                    </div>
                    <div className="flex flex-col items-center text-center hover:shadow-lg p-6 rounded-xl transition">
                        <div className="bg-pink-100 p-4 rounded-full mb-4">
                            <span className="text-3xl">🤝</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-pink-600">Build Networks</h3>
                        <p className="text-gray-600">Collaborate with peers on projects, startups, and professional initiatives.</p>
                    </div>
                    <div className="flex flex-col items-center text-center hover:shadow-lg p-6 rounded-xl transition">
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <span className="text-3xl">❤️</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-red-600">Give Back</h3>
                        <p className="text-gray-600">Mentor students, contribute to scholarships, and support college initiatives and causes.</p>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="max-w-6xl mx-auto my-12 p-8">
                <h2 className="text-2xl font-bold mb-8 text-purple-700 text-center">🌟 Alumni Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">RJ</div>
                            <div>
                                <h4 className="font-bold text-gray-800">Rajesh Jain</h4>
                                <p className="text-sm text-gray-500">Batch 2015 • Founder at TechStart</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">"AlumNet connected me with mentors who guided me through my startup journey. Today we have a team of 50+ and secured $5M in funding!"</p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Entrepreneurship</span>
                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">Tech</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">PK</div>
                            <div>
                                <h4 className="font-bold text-gray-800">Priya Kumari</h4>
                                <p className="text-sm text-gray-500">Batch 2018 • Senior Manager at Google</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">"Through AlumNet's job portal, I found the perfect opportunity that helped me land my dream role at Google. The community is incredibly supportive!"</p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">Career Growth</span>
                            <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-semibold">Tech</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">AK</div>
                            <div>
                                <h4 className="font-bold text-gray-800">Arjun Kumar</h4>
                                <p className="text-sm text-gray-500">Batch 2016 • Mentor & Angel Investor</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">"I've mentored 20+ alumni through AlumNet, and it's been incredibly rewarding. Giving back to the community is one of the best decisions I made!"</p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">Mentorship</span>
                            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">Investment</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="max-w-6xl mx-auto my-12 p-8 bg-blue-50 rounded-xl shadow-md border border-blue-100">
                <h2 className="text-2xl font-bold mb-8 text-purple-700 text-center">📅 Upcoming Events & Webinars</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow border border-purple-100 flex flex-col justify-between hover:shadow-lg transition">
                        <div>
                            <h4 className="font-semibold text-purple-600 mb-2 text-lg">Annual Alumni Meet 2025</h4>
                            <p className="text-gray-700 mb-1">📍 College Auditorium & Online</p>
                            <p className="text-gray-700 mb-4">📅 20th September 2025</p>
                            <p className="text-gray-600 mb-4">Reconnect with classmates, network with professionals, and celebrate alumni achievements.</p>
                        </div>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition w-full font-semibold">
                            Register Now
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow border border-blue-100 flex flex-col justify-between hover:shadow-lg transition">
                        <div>
                            <h4 className="font-semibold text-blue-600 mb-2 text-lg">Career Transitions in Tech</h4>
                            <p className="text-gray-700 mb-1">💻 Webinar</p>
                            <p className="text-gray-700 mb-4">📅 5th October 2025 • 6:00 PM IST</p>
                            <p className="text-gray-600 mb-4">Join industry experts and alumni for insights on switching roles and growing in tech.</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full font-semibold">
                            Register Now
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow border border-green-100 flex flex-col justify-between hover:shadow-lg transition">
                        <div>
                            <h4 className="font-semibold text-green-600 mb-2 text-lg">Entrepreneurship Workshop</h4>
                            <p className="text-gray-700 mb-1">🚀 Interactive Session</p>
                            <p className="text-gray-700 mb-4">📅 15th October 2025 • 7:00 PM IST</p>
                            <p className="text-gray-600 mb-4">Learn from successful entrepreneurs about building startups and scaling businesses.</p>
                        </div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full font-semibold">
                            Register Now
                        </button>
                    </div>
                </div>
                <p className="text-center text-gray-600 mt-8 text-lg font-semibold">
                    📌 Stay tuned for more events and learning opportunities. Don't miss out!
                </p>
            </section>

            {/* Why Join Benefits Section */}
            <section className="max-w-6xl mx-auto my-12 p-8 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-xl shadow-md border border-purple-100">
                <h2 className="text-2xl font-bold mb-8 text-blue-700 text-center">💡 Why Join AlumNet?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow border border-pink-100 hover:shadow-lg transition">
                        <h3 className="font-bold text-pink-600 mb-3 text-lg">🚀 Career Growth</h3>
                        <ul className="text-gray-600 space-y-2 text-sm">
                            <li>✓ Exclusive job postings from leading companies</li>
                            <li>✓ Career guidance and mentorship</li>
                            <li>✓ Professional referrals and networking</li>
                            <li>✓ Skill-building workshops and webinars</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow border border-blue-100 hover:shadow-lg transition">
                        <h3 className="font-bold text-blue-600 mb-3 text-lg">🤝 Community Support</h3>
                        <ul className="text-gray-600 space-y-2 text-sm">
                            <li>✓ Connect with 15,000+ active alumni</li>
                            <li>✓ Share experiences and ask for advice</li>
                            <li>✓ Collaborate on projects and initiatives</li>
                            <li>✓ Build lifelong professional relationships</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow border border-purple-100 hover:shadow-lg transition">
                        <h3 className="font-bold text-purple-600 mb-3 text-lg">📚 Learning Resources</h3>
                        <ul className="text-gray-600 space-y-2 text-sm">
                            <li>✓ Access to alumni webinars and courses</li>
                            <li>✓ Industry insights and best practices</li>
                            <li>✓ Recorded sessions and learning materials</li>
                            <li>✓ Expert knowledge from successful alumni</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow border border-green-100 hover:shadow-lg transition">
                        <h3 className="font-bold text-green-600 mb-3 text-lg">❤️ Give Back</h3>
                        <ul className="text-gray-600 space-y-2 text-sm">
                            <li>✓ Mentor future students and alumni</li>
                            <li>✓ Support college initiatives</li>
                            <li>✓ Contribute to scholarships</li>
                            <li>✓ Be part of alumni volunteer programs</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="max-w-4xl mx-auto my-12 p-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl shadow-lg text-white text-center">
                <h2 className="text-3xl font-bold mb-4">🎯 Ready to Connect with Your Alumni Community?</h2>
                <p className="text-lg mb-8">Join AlumNet today and become part of a growing network of successful professionals from around the world!</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link to="/register" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition shadow-lg">
                        Create Your Account
                    </Link>
                    <Link to="/login" className="bg-white/20 hover:bg-white/30 border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg transition">
                        Already a Member? Login
                    </Link>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="max-w-6xl mx-auto my-12 p-8">
                <h2 className="text-2xl font-bold mb-8 text-purple-700 text-center">💬 What Alumni Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-400 text-lg">★★★★★</span>
                        </div>
                        <p className="text-gray-700 mb-4 italic">"AlumNet is an amazing platform! I connected with my batch mates after 10 years and it felt like we never left!"</p>
                        <h4 className="font-bold text-gray-800">Sarah Williams</h4>
                        <p className="text-sm text-gray-500">Batch 2014 • Marketing Director</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-400 text-lg">★★★★★</span>
                        </div>
                        <p className="text-gray-700 mb-4 italic">"The job portal helped me find my current position. The community is supportive and genuinely interested in each other's success."</p>
                        <h4 className="font-bold text-gray-800">Vikram Singh</h4>
                        <p className="text-sm text-gray-500">Batch 2016 • Software Engineer</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-400 text-lg">★★★★★</span>
                        </div>
                        <p className="text-gray-700 mb-4 italic">"Being a mentor on AlumNet has been one of the most fulfilling experiences. Helping juniors succeed brings joy!"</p>
                        <h4 className="font-bold text-gray-800">Anjali Desai</h4>
                        <p className="text-sm text-gray-500">Batch 2012 • Startup Founder</p>
                    </div>
                </div>
            </section>

            {/* Footer with light colors */}
            <footer>
                <h1 className='text-center p-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-blue-700 font-semibold border-t border-blue-200'>
                    All rights reserved &copy; AlumNet • Connecting Alumni Worldwide 🌍
                </h1>
            </footer>
        </>
    )
}


export default Home;