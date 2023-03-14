import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem'

describe("Test Notification Item", () => {
    test("Should work without crushing", () => {
        const wrapper = shallow(<NotificationItem />)
        expect(wrapper.exists()).toEqual(true)
    })
})