import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
//
describe("Test App component", () => {
    test("Renders without crushing", () => {
        shallow(<App />)
    })

    test("Check Notifications component", () => {
        const component = shallow(<App />)
        expect(component.contains(<Notifications />)).toBe(false)
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