import React, { useState } from 'react';
import { login } from "../../store/session";
import { useDispatch } from 'react-redux';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        // Implement your login logic here
        dispatch(login(username, password));
    };

    return (
        <div className="min-h-screen justify-center items-center flex flex-col">
            <h2 className="mb-3">Employee Polls</h2>
            <div className="flex">
                <label htmlFor="username" className="">Username </label>
                <input
                    className="border-b-2 bg-gray-200 ml-2"
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="flex mt-4 align-bottom">
                <label htmlFor="password" className="">Password </label>
                <input
                    className="border-b-2 bg-gray-200 ml-2"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn mt-3 focus:outline-none shadow-none " onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginScreen;
