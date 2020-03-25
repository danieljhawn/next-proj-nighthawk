import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Router from 'next/router'
import axios from 'axios'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            stickerjobs: [],
            errors: {}
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        console.log(token)
        if (token) {
            const decoded = jwt_decode(token)
            axios.get("/api/profile", { "headers": { Authorization: `Bearer ${token}` } })
                .then(jobs => {
                    this.setState({
                        first_name: decoded.first_name,
                        last_name: decoded.last_name,
                        email: decoded.email,
                        stickerjobs: jobs.data
                    })
                })

        } else {
            //redirect to login, from front end
            Router.replace("/login")
        }
    }

    render() {
        return (<>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center"> PROFILE </h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Sticker Jobs</td>
                            </tr>
                            
                            {this.state.stickerjobs.map(job => 
                            (
                            <tr>
                                <td>{job.width}</td>
                                <td>{job.height}</td>
                                <td>{job.shape}</td>
                            </tr>
                            )
                            ) }
                        </tbody>
                    </table>
                </div>
            </div>
        </>)
    }
}

export default Profile