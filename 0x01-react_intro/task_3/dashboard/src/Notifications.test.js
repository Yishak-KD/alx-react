import { shallow } from 'enzyme';
import Notification from './Notifications'

describe("Notification Test", () => {
    test('Notification should render', () => {
        const wrapper = shallow(<Notification />)
        expect(wrapper).toBeDefined()
    })
    test('Should render three list items', () => {
        const wrapper = shallow(<Notification />)
        expect(wrapper.find('li')).toHaveLength(3)
    })

    test('Should render a text', () => {
        const wrapper = shallow(<Notification />)
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications')
    })
})