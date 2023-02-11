import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe("Test for Course Lists", () => {
    it("renders Course List component without crushing", () => {
        const wrapper = shallow(<CourseList />)
        // The test case uses the shallow method to render the component, and then we use expect from Jest to check that the result is defined. If the component renders without crashing, the test will pass.

        expect(wrapper).toBeDefined()
    })

    it("renders 2 different thead rows", () => {
        const wrapper = shallow(<CourseList />)
        expect(wrapper.find('thead CourseListRow').length).toBe(2)
    })


    it("renders 3 different tbody rows", () => {
        const wrapper = shallow(<CourseList />)
        expect(wrapper.find('tbody CourseListRow').length).toBe(3)
    })
})