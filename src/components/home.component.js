import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: "Ну в общем тут будет классная страничка где пишется о последних новостях, самых популярных ивентах и прочее." +
                        "А пока ведутся работы...."
                });
            },
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
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>{this.state.content}</h3>
                    <img
                        src="https://i.pinimg.com/736x/6b/ca/63/6bca63fd50c35f6206cc0d174504e023.jpg"
                        alt="profile-img"
                        className="profile-img-card"
                    />
                </header>
            </div>
        );
    }
}