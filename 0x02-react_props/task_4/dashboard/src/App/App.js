import React from 'react';
import "./App.css";
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NotificationItem from '../Notifications/NotificationItem';
// import CourseListRow from '../CourseList/CourseListRow';
import CourseList from '../CourseList/CourseList';
import propTypes from 'prop-types';

function App({ isLoggedIn }) {
  if (isLoggedIn === true) {
    return (
      <>
        <Notifications displayDrawer={true} />
        <div className="App">
          <Header />
          <NotificationItem />
          <CourseList />
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <NotificationItem />
          <Login />
          <Footer />
        </div>
      </>
    )
  }
}

App.propTypes = {
  isLoggedIn: propTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;