import { shallow } from 'enzyme';
import Notification from './Notifications'

describe("Notification Test", () => {
    it('Notification should render', () => {
        const wrapper = shallow(<Notification />)
        expect(wrapper).toBeDefined()
    })
    it('Should render three list items', () => {
        const wrapper = shallow(<Notification />)
        expect(wrapper.find('li')).toHaveLength(3)
    })

    it('Should render a text', () => {
        const wrapper = shallow(<Notification />)
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications')
    })
})