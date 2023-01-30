import React, { Component } from "react";
import holberton from '../Holberton.jpg'
import './Header.css'
class header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={holberton} className="App-logo" alt="logo" />
                <h1>School dashboard</h1>
                <hr />
            </div>
        );
    }
}

export default header;
