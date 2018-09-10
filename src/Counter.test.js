import Counter from './Counter';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter Component', () => {
    it('Should render', () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should increment counter', () => {
        const wrapper = mount(<Counter />);

        const count = wrapper.find('span');

        expect(count.text()).toBe('0');
        wrapper.find('button.increment').simulate('click');
        expect(count.text()).toBe('1');
    });
})