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
                <div className="">
                    <div className="col-12 col-lg-6 col-md-10  mx-auto">
                        <h4 className="text-center"> Logged in as {this.state.email} </h4>
                    </div>
                    
                </div>
                <div className="mt-1 shadow rounded-lg p-3">
                    <div className="mx-auto">
                        <h1 className="text-center"> Your Sticker Jobs </h1>
                    </div>
                    
                    <table className="table mx-auto">
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Width</th>
                                <th>Height</th>
                                <th>Shape</th>
                                <th>Quantity</th>
                                <th>Cost</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.stickerjobs.reverse().map(job =>
                                (
                                    <tr key={job.id}>
                                        <td>#{job.id}</td>
                                        <td>{job.width}"</td>
                                        <td>{job.height}"</td>
                                        <td>{job.shape}</td>
                                        <td>{job.quantity}</td>
                                        <td>${job.totalCost}</td>
                                        <td>{job.created.slice(0, 10)}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>)
    }
}

export default Profile