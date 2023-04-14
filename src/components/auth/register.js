import React, { Component } from 'react';
import AppExplanation from './app-explanation';

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
            error:undefined
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
                if (res.status === 201) {
                    res.json().then(json => {
                        if (json?.token) {
                            this.props.setToken(json)
                        }
                    })
                } else if (res.status === 400) {
                    res.json().then(json => {
                        if (json?.error?.startsWith("Record already")) {
                            this.showError("Email already in use. Please log in instead.")
                        }
                    })
                    
                } else {
                    console.error(res.error)
                    const error = new Error(res.error);
                    throw error;
                }
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
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>Already have an account? <a href="#" onClick={() => this.props.setRegisterFlag(false)}>Login Here</a></p>
                    <p className="error">{this.state.error}</p>

                </div>
                {/* <AppExplanation></AppExplanation> */}
            </div>
        );
    }
}