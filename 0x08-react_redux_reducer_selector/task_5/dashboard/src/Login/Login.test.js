import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'

describe("Test Login", () => {
    test("Login component renders without crushing", () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.exists()).toBe(true)
    })
    test("Verify component renders 2 input tags", () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.find('input')).toHaveLength(2)
        expect(wrapper.find('label')).toHaveLength(2)
    })
})