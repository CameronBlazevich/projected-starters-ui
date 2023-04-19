import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
            error: undefined
        });
    }

    showError = (error) => {
        this.setState({ error: error })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_API_URL;
        fetch(`${baseUrl}/register`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                res.json().then(json => {
                    if (res.status === 201) {
                        if (json?.token) {
                            this.props.setToken(json)
                        } else {
                            console.error("No token after registration.")
                        }
                    } else if (res.status === 400) {
                        if (json?.message?.startsWith("Record already")) {
                            this.showError("Email already in use. Please log in instead.")
                        }
                    } else {
                        console.error(json.message)
                        const error = new Error(json.message);
                        throw error;
                    }})

            })
            .catch(err => {
                console.error(err);
                this.showError('Error registering please try again');
            });
    }

    render() {
        return (
            <div>
                <div className="registration-form">
                    <form onSubmit={this.onSubmit}>
                        <h1>Register Below!</h1>
                        <div>
                            <div className='login-form-label'>
                                <label>Email:</label>
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
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
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <input className='login-form-submit' type="submit" value="Submit" />
                    </form>
                    <p>Already have an account? <a href="#" onClick={() => this.props.setRegisterFlag(false)}>Login Here</a></p>
                    <p className="error">{this.state.error}</p>
                </div>
            </div>
        );
    }
}