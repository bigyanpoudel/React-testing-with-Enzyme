import React from 'React';
import App from './App';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter});
/** 
* Function to create shallowWrapper for App component
*@function setup
*@params {objects} props - props specific to setup
*@params {object} state- initial state to setup
*@return shallowWrapper
*/ 
const setup = (props={},state=null)=>{
  const wrapper = shallow(<App {...props}/>);
  if (state) wrapper.setState(state);
  return wrapper;
}

const findTestByAttr = (wrapper,val)=>{
  return wrapper.find(`[data-test="${val}"]`);
}
test('testing render without crashing', () => {
  const wrapper = setup();
});
test('render increment button',()=>{
   const wrapper = setup();
   const button = findTestByAttr(wrapper,'component-app-button');
   expect(button.length).toBe(1);
});
test('render increment display',()=>{
    const wrapper = setup();
    const increment = findTestByAttr(wrapper,'component-app-increment');
    expect(increment.length).toBe(1);
});
test('counter start with 0',()=>{
  const wrapper = setup();
  const initialState = wrapper.state('counter');
  expect(initialState).toBe(0);
})
test('check click display button',()=>{
  const counter = 4;
  const wrapper= setup(null,{counter});
   const button = findTestByAttr(wrapper,'component-app-button');
   button.simulate('click');
  const increment = findTestByAttr(wrapper,'component-app-increment');
  expect(increment.text()).toContain(counter + 1);
})
