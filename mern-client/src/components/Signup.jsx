import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import googleIcon from "../assets/google-logo.svg";

const Signup = () => {
    const { createUser, loginwithGoogle } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from || '/';

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(() => {
                alert("Sign up successfully!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // Sign up with Google account
    const handleRegister = () => {
        loginwithGoogle()
            .then(() => {
                alert("Login with Google successfully!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-gray-200 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold font-serif">Sign up form</h1>
                        <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input id="email" name="email" type="email" required className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" required className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                            </div>
                            {error && <p className="text-red-500 fon">{error}</p>}
                            <p>If you have an account, please <Link to="/login" className="text-blue-700 underline font-serif">Login</Link> here.</p>
                            <div className="relative">
                                <button className="bg-sky-500 text-white rounded-md px-6 py-2 font-serif">Sign up</button>
                            </div>
                        </form>
                        <hr />
                        <div className='flex w-full items-center gap-3 flex-col mt-5'>
                            <button onClick={handleRegister} className='flex items-center gap-2 p-2 border rounded-md bg-white shadow'>
                                <img src={googleIcon} alt="Google logo" className='w-6 h-6 font-serif' /> Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
