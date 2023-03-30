import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import './LoginButton.css';

const LoginButton = () => {
    const dispatch = useDispatch()
    const onLogout = async (e) => {
        await dispatch(login());
    };

    return <button onClick={onLogout} className="logout-btn">Logout</button>;
};

export default LoginButton;
