import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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
})