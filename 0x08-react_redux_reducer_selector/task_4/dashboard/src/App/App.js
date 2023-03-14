import React from 'react';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CourseList from '../CourseList/CourseList';
import propTypes from 'prop-types';
import { getLatestNotification } from '../utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { AppContext, user } from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut
    }
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  handleKeyEvent(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert("Logging you out");
      this.props.logOut()
    }
  }

  // A function that will change the value of displayDrawer to true
  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true
    })
  }

  // A function that will change the value of displayDrawer to false
  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false
    })
  }

  // A login function in the App container
  logIn = (email, password) => {
    const currentUser = { email: email, password: password, isLoggedIn: true }
    this.setState({
      user: currentUser
    })
  }

  // A logOut function in the App container
  logOut = () => {
    this.setState({
      user: user
    })
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEvent);
  }

  render() {
    return (
      <AppContext.Provider value={{
        user: this.state.user,
        logOut: this.state.logOut
      }}>
        <>
          <Notifications listNotifications={this.listNotifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
          <div className={css(styles.App)}>
            <Header />
            {this.state.user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login Login={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>This is a random text</p>
            </BodySection>
            <Footer />
          </div>
        </>
      </AppContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  App: {
    padding: '0px 20px',
    height: '100vh',
    position: 'relative',
    maxWidth: '100vw',
    fontFamily: "Arial, Helvetica, sans-serif",
  }
})

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => null
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
  logOut: propTypes.func
}

export default App;