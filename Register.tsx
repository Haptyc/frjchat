import React from "react";
import Router from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import NullProps from "./NullProps";
import {Button} from "@material-ui/core";
import {Grid, Row, Col} from 'react-flexbox-grid'

type RegisterState = {
    username: string,
    password: string,
    dob: string,
    firstName: string,
    lastName: string,
    token: number
}

export default class Register extends React.Component<NullProps, RegisterState> {
    render() {

        return (
            <Grid className="Grid">

                <br/>
                <br/>
                <br/>
                <Row>
                    <Col>
                        <p className="registerHeading">Register For FRJ Chat</p>
                    </Col>
                </Row>
                <Row>

                    <Col>
                        <TextField

                            label="Username"
                            variant="filled"
                        />
                        <Col/>

                        <Col>
                            <TextField

                                label="Password"
                                variant="filled"
                            />
                        </Col>

                        <Col>
                            <TextField

                                label="Date of Birth"
                                variant="filled"
                            />
                        </Col>
                        <Col>
                            <TextField

                                label="First Name"
                                variant="filled"
                            />
                        </Col>

                        <Col>
                            <TextField

                                label="Last Name"
                                variant="filled"
                            />
                        </Col>

                        <br/>
                        <Button onClick={event => {
                            this.register()
                        }} variant='contained'>Register</Button>




                    </Col>
                </Row>
            </Grid>
        )
    }

    register() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'token': this.state.token},
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        }
        fetch('https://localhost:8080')
            .then(response => response.json())
    }
}