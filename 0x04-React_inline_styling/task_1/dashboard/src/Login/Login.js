import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={css(styles['App-body'])}>
                    <p>Login to access the full dashboard</p>
                    <form>
                        <label>Email:
                            <input type="email" />
                        </label>
                        <label>Password:
                            <input type="password" />
                        </label>
                        <button>OK</button>
                    </form>
                </div>
                <hr className={css(styles.hr)} />
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    "App-body": {
        height: '15vh',
        padding: '40px',
        fontWeight: '500',
    },
    hr: {
        borderTop: '3.5px solid rgb(230, 62, 62)',
    }
})

export default Login