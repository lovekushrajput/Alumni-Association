import { NavLink, Link } from 'react-router-dom'

function Home() {
    return (
        <>
            {/* <div
                className="relative w-full min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/OurLegacy.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/70 to-pink-50/70"></div>
                <p className="relative z-10 bg-white/80 text-blue-700 p-8 rounded-xl text-center text-2xl shadow-lg font-semibold backdrop-blur-md">
                    🎓 Welcome to Alumni Connect <br />
                    Stay connected with your college community. <br />
                    Find old classmates, share your journey, and explore opportunities.
                </p>
            </div> */}

            <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

    {/* Background Video */}
    <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
    >
        <source src="/video/campus.mp4" type="video/mp4" />
    </video>

    {/* Light Gradient Over Video */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/70 to-pink-50/70"></div>

    {/* Content */}
    <p className="relative z-10 bg-white/80 text-blue-700 p-8 rounded-xl text-center text-2xl shadow-lg font-semibold backdrop-blur-md">
        🎓 Welcome to Alumni Connect <br />
        Stay connected with your college community. <br />
        Find old classmates, share your journey, and explore opportunities.
    </p>
</div>


            {/* Alumni Management Content */}
            <section className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-xl shadow-md border border-blue-100">
                <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">Alumni Management Features</h2>
                <ul className="list-disc pl-6 text-lg text-gray-600 mb-6">
                    <li>🔍 Search and connect with alumni from various departments and graduation years.</li>
                    <li>📢 Post updates, achievements, and career milestones to inspire others.</li>
                    <li>💼 Explore job opportunities and mentorship programs offered by alumni.</li>
                    <li>🗓️ Stay informed about upcoming alumni events, reunions, and webinars.</li>
                    <li>🤝 Build professional networks and collaborate on projects with fellow alumni.</li>
                    <li>📝 Update your profile to showcase your journey and expertise.</li>
                </ul>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <div className="bg-blue-50 p-4 rounded-xl shadow text-center flex-1 border border-blue-100">
                        <h3 className="font-semibold text-blue-600 mb-2">Alumni Directory</h3>
                        <p>Find and connect with alumni from your batch, department, or profession.</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl shadow text-center flex-1 border border-yellow-100">
                        <h3 className="font-semibold text-yellow-600 mb-2">Events & Reunions</h3>
                        <p>Stay updated on upcoming alumni events and reunions to relive memories.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl shadow text-center flex-1 border border-green-100">
                        <h3 className="font-semibold text-green-600 mb-2">Mentorship</h3>
                        <p>Connect with mentors or become one to guide current students and alumni.</p>
                    </div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="max-w-4xl mx-auto my-12 p-8 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-xl shadow-md border border-purple-100">
                <h2 className="text-xl font-bold mb-4 text-blue-700 text-center">Why Join Alumnet?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl shadow border border-pink-100">
                        <h3 className="font-semibold text-pink-600 mb-2">Career Growth</h3>
                        <p>Get career guidance, referrals, and access to exclusive job postings from alumni.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow border border-blue-100">
                        <h3 className="font-semibold text-blue-600 mb-2">Community Support</h3>
                        <p>Share your experiences, ask questions, and get support from a vibrant alumni community.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow border border-purple-100">
                        <h3 className="font-semibold text-purple-600 mb-2">Learning Resources</h3>
                        <p>Access webinars, workshops, and resources shared by alumni and faculty.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow border border-green-100">
                        <h3 className="font-semibold text-green-600 mb-2">Give Back</h3>
                        <p>Become a mentor, volunteer, or contribute to college initiatives and scholarships.</p>
                    </div>
                </div>
            </section>

            {/* Upcoming Events & Webinars Section */}
            <section className="max-w-4xl mx-auto my-12 p-8 bg-blue-50 rounded-xl shadow-md border border-blue-100">
                <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">Upcoming Events & Webinars</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow border border-purple-100 flex flex-col justify-between">
                        <h4 className="font-semibold text-purple-600 mb-2">Annual Alumni Meet 2025</h4>
                        <p className="text-gray-700 mb-2">Date: 20th September 2025</p>
                        <p className="text-gray-700 mb-2">Location: College Auditorium & Online</p>
                        <p className="text-gray-600 mb-4">Reconnect with classmates, network with professionals, and celebrate alumni achievements.</p>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                            Register Now
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow border border-blue-100 flex flex-col justify-between">
                        <h4 className="font-semibold text-blue-600 mb-2">Webinar: Career Transitions in Tech</h4>
                        <p className="text-gray-700 mb-2">Date: 5th October 2025</p>
                        <p className="text-gray-700 mb-2">Time: 6:00 PM IST</p>
                        <p className="text-gray-600 mb-4">Join industry experts and alumni for insights on switching roles and growing your tech career.</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Join Webinar
                        </button>
                    </div>
                </div>
                <p className="text-center text-gray-600 mt-6">
                    Stay tuned for more events and learning opportunities. Don’t miss out!
                </p>
            </section>

            {/* Footer with light colors */}
            <footer>
                <h1 className='text-center p-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-blue-700 font-semibold border-t border-blue-200'>
                    All rights reserved &copy; Alumnet
                </h1>
            </footer>
        </>
    )
}


export default Home;