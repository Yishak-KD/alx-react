import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe("App testing", () => {
    it('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText('School dashboard');
        expect(linkElement).toBeInTheDocument();
    });
    it('Checks App renders without crushing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined()
    })
    it('Checks for class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('header').hasClass('App-header')).toBe(true);
    })

    it('Checks for body class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('body').hasClass('App-body')).toBe(true);
    })
    test('Checks for footer class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('footer').hasClass('App-footer')).toBe(true);
    })
})