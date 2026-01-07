import React, { useState, useRef, useEffect } from 'react';

function UserForm({ state, setState, loading, onSubmit, years, departments, isEdit = false }) {
    const [step, setStep] = useState(0); // 0: first page, 1: remaining fields
    const [errors, setErrors] = useState({});

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState((prevState) => ({ ...prevState, [name]: value }));
        // clear field-specific error on change
        setErrors(prev => ({ ...prev, [name]: '' }));
        setState(prev => ({ ...prev, error: '' }));
    };

    const validateStep = () => {
        const newErrors = {};
        if (step === 0) {
            if (!state.name?.trim()) newErrors.name = 'Name is required.';
            if (!state.email?.trim()) newErrors.email = 'Email is required.';
            else {
                const emailRegex = /\S+@\S+\.\S+/;
                if (!emailRegex.test(state.email)) newErrors.email = 'Enter a valid email.';
            }
            if (!state.password) newErrors.password = 'Password is required.';
            else if (state.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
            if (!state.role) newErrors.role = 'Role is required.';
        }

        setErrors(prev => ({ ...prev, ...newErrors }));
        if (Object.keys(newErrors).length > 0) return false;
        return true;
    };

    const validateAll = () => {
        // Validate all fields before final submit
        const newErrors = {};
        if (!state.name?.trim()) newErrors.name = 'Name is required.';
        if (!state.email?.trim()) newErrors.email = 'Email is required.';
        else {
            const emailRegex = /\S+@\S+\.\S+/;
            if (!emailRegex.test(state.email)) newErrors.email = 'Enter a valid email.';
        }
        if (!state.password) newErrors.password = 'Password is required.';
        else if (state.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
        if (!state.role) newErrors.role = 'Role is required.';

        // Graduation year and department are required on final submit
        if (!state.graduationYear) newErrors.graduationYear = 'Graduation year is required.';
        if (!state.department) newErrors.department = 'Department is required.';

        // If alumni fields visible validate them as well
        if (state.role === 'alumni') {
            if (!state.batch) newErrors.batch = 'Batch is required for alumni.';
            if (!state.course?.trim()) newErrors.course = 'Course is required for alumni.';
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return false;
        return true;
    };

    const handleNext = () => {
        if (validateStep()) setStep(1);
    };

    const handleBack = () => {
        setState(prev => ({ ...prev, error: '' }));
        setStep(0);
    };

    const alumniRef = useRef(null);

    useEffect(() => {
        if (step === 1 && state.role === 'alumni') {
            // Scroll to alumni block and focus first input for better UX
            setTimeout(() => {
                if (alumniRef.current) {
                    alumniRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    const firstInput = alumniRef.current.querySelector('select, input');
                    if (firstInput) firstInput.focus();
                }
            }, 50);
        }
    }, [step, state.role]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateAll()) {
            onSubmit(e);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col gap-6 border border-blue-100"
        >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-2">
                {isEdit ? "Edit Profile" : "Register"}
            </h2>
            {state?.error && <p className="text-red-500 text-center">{state.error}</p>}
            
            {/* Basic Information Row */}
            {((!isEdit && step === 0) || isEdit) && (
                <div className={`grid grid-cols-1 ${isEdit ? 'md:grid-cols-2' : ''} gap-4`}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium text-gray-700">Name</label>
                    <input
                        value={state.name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={handleChange}
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:border-blue-400"
                        required
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium text-gray-700">Email</label>
                    <input
                        value={state.email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Example@college.edu"
                        onChange={handleChange}
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:border-blue-400"
                        required
                        disabled={isEdit}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
            </div>

            )}
            {!isEdit && step === 0 && (
                <div className={`grid grid-cols-1 ${isEdit ? 'md:grid-cols-2' : ''} gap-4`}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="font-medium text-gray-700">Password</label>
                        <input
                            value={state.password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:border-blue-400"
                            required
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor='role' className="font-medium text-gray-700">Role</label>
                        <select
                            id='role'
                            name='role'
                            value={state.role}
                            onChange={handleChange}
                            disabled={isEdit}
                            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:border-blue-400"
                        >
                            <option value={"alumni"}>Alumni (ex student)</option>
                            <option value={"student"}>Student</option>
                        </select>
                        {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                    </div>
                </div>
            )}

            {/* Role Row (only for edit mode) */}
            {isEdit && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor='role' className="font-medium text-gray-700">Role</label>
                        <select
                            id='role'
                            name='role'
                            value={state.role}
                            onChange={handleChange}
                            disabled={isEdit}
                            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:border-blue-400"
                        >
                            <option value={"alumni"}>Alumni (ex student)</option>
                            <option value={"student"}>Student</option>
                        </select>
                    </div>
                    <div></div>
                </div>
            )}

            {/* Academic Information Row */}
            {(isEdit || step === 1) && (
                <div ref={alumniRef} className={`grid grid-cols-1 ${isEdit ? 'md:grid-cols-2' : ''} gap-4`}>
                <div className="flex flex-col gap-2">
                    <label htmlFor='gyear' className="font-medium text-gray-700">Graduation Year</label>
                    <select
                        id='gyear'
                        name='graduationYear'
                        value={state.graduationYear}
                        onChange={handleChange}
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:border-blue-400"
                    >
                        <option value={""} disabled>Select year</option>
                        {years.map((year) => <option key={year} value={year}>{year}</option>)}
                    </select>
                    {errors.graduationYear && <p className="text-red-500 text-sm mt-1">{errors.graduationYear}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor='department' className="font-medium text-gray-700">Department</label>
                    <select
                        id='department'
                        name='department'
                        value={state.department}
                        onChange={handleChange}
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:border-blue-400"
                    >
                        <option value={""} disabled>Select department</option>
                        {departments.map((department) => <option key={department} value={department}>{department}</option>)}
                    </select>
                    {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                </div>
            </div>
            )}
            {((!isEdit && step === 1) || isEdit) && state.role === "alumni" && (
                <div className="mt-6 p-4 md:p-6 rounded-xl border-2 border-blue-500 bg-blue-50 shadow-inner">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-4 text-center">Alumni Profile</h3>
                    <div className={`grid grid-cols-1 ${isEdit ? 'md:grid-cols-2' : ''} gap-4`}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='batch' className="font-medium text-blue-700">Batch</label>
                            <select
                                id='batch'
                                name='batch'
                                value={state.batch}
                                onChange={handleChange}
                                className="border border-blue-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:border-blue-600 bg-white"
                            >
                                <option value={""} disabled>Select year</option>
                                {years.map((year) => <option key={year} value={year}>{year}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="course" className="font-medium text-blue-700">Course</label>
                            <input
                                value={state.course}
                                type="text"
                                name="course"
                                id="course"
                                placeholder="Course"
                                onChange={handleChange}
                                className="border border-blue-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:border-blue-600 bg-white"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="currentJob" className="font-medium text-blue-700">Current Job</label>
                            <input
                                value={state.currentJob}
                                type="text"
                                name="currentJob"
                                id="currentJob"
                                placeholder="Current Job"
                                onChange={handleChange}
                                className="border border-blue-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:border-blue-600 bg-white"
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className="flex gap-3 mt-4 justify-end">
                {/* For registration: show Next or Back + Submit depending on step */}
                {!isEdit && step === 0 && (
                    <button
                        type="button"
                        onClick={handleNext}
                        className="bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50"
                    >
                        Next
                    </button>
                )}

                {!isEdit && step === 1 && (
                    <>
                        <button
                            type="button"
                            onClick={handleBack}
                            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </>
                )}

                {/* Edit mode: single submit button */}
                {isEdit && (
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? 'Saving...' : 'Save'}
                    </button>
                )}
            </div>
        </form>
    )};

export default UserForm;