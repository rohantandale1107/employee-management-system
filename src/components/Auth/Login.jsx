import React, { useState } from 'react';

const Login = ({handleLogin}) => {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }



    return (
        <div className="flex h-screen w-screen items-center justify-center bg-[#111111]">
            <div className="w-full max-w-sm p-8 bg-transparent rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-semibold text-center mb-6 text-white">Login</h2>
                <form onSubmit={(e)=>{
                    submitHandler(e);
                    e.preventDefault();
                }} className="flex flex-col space-y-4">
                    <input
                    value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                        type="text"
                        required
                        placeholder="Enter email"
                        className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                    <input
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        type="password"
                        required
                        placeholder="Enter password"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                    <button
                        type="submit"
                        className="transition ease-in-out duration-300 bg-red-400 hover:bg-red-500 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
