import React from 'react';
import "./Notifications.css";
import image from '../close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils';
import propTypes from 'prop-types';

function notif({ displayDrawer }) {
    if (displayDrawer === true) {
        return (<>
            <div className='menuItem'>Your notifications</div>

            <div className='Notifications'>
                <button style={{ float: 'right' }} aria-label="close" onClick={() => console.log("Close button has been clicked")}>
                    <img src={image} alt="" />
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type="default" value="New course available" />
                    <NotificationItem type="urgent" value="New resume available" />
                    <NotificationItem type="urgent" html={getLatestNotification()} />
                </ul>
            </div>
        </>)
    }
}

notif.propTypes = {
    displayDrawer: propTypes.bool
}

notif.defaultProps = {
    displayDrawer: false
}

export default notif;