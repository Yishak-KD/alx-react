import React from 'react';
import CourseListRow from "./CourseListRow";
import { shallow } from 'enzyme';

describe("Test the Table file", () => {
    test("Component renders one cell", () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />)

        expect(wrapper.find('tr').children()).toHaveLength(1)
    })
    test("Component renders two cell when rendered", () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={test} />)

        expect(wrapper.find('tr').children()).toHaveLength(2)
    })
    test("Component renders two td", () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell={null} />)

        expect(wrapper.find('tr').children()).toHaveLength(2)
    })
})