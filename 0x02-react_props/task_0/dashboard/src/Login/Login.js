import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App-body">
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
                <hr />
            </React.Fragment>
        )
    }
}

export default Login