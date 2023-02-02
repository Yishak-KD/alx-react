import React from 'react';
import "./App.css";
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NotificationItem from '../Notifications/NotificationItem';
import CourseListRow from '../CourseList/CourseListRow';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <NotificationItem />
        <CourseListRow />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;