import React from 'react';

function NotificationItem(props) {
    return (
        <>
            {props.html ? <li data-notification-type={props.type} dangerouslySetInnerHTML={{ __html: props.html }}></li> : null}
            {props.value && props.type ? <li data-notification-type={props.type}>{props.value}</li> : null}
        </>
    )
}

export default NotificationItem;