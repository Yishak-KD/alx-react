import React from 'react';
import "./Notifications.css";
import image from '../close-icon.png';
import NotificationItem from './NotificationItem';
import propTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function notif({ displayDrawer, listNotifications }) {
    if (displayDrawer === true) {
        return (
            <>
                <div className='menuItem'>Your notifications</div>
                <div className='Notifications'>
                    <button style={{ float: 'right' }} aria-label="close" onClick={() => console.log("Close button has been clicked")}>
                        <img src={image} alt="" />
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {
                            listNotifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" /> : null
                        }
                        {
                            listNotifications.map((val, index) => {
                                return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.index} />
                            })
                        }
                    </ul>
                </div>
            </>
        )
    } else {
        return (<div className='menuItem'>Your notifications</div>)
    }
}

notif.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape)
}

notif.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default notif;