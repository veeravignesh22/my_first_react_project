import React, { Component } from 'react';
import './Login.css';
import movie from './images/movie.jpg';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './components/Navbar/Home.js';


class Login extends Component{
    constructor(){
        super();
        }

    handleClick(){
        console.log("clicked");
        return(
            
            <Home />
        );
    }
    render() {
        return (

            <div  style={{backgroundImage: `url(${movie})`, height: "578px" }}>

            <div style = {{backgroundColor: "black"}}>       
            <div className="root">

            <form>
                <h3 className="h3">Sign In</h3>
                
                <div className="form">
                    <label>Email Address</label>
                    <input type="email" className="login-input" placeholder="Enter Your email" />
                </div>

                <div className="form">
                    <label>Password</label>
                    <input type="password" className="login-input"  placeholder="Enter Password" />
                </div>
                
                <button  className="loginbutton" onClick={this.handleClick}><b>Sign In</b></button>
                
                <p className="form-password">
                    <a href="#">Forget Password?</a>
                </p>

            </form>
            </div>
            </div>
            </div>
            
        )
    }

}

export {Login}