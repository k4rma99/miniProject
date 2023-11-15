import React, { useState } from 'react';

import "./login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        };

        fetch('/login', fetchOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Successful login
                    console.log('Login successful!');
                    // Redirect to homepage or other protected page
                } else {
                    // Failed login
                    setErrorMessage(data.message);
                }
            });
    };

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <label className="label">Email:</label>
            <input type="email" value={email} className="input" onChange={(event) => setEmail(event.target.value)} />

            <label className="label">Password:</label>
            <input type="password" value={password} className="input" onChange={(event) => setPassword(event.target.value)} />

            <button type="submit" className="button">Login</button>

            {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
    );
};

export default Login;