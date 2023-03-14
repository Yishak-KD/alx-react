import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Test Footer component', () => {
    test("Renders component without crashing", () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.exists()).toEqual(true)
    })
    test("Render text", () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.text().includes('Copyright')).toEqual(true)
    })
})