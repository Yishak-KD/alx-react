import React from 'react';
import propTypes from 'prop-types';

class NotificationItem extends React.Component {
    render() {
        const { type, value, html, markAsRead, id } = this.props;
        return (
            <>
                {html ? <li onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li> : null}
                {value && type ? <li onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li> : null}
            </>
        )
    }
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