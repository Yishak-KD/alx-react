import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';

describe('Test header test', () => {
    it("Verify if Header component renders", () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.exists()).toEqual(true)
    });
    it('verify component img renders', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.exists('img')).toEqual(true)
        expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true)
    })
})