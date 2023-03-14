import React, { useState, useEffect } from 'react'
import { StyleSheet, css } from 'aphrodite'


function Login(props) {
    // Creating a local state with value isLoggedIn set to false
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleLoginSubmit = (e) => {
        props.logIn(e.target.elements.email.value, e.target.elements.password.value);
    }

    useEffect(() => {
        if (email && password) {
            setEnableSubmit(true)
        } else if (!email) {
            // return (this.state.enableSubmit)
            setEnableSubmit(false)
        } else if (!password) {
            setEnableSubmit(false)
        }
    }, [email, password])


    const handleChangeEmail = event => {
        setEmail(event.target.value)
    }

    const handleChangePassword = event => {
        setPassword(event.target.value)
    }

    return (
        <React.Fragment>
            <div className={css(styles['App-body'])}>
                <p>Login to access the full dashboard</p>
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input className={css(styles.input)} type="email" id="email" name='email' value={email} onchange={handleChangeEmail} />
                    <label htmlFor="password">Password:</label>
                    <input className={css(styles.input)} type="password" id="password" name='password' value={password} onchange={handleChangePassword} />
                    <input type="submit" value="OK" disabled={!enableSubmit} />
                </form>
            </div>
            <hr className={css(styles.hrline)} />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    "App-body": {
        height: '15vh',
        padding: '40px',
        fontWeight: '500',
    },
    hrline: {
        borderTop: '3.5px solid rgb(230, 62, 62)',
    },
    '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column'
    },
    inputs: {
        margin: '0 16px 0 8px'
    }
})

export default Login