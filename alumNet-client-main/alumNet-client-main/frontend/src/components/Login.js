import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { loginUser } from '../utils/constant';
import { useAuth } from '../utils/auth';

function Login() {
    const [state, setState] = useState({
        email: 's@college.edu',
        password: '123456',
        error: ''
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    // Redirect if already authenticated
    useEffect(() => {
        if (auth.user && auth.user.token) {
            const from = location.state?.from || '/profile';
            navigate(from, { replace: true });
        }
    }, [auth.user, location.state, navigate]);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
       state.error==="" ? setLoading(true): setLoading(false);
        loginUser(state, navigate, setState,setLoading,auth);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-blue-400 p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col gap-6 border border-blue-100"
            >
                <h2 className="text-4xl font-bold text-center mb-2 text-blue-700">Login</h2>
                {state.error && <p className="text-red-500 text-center">{state.error}</p>}
                <input
                    value={state.email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    value={state.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 rounded w-full hover:bg-blue-700 transition"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <div className="text-center mt-2">
                    <p className="text-sm text-gray-600">Don't have an account? <Link to="/register" className="text-blue-600 font-medium hover:underline">Sign up</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;