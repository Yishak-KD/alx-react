import holberton from '../Holberton.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

export default class Header extends React.Component {
    // static contextType = AppContext
    render() {
        const data = this.context
        const email = data.currentUser.email
        const displayText = () => {
            if (data.currentUser.isLoggedIn) {
                return (
                    <section id="logoutSection">Welcome {email}
                        <span className={css(styles.logOut)} onClick={data.logOut}>(logout)</span>
                    </section>
                )
            }
        }
        return (
            <React.Fragment>
                <div className={css(styles.header)}>
                    <img className={css(styles.img)} src={holberton} alt="logo" />
                    <h1 className={css(styles.heading)}>School dashboard</h1>
                </div>
                {displayText()}
            </React.Fragment>
        )
    }
}
Header.contextType = AppContext

const styles = StyleSheet.create({
    "App-header": {
        backgroundColor: 'white',
        height: '10vh',
        display: 'inline',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'rgb(230, 62, 62)'
    },
    "App-logo": {
        width: "200px",
        height: "200px",
    },
    hr: {
        borderTop: '3.5px solid rgb(230, 62, 62)',
    },
    "App-h1": {
        display: 'inline',
        fontWeight: '500',
        position: 'relative',
        bottom: '85px',
    }
})