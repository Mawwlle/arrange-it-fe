import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {}
        };
    }

    componentDidMount() {
        AuthService.getCurrentUser().then(
            response => {
                if (!response) {
                    this.setState({
                        redirect: "/home"
                    })
                } else {
                    this.setState({ currentUser: response.data, userReady: true });
                }
            }).catch(
                error => {
                    this.setState({
                        content:
                            (error.response && error.response.data) ||
                            error.message ||
                            error.toString()
                    });
                }
            );
    }


    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }

        const { currentUser } = this.state;

        return (
            <div className="container">
                {(this.state.userReady) ?
                    <div>
                        <header className="jumbotron">
                            <h3>
                                <strong>{currentUser.username}'s</strong> Profile
                            </h3>
                        </header>
                        <p>
                            <strong>Email: {currentUser.email}</strong>
                        </p>
                        <strong>Authorities:</strong>
                        <ul>Still in progress, sorry.</ul>
                    </div> : null}
            </div>
        );
    }
}