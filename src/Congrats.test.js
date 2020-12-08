import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdaptor});

import Congrats from './Congrats';

const setup = (props={})=>{
    return shallow(<Congrats {...props}/>);
}
import {findTestByAttribute,checkProps} from '../test/testUtil';

test('render without error',()=>{
    const wrapper = setup({success : false});
    const component = findTestByAttribute(wrapper,'congrats-component')
    expect(component.length).toBe(1);
});

test('render nothing if success prop is false',()=>{
    const wrapper = setup({success: false});
    const component = findTestByAttribute(wrapper,'congrats-component')
    expect(component.text()).toBe('');
})

test('render message if success prop is true',()=>{
     const wrapper = setup({success: true});
    const component = findTestByAttribute(wrapper,'congrats-component')
    expect(component.text().length).not.toBe(0);
});
test('test for props type',()=>{
    const propsToCheck = {success : false};
    checkProps(Congrats,propsToCheck);
});