import React from "react"
import "./index.css"
import {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { Navigate } from 'react-router-dom';
import { login } from "../../store/session";



const LoginScreen = () => {

    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);


    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    // if (user) {
    //     return <Navigate to='/' />;
    // }


    return (
        <div>
            <h1> Employee Polls </h1>
            <div>Login</div>
            <form onSubmit={onLogin}>
                <div className="errors-list">
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className="email-input-container">
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={updateEmail}
                        className="email-input"
                    />
                </div>
                <div className="password-input-container">
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={updatePassword}
                        className="password-input"
                    />
                </div>
                <div className="btn-container-sign-in">
                    <button type="submit" className="sign-in-btn">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}



export default LoginScreen;
