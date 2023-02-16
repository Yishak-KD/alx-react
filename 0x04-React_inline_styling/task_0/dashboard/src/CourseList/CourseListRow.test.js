import React from 'react';
import CourseListRow from "./CourseListRow";
import { shallow } from 'enzyme';



describe("Test the Table file", () => {
    test("Component renders one cell", () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />)

        expect(wrapper.find('tr').children()).toHaveLength(1)
        expect(wrapper.find('tr').childAt(0).html()).toEqual('<th style="background-color:#deb5b545" colSpan="2">test</th>')
    })
    test("Component renders two cell when rendered", () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test" />)

        expect(wrapper.find('tr').children()).toHaveLength(2)
        expect(wrapper.find('tr').childAt(0).html()).toEqual('<th style="background-color:#deb5b545">test</th>')
        expect(wrapper.find('tr').childAt(1).html()).toEqual('<th style="background-color:#deb5b545">test</th>')
    })
    test("Component renders two td", () => {
        const wrapper = shallow(<CourseListRow textFirstCell="test" />)

        expect(wrapper.find('td')).toHaveLength(2)
    })
})