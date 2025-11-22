import { useNavigate, Link, NavLink, useLocation } from 'react-router-dom';
import Events from './Events';
import NetworkingHub from './NetworkingHub';
import JobPortal from './JobPortal';
import Donations from './Donations';
import SuccessStories from './SuccessStories';
import Feedback from './Feedback';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/auth';
import { profileURL } from '../utils/constant';
import UserForm from './common/UserForm';
import departmentsData from '../data/departments.json';

function Profile() {
    const [profile, setProfile] = useState(null);
    const [dummy, setDummy] = useState({
        name: '',
        email: '',
        password: '',
        role: 'student',
        graduationYear: '',
        department: '',
        verified: true,
        isActive: true,
        avatarUrl: '',
        batch: '',
        course: '',
        currentJob: '',
        error: ''
    });
    const [loading, setLoading] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const activeTab = searchParams.get('tab');

    const currentyear = new Date().getFullYear();
    const years = [];
    for (let i = 1990; i <= currentyear; i++) {
        years.push(i);
    }

    const departments = departmentsData.departments;

    async function fetchProfile() {
        setLoading(true);

        try {
            let res = await fetch(profileURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.user ? auth.user.token : ""}`
                }
            });
            const data = await res.json();
            if (!res.ok) {
                return Promise.reject(data.errors || 'Something went wrong');
            }
            if (data && data.user) {
                setProfile(data.user);
                setDummy((prev) => ({
                    ...prev,
                    ...data.user
                }))
            }
        } catch (error) {
            console.error(error);
            setError(error.message || 'Failed to fetch profile');
        }
        finally {
            setLoading(false);  // Done loading
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);


    // resposible for logout
    const handleLogout = () => {
        auth.logout();
        navigate('/');
    };


    // select fileName
    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if (!file) {
            alert('Please select the file!');
            return;
        }

        // makes the form object
        const formData = new FormData();
        // this takes file name and file object
        formData.append('avatar', file);

        const res = await fetch(profileURL + 'avatar', {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${auth.user.token}`,
            }
        });
        const data = await res.json();
        if (!res.ok) {
            console.log(data, 'Error uploading avatar');
            alert(data?.message)
            return;
        }

        // update the setprofile state
        setProfile(prev => ({
            ...prev,
            avatarUrl: data.avatarUrl
        }));
    };


    // handles edit profile
    const handleEditProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const res = await fetch(profileURL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth.user.token}`
                },
                body: JSON.stringify(dummy)
            })

            const data = await res.json();

            if (!res.ok) {
                console.error('Update error:', data);
                setDummy(prev => ({ ...prev, error: data?.message || 'Failed to update profile.' }));
                setLoading(false);
                return;
            }

            // again fetch the updated data from db
            await fetchProfile();
            setShowEdit(false);
        } catch (error) {
            console.error('Update failed:', error);
            setDummy(prev => ({ ...prev, error: 'Update failed. Please try again.' }));
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500 text-lg">Loading profile...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-xl mx-auto mt-10 p-6 bg-red-100 text-red-700 rounded">
                <p>Error loading profile: {error}</p>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <div className="flex">
                    {/* Left sidebar */}
                    <aside className="w-64 bg-orange-500 text-white min-h-screen p-6 hidden md:block">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">A</div>
                            <h3 className="font-semibold">Alumni Portal</h3>
                        </div>
                        <nav className="space-y-3 text-sm">
                            <NavLink
                                to="/profile"
                                end
                                className={({ isActive }) =>
                                    (isActive && !activeTab ? 'flex items-center gap-3 p-3 bg-white/10 rounded shadow-sm' : 'flex items-center gap-3 p-3 rounded hover:bg-white/10')
                                }
                            >
                                🏠 Dashboard
                            </NavLink>

                            <Link to="/profile?tab=networking" className={(
                                activeTab === 'networking' ? 'flex items-center gap-3 p-3 bg-white/10 rounded shadow-sm' : 'flex items-center gap-3 p-3 rounded hover:bg-white/10'
                            )}>
                                🤝 Networking Hub
                            </Link>

                            <Link to="/profile?tab=jobs" className={(
                                activeTab === 'jobs' ? 'flex items-center gap-3 p-3 bg-white/10 rounded shadow-sm' : 'flex items-center gap-3 p-3 rounded hover:bg-white/10'
                            )}>
                                💼 Job Portal
                            </Link>

                            <Link to="/profile?tab=donations" className={(
                                activeTab === 'donations' ? 'flex items-center gap-3 p-3 bg-white/10 rounded shadow-sm' : 'flex items-center gap-3 p-3 rounded hover:bg-white/10'
                            )}>
                                💝 Donations
                            </Link>

                            <Link to="/profile?tab=events" className={
                                (activeTab === 'events' ? 'flex items-center gap-3 p-3 bg-white/10 rounded shadow-sm' : 'flex items-center gap-3 p-3 rounded hover:bg-white/10')
                            }>
                                📅 Events & Reunions
                            </Link>

                            <Link to="/profile?tab=stories" className={(
                                activeTab === 'stories' ? 'flex items-center gap-3 p-3 bg-white/10 rounded shadow-sm' : 'flex items-center gap-3 p-3 rounded hover:bg-white/10'
                            )}>
                                🎆 Success Stories
                            </Link>

                            <Link to="/profile?tab=feedback" className={(
                                activeTab === 'feedback' ? 'flex items-center gap-3 p-3 bg-white/10 rounded shadow-sm' : 'flex items-center gap-3 p-3 rounded hover:bg-white/10'
                            )}>
                                💬 Feedback
                            </Link>
                        </nav>
                    </aside>

                    {/* Main content */}
                    <main className="flex-1 px-6 md:px-12 py-8">
                        {/* Hero */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 shadow-md mb-8">
                            <div className="flex items-center gap-6">
                                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                    {profile?.avatarUrl ? (
                                        <img src={`http://localhost:4000${profile.avatarUrl}`} alt="avatar" className="w-full h-full object-cover" />
                                    ) : (
                                            <img src="/images/dplogo.jpg" alt="default avatar" className="w-full h-full object-cover" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-4xl font-extrabold mb-2">Welcome, <span className="text-yellow-300">{profile?.name}</span>! 🎉</h1>
                                    <div className="flex items-center gap-3 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        <span className="text-white/90">{profile?.email}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {/* <label className="inline-block bg-white/20 text-white px-4 py-2 rounded cursor-pointer text-sm hover:bg-white/30 transition">
                                            🔐 Change Password
                                        </label> */}
                                        <label className="inline-block bg-white/20 text-white px-4 py-2 rounded cursor-pointer text-sm hover:bg-white/30 transition">
                                            📷 Update Image
                                            <input type="file" onChange={handleFileChange} className="hidden" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {activeTab === 'events' ? (
                            <div>
                                <Events />
                            </div>
                        ) : activeTab === 'networking' ? (
                            <div>
                                <NetworkingHub />
                            </div>
                        ) : activeTab === 'jobs' ? (
                            <div>
                                <JobPortal />
                            </div>
                        ) : activeTab === 'donations' ? (
                            <div>
                                <Donations />
                            </div>
                        ) : activeTab === 'stories' ? (
                            <div>
                                <SuccessStories />
                            </div>
                        ) : activeTab === 'feedback' ? (
                            <div>
                                <Feedback />
                            </div>
                        ) : (
                            <>
                                {/* Grid cards */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
                                    <div className="lg:col-span-2 space-y-6">
                                        {/* Registered Events */}
                                        <div className="bg-white rounded-lg shadow p-6">
                                            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">📅 Your Registered Events</h3>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left text-sm">
                                                    <thead className="text-gray-500 text-xs uppercase">
                                                        <tr>
                                                            <th className="py-2">Event</th>
                                                            <th className="py-2">Registered On</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-t">
                                                            <td className="py-3">Annual Alumni Meet</td>
                                                            <td className="py-3">Apr 18, 2025</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Donation history */}
                                        <div className="bg-white rounded-lg shadow p-6">
                                            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">💝 All Donation History</h3>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left text-sm">
                                                    <thead className="text-gray-500 text-xs uppercase">
                                                        <tr>
                                                            <th className="py-2">Cause</th>
                                                            <th className="py-2">Amount</th>
                                                            <th className="py-2">Method</th>
                                                            <th className="py-2">Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-t">
                                                            <td className="py-3">Education Support</td>
                                                            <td className="py-3">$500.00</td>
                                                            <td className="py-3">Credit/Debit Card</td>
                                                            <td className="py-3">Apr 9, 2025</td>
                                                        </tr>
                                                        <tr className="border-t">
                                                            <td className="py-3">Education Support</td>
                                                            <td className="py-3">$500.00</td>
                                                            <td className="py-3">Credit/Debit Card</td>
                                                            <td className="py-3">Apr 18, 2025</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-white rounded-lg shadow p-6">
                                            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">🤝 All Mentorship Requests</h3>
                                            <p className="text-gray-500 text-sm">No mentorship requests found in the system.</p>
                                            <a href="#" className="text-blue-600 text-sm mt-3 inline-block">Find a Mentor</a>
                                        </div>

                                        <div className="bg-white rounded-lg shadow p-6">
                                            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">💼 Your Job Applications</h3>
                                            <p className="text-gray-500 text-sm">You haven't submitted any job applications via the portal. <a href="#" className="text-blue-600">Browse Jobs</a></p>
                                        </div>

                                        <div className="bg-white rounded-lg shadow p-6">
                                            <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
                                            <div className="flex flex-col gap-3">
                                                <button onClick={() => { setDummy(prev => ({ ...prev, ...profile })); setShowEdit(true); }} className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">✏️ Edit Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Portal Quick Links */}
                                <div className="mt-8 w-full">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Portal Quick Links</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                        <Link to="/profile?tab=networking" className="bg-white rounded-lg shadow p-6 flex flex-col items-start hover:shadow-lg transition">
                                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3zM8 13c-2.673 0-8 1.337-8 4v2h16v-2c0-2.663-5.327-4-8-4zM16 13c-.29 0-.577.02-.86.057C16.793 14.017 19 15.37 19 17v2h3v-2c0-2.663-5.327-4-6-4z"/></svg>
                                            </div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Networking Hub</h4>
                                            <p className="text-sm text-gray-500">Connect with peers and mentors.</p>
                                            <span className="mt-4 inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Explore</span>
                                        </Link>

                                        <Link to="/profile?tab=jobs" className="bg-white rounded-lg shadow p-6 flex flex-col items-start hover:shadow-lg transition">
                                            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-3">
                                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM11 14h2v5h-2v-5zM11 7h2v5h-2V7z"/></svg>
                                            </div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Job Portal</h4>
                                            <p className="text-sm text-gray-500">Discover career opportunities.</p>
                                            <span className="mt-4 inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm">Explore</span>
                                        </Link>

                                        <Link to="/profile?tab=donations" className="bg-white rounded-lg shadow p-6 flex flex-col items-start hover:shadow-lg transition">
                                            <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mb-3">
                                                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm1 17h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 12.9 12 13.5 12 15h-2v-.5c0-1 .45-1.99 1.17-2.7l1.24-1.26a2 2 0 10-2.83-2.83l-.09.09L9.5 7.5l.09-.09A4 4 0 1116.07 10.25z"/></svg>
                                            </div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Donations</h4>
                                            <p className="text-sm text-gray-500">Support your alma mater.</p>
                                            <span className="mt-4 inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Explore</span>
                                        </Link>

                                        <Link to="/profile?tab=events" className="bg-white rounded-lg shadow p-6 flex flex-col items-start hover:shadow-lg transition">
                                            <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-3">
                                                <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9h10v2H7V9z"/></svg>
                                            </div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Events & Reunions</h4>
                                            <p className="text-sm text-gray-500">Join upcoming gatherings.</p>
                                            <span className="mt-4 inline-block bg-teal-600 text-white px-3 py-1 rounded-full text-sm">Explore</span>
                                        </Link>

                                        <Link to="/profile?tab=stories" className="bg-white rounded-lg shadow p-6 flex flex-col items-start hover:shadow-lg transition">
                                            <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center mb-3">
                                                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.39 6.95L21 10l-5 3.64L17.39 21 12 17.77 6.61 21 8 13.64 3 10l6.61-1.05L12 2z"/></svg>
                                            </div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Success Stories</h4>
                                            <p className="text-sm text-gray-500">Get inspired by achievements.</p>
                                            <span className="mt-4 inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Explore</span>
                                        </Link>

                                        <Link to="/profile?tab=feedback" className="bg-white rounded-lg shadow p-6 flex flex-col items-start hover:shadow-lg transition">
                                            <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center mb-3">
                                                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 00-9 9c0 3.8 2.2 6.93 5.4 8.36L8 22l1.64-1.64A9 9 0 0012 21a9 9 0 009-9 9 9 0 00-9-9z"/></svg>
                                            </div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Feedback</h4>
                                            <p className="text-sm text-gray-500">Share your valuable thoughts.</p>
                                            <span className="mt-4 inline-block bg-pink-600 text-white px-3 py-1 rounded-full text-sm">Explore</span>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Edit modal */}
                        {showEdit && (
                            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={() => setShowEdit(false)}>
                                <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 hide-scrollbar" onClick={(e) => e.stopPropagation()}>
                                    <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10" onClick={() => setShowEdit(false)}>&times;</button>
                                    <UserForm state={dummy} setState={setDummy} loading={loading} onSubmit={handleEditProfile} years={years} departments={departments} isEdit={true} />
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
}

export default Profile;