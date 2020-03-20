import React, { Component } from "react";
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            // this.props.history.push('/api/register')
            console.log("this worked")
        })
    }

    render() {
        return (
                <div className="row m-3 p-3">
                    <div className="col rounded-lg bg-light mx-auto shadow-lg">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label htmlFor="name">First name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="first_name" 
                                    placeholder="First name"
                                    value= {this.state.first_name} 
                                    onChange= {this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Last name" 
                                    value= {this.state.last_name} 
                                    onChange= {this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="email"
                                    placeholder="Enter email" 
                                    value= {this.state.email}
                                    onChange= {this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password"
                                    placeholder="Enter password"
                                    value= {this.state.password}
                                    onChange= {this.onChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="/login">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
        );
    }
}

export default Register