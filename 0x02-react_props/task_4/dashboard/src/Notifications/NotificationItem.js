import React from 'react';
import propTypes from 'prop-types';

function NotificationItem({ type, value, html }) {
    return (
        <>
            {html ? <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li> : null}
            {value && type ? <li data-notification-type={type}>{value}</li> : null}
        </>
    )
}

NotificationItem.propTypes = {
    __html: propTypes.shape({
        html: propTypes.string
    }),
    type: propTypes.string.isRequired,
    value: propTypes.string
}

NotificationItem.defaultProps = {
    type: "default",
};

export default NotificationItem;