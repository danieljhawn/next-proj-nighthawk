import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Router from 'next/router'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'
import StickerUpdate from './StickerUpdate'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            stickerjobs: [],
            errors: {},
            showModal: false,
            currentJob: {}
        }
    }

    getJobs = () => {
        const token = localStorage.usertoken
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

    componentDidMount() {
        // console.log("component mounted")
        this.getJobs();
    }


    jobDelete = (id) => {
        console.log("my id", id)
        const token = localStorage.usertoken
        if (token) {
            const decoded = jwt_decode(token)
            axios.delete("/api/jobPost/" + id, { "headers": { Authorization: `Bearer ${token}` } })
                .then(() => {
                    this.getJobs()
                })
        } else {
            console.log("error - no token")
        }
    }

    jobEdit = (job) => {
        this.setState({currentJob: job, showModal: true})
    }

    openModal = () => {
        this.setState({ showModal: true })
    }

    closeModal = () => {
        this.setState({ showModal: false })

    }

    render() {
        return (<>

            <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <StickerUpdate job={this.state.currentJob}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="container">
                <div className="mt-1">
                    <div className="">
                        <h4 className="text-center"> Logged in as {this.state.email} </h4>
                    </div>

                </div>
                <div className="table-responsive mt-1 shadow rounded-lg p-3">
                    <div className="">
                        <h1 className="text-center"> Your Sticker Jobs </h1>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Width</th>
                                <th>Height</th>
                                <th>Shape</th>
                                <th>Quantity</th>
                                <th>Cost</th>
                                <th>Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log("look here", this.state.stickerjobs)} */}
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
                                        <td><button onClick={() => { this.jobEdit(job) }}>edit</button></td>
                                        <td><button onClick={() => { this.jobDelete(job.id) }}>delete</button></td>
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