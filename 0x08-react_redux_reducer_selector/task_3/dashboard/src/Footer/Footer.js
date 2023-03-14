import React, { Component } from 'react'
import { getFooterCopy, getFullYear } from '../utils'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='App-footer'>
                <p>
                    Copyright {getFullYear()} - {getFooterCopy(true)}
                </p>
            </div>
        )
    }
}

export default Footer