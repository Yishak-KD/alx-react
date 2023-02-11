import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe("Test Notifications component", () => {
    it("Displays menuitem when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />)

        expect(wrapper.find('div.menuItem').exists()).toBe(true)

    })

    it("Checks notifications is not being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />)

        expect(wrapper.find('div.Notifications').exists()).toBe(false)
    })

    it("Displays menuitem when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />)

        expect(wrapper.find('div.menuItem').exists()).toBe(true)
    })

    it("Checks notifications is not being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />)

        expect(wrapper.find('div.Notifications').exists()).toBe(true)
    })
})