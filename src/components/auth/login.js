import React, { Component, useState } from 'react';
import Register from './register';
import { useAuthContext } from '../../context/auth-context';

const Login = (props) =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState();

    const { login } = useAuthContext();
    
    const showError = (error) => {
        setError(error);
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        if (name === 'email') {
            setEmail(value)
        };

        if (name === 'password') {
            setPassword(value);
        }
       
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_API_URL;
        fetch(`${baseUrl}/login`, {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                res.json().then(json => {
                    if (res.status === 200) {
                        if (json) {
                            login(json)
                        } else {
                            console.log("No token after logging in.")
                        }
                    } else if (res.status === 401) {
                        showError("Incorrect password")
                    } else {
                        showError(json.message)
                    }
                }).catch(err => {throw err})
            })
            .catch(err => {
                console.error(err);
                showError(err.message);
            });
    }


        if (props.registerFlag) {
            return (<Register setRegisterFlag={props.setRegisterFlag}></Register>)
        }
        return (
            <div className="login-form">
                <form onSubmit={onSubmit}>
                    <h1>Login Below!</h1>
                    <div>
                        <div className='login-form-label'>
                            <label>Email:</label>
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <div className='login-form-label'>
                            <label>Password:</label>
                        </div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <input className='login-form-submit' type="submit" value="Submit" />
                </form>
                <p>No Account? <a href="#" onClick={() => props.setRegisterFlag(true)}>Register Here</a></p>
                <p className="error">{error}</p>
            </div>
        )
    
}


export default Login;