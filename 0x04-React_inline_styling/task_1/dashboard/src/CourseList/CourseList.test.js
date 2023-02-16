import CourseList from "./CourseList";
import { shallow } from 'enzyme';

describe("Test for CourseList component", () => {
    it("renders CourseList component without crashing", () => {
        const wrapper = shallow(<CourseList />)

        expect(wrapper.exists()).toBe(true)
    })
})