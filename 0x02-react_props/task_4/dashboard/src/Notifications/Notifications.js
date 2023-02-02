import React from 'react';
import "./Notifications.css";
import image from '../close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils';

function notif() {
    return (
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
    )
}

export default notif;