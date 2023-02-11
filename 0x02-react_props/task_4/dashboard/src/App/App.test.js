import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe("Test App component", () => {
    test("Renders without crushing", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.exists()).toBe(true)
    })

    test("Check Notifications component", () => {
        const component = shallow(<App />)
        expect(component.contains(<Notifications />)).toBe(true)
    })
    test("Check Header component", () => {
        const component = shallow(<App />)
        expect(component.contains(<Header />)).toBe(true)
    })
    test("Check Login component", () => {
        const component = shallow(<App />)
        expect(component.contains(<Login />)).toBe(true)
    })
    test("Check Footer component", () => {
        const component = shallow(<App />)
        expect(component.contains(<Footer />)).toBe(true)
    })

    test("Check that CourseList is not displayed", () => {
        const component = shallow(<App isLoggedIn={false} />)
        expect(component.contains(<CourseList />)).toBe(false)
    })

    test("Check that CourseList is displayed, and login component is not included", () => {
        const component = shallow(<App isLoggedIn={true} />)

        expect(component.contains(<CourseList />)).toBe(true)
        expect(component.contains(<Login />)).toBe(false)
    })

})