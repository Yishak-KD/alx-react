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

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <>
        <Notifications displayDrawer={true} />
        <div className="App">
          <Header />
          <NotificationItem />
          {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
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