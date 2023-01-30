import React from 'react';
import "./Notifications.css";
import { getLatestNotification } from './utils';
import image from './close-icon.png';

function notif() {
    return (
        <div className='Notifications'>
            <button style={{ float: 'right' }} aria-label="close" onClick={() => console.log("Close button has been clicked")}>
                <img src={image} alt="" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-type="default">New course available</li>
                <li data-type="urgent">New resume available</li>
                <li data-type="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}

export default notif;