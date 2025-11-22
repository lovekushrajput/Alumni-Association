import { useAuth } from '../utils/auth';
import { Link } from 'react-router-dom';

function Header() {
    const auth = useAuth();

    return (
        <header className="w-full">
            {/* Top bar with logo and contact */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        {/* <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center"> */}
                            {/* <span className="text-white font-bold text-lg">LPU</span> */}
                        {/* </div> */}
                        <div className="flex flex-col leading-tight">
                            <Link to="/" className="text-orange-600 font-bold text-xs leading-none hover:opacity-90">
                                <span className="block">ALUMNET</span>
                                <span className="block">ASSOCIATION</span>
                            </Link>
                        </div>
                        {/* <span className="text-2xl text-gray-400 mx-2">=</span> */}
                        {/* <span className="text-gray-700 font-semibold">N</span> */}
                    </div>

                    {/* Contact and Social Icons */}
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600 text-sm">Contact us on</span>
                        <div className="flex items-center gap-2">
                            <a href="https://www.facebook.com/glbitm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://x.com/glbajaj" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/school/g-l-bajaj-institute-of-technology-and-management/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/user/glbitm07" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                            <a href="mailto:contact@alumni.edu" className="text-gray-600 hover:text-gray-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </a>
                            <a href="tel:+911234567890" className="text-gray-600 hover:text-gray-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation bar */}
            <div className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <nav className="flex items-center gap-8 flex-1">
                        <Link to="/about" className="text-white hover:text-gray-300 transition">About Us</Link>
                        <Link to={auth.user ? "/profile?tab=events" : "/events"} className="text-white hover:text-gray-300 transition">Events</Link>
                        <Link to="/contribute" className="text-white hover:text-gray-300 transition">Contribute</Link>
                        <Link to="/benefits" className="text-white hover:text-gray-300 transition">Benefits</Link>
                        <Link to="/more" className="text-white hover:text-gray-300 transition">More</Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link to="/profile" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded font-medium transition">
                            <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm text-white">
                                {auth.user?.name ? auth.user.name.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <span className="hidden sm:inline">Profile</span>
                        </Link>
                        <button
                            onClick={() => {
                                auth.logout();
                                window.location.href = '/login';
                            }}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
