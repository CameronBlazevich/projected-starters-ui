import { useState } from 'react';
import { useAuthContext } from '../../context/auth-context';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState();
    const {login} = useAuthContext();


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
        fetch(`${baseUrl}/register`, {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                res.json().then(json => {
                    if (res.status === 201) {
                        if (json) {
                            login(json)
                        } else {
                            console.error("No token after registration.")
                        }
                    } else if (res.status === 400) {
                        if (json?.message?.startsWith("Record already")) {
                            showError("Email already in use. Please log in instead.")
                        }
                    } else {
                        console.error(json.message)
                        const error = new Error(json.message);
                        throw error;
                    }
                })

            })
            .catch(err => {
                console.error(err);
                showError('Error registering please try again');
            });
    }


    return (
        <div>
            <div className="registration-form">
                <form onSubmit={onSubmit}>
                    <h1>Register Below!</h1>
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
                <p>Already have an account? <a href="#" onClick={() => props.setRegisterFlag(false)}>Login Here</a></p>
                <p className="error">{error}</p>
            </div>
        </div>
    );
}


export default Register;