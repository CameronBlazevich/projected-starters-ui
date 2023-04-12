import React, { Component } from 'react';
import Register from './register';

export default class Login extends Component {
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
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_API_URL;
        fetch(`${baseUrl}/login`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        // console.log(json)
                        if (json) {
                            this.props.setToken(json)
                        } else {
                            console.log("No token after logging in.")
                        }
                    })
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    render() {
        if (this.props.registerFlag) {
            return (<Register setToken={this.props.setToken} setRegisterFlag={this.props.setRegisterFlag}></Register>)
        }
        return (
            <div className="login-form">
            <form onSubmit={this.onSubmit}>
                <h1>Login Below!</h1>
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
                <p>No Account? <a href="#" onClick={() => this.props.setRegisterFlag(true)}>Register Here</a></p>
            </div>
        );
    }
}