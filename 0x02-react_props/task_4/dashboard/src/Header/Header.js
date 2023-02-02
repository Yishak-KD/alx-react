import holberton from '../Holberton.jpg'
import './Header.css'
import React from 'react'

export default function Header() {
    return (
        <>
            <div className="App-header">
                <img src={holberton} className="App-logo" alt="logo" />
                <h1>School dashboard</h1>
                <hr />
            </div>
        </>
    )
}
