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
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('https://salty-lake-22253.herokuapp.com/register', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 201) {
                    res.json().then(json => {
                        console.log(json)
                        if (json?.Token) {
                        this.props.setToken(json)
                        } else {
                            console.log("No token after registration")
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
                alert('Error logging in please try again');
            });
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}