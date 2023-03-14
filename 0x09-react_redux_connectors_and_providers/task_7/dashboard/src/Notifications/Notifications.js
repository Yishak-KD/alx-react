import React from 'react';
import image from '../close-icon.png';
import NotificationItem from './NotificationItem';
import propTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class notif extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    markAsRead = id => {
        if (typeof id === 'number')
            console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.length > this.props.listNotifications.length;
    }

    render() {
        if (this.props.displayDrawer === true) {
            return (
                <>
                    <div className='menuItem' onClick={this.props.handleDisplayDrawer}>Your notifications</div>
                    <div className={css(styles.Notifications)}>
                        <button style={{ float: 'right' }} aria-label="close" onClick={() => console.log("Close button has been clicked")}>
                            <img src={image} alt="" />
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {
                                this.props.listNotifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" /> : null
                            }
                            {
                                this.props.listNotifications.map((val, index) => {
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
}

const styles = StyleSheet.create({
    Notifications: {
        border: '1px dashed red',
        margin: '20px',
        padding: '10px',
    },
    'li[data-type= "default"]': {
        color: "blue",
    },

    'li[data - type= "urgent"]': {
        color: "red",
    },
    'li[data - notification - type= "default"]': {
        color: "blue",
    },
    'li[data - notification - type= "urgent"]': {
        color: "red",
    }
})

notif.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { }
}

notif.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape),
    handleHideDrawer: propTypes.func,
    handleDisplayDrawer: propTypes.func
}

export default notif;