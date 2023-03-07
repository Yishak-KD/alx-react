import React, { useState, useEffect } from 'react'
import { StyleSheet, css } from 'aphrodite'


function Login() {
    // Creating a local state with value isLoggedIn set to false
    // eslint-disable-next-line
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleLoginSubmit = (e) => {
        setIsLoggedIn(true);
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
                    <label>Email:
                        <input className={css(styles.input)} type="email" name='Email' value={email} onchange={handleChangeEmail} />
                    </label>
                    <label>Password:
                        <input className={css(styles.input)} type="password" name='Password' value={password} onchange={handleChangePassword} />
                    </label>
                    <input type={'submit'} value='OK' disabled={!enableSubmit} />
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