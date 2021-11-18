import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {useHistory} from "react-router-dom";
import App from "../App";


export default function FRJNavBar() {
    const history = useHistory()
    const loginClick = () =>{
        history.push("/login")
    }
    function about(){
        window.location.href = 'http://localhost:3000/about'
    }
    function login(){
        window.location.href = 'http://localhost:3000/login'
    }
    function register(){
        window.location.href = 'http://localhost:3000/register'
    }
    function contact(){
        window.location.href = 'http://localhost:3000/contact'
    }
    return (
    <AppBar>
        <Toolbar>
            <Button onClick={login} style={{}} color="inherit">Login</Button>
            <Button onClick={about} color="inherit">About</Button>
            <Button onClick={register} color="inherit">Register</Button>
            <Button onClick={contact} color="inherit">Contact</Button>
        </Toolbar>
    </AppBar>
    )
}