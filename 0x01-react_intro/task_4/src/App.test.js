import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe("App testing", () => {
    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText('School dashboard');
        expect(linkElement).toBeInTheDocument();
    });
    test('Checks for class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('header').hasClass('App-header')).toBe(true);
    })

    test('Checks for body class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('body').hasClass('App-body')).toBe(true);
    })
    test('Checks for footer class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('footer').hasClass('App-footer')).toBe(true);
    })
})