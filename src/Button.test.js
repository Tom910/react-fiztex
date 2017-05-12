import React from 'react';
import { shallow } from 'enzyme';

const Button = () => <button>123</button>;

it('Button', () => {
    const componet = shallow(<Button />);

    expect(componet.html()).toMatchSnapshot()
});