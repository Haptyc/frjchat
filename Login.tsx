import React from "react";
import NullProps from "./NullProps";

type LoginState = {
    censored: boolean,
    username: string,
    password: string
}

export default class Login extends React.Component<NullProps, LoginState> {
    constructor(props: Readonly<NullProps> | NullProps) {
        super(props);
        this.state = {
            censored: true,
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <input type='text'
                       value={this.state.username}
                       onChange={event => {
                           this.setState({username: event.target.value})
                       }}
                       placeholder={"Username"}/>


                <input type='text'
                       value={this.state.password}
                       onChange={event => {
                           this.setState({password: event.target.value})
                       }}
                       placeholder={"Password"}
                />

            </div>

        )
    }
}