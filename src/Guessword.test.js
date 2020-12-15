import GuessWord from './Guessword';
import {shallow} from 'enzyme';
import {findTestByAttribute,checkProps} from '../test/testUtil';

const defaultProps = {
    guessWords : [{ guessWord:'test',matchWordCount: 3,}],
}

const setup = (props = {})=>{
    const setupProps = {defaultProps,...props};
    return shallow(<GuessWord {...setupProps}/>);
}


test("check props test",()=>{
    const error =checkProps(GuessWord,defaultProps);
})

describe('render when no word guessed',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessWords:[]});
    })
    test('render with no error',()=>{
        const component = findTestByAttribute(wrapper,'component-guessWord');
        expect(component.length).toBe(1);
    })
    test('render no guess instruction',()=>{
        const instruction = findTestByAttribute(wrapper,'component-guessWord-instruction');
        expect(instruction.text().length).not.toBe(0);
    })
});
describe('render when a word is guessed',()=>{
    let wrapper;
    const guessWords = [
        { guessWord:'party',matchWordCount:3},
         { guessWord:'node',matchWordCount:1},
          { guessWord:'cat',matchWordCount:2},
        {
            guessWord:'react', matchWordCount:5
        }
    ]
    beforeEach(()=>{
        wrapper = setup({ guessWords});
    })
   test("render without errors ",()=>{
     const component = findTestByAttribute(wrapper,'component-guessWord');
        expect(component.length).toBe(1);
   });
   test("render guess word section",()=>{
    const guessWordNode = findTestByAttribute(wrapper,'guess-word-section');
    expect(guessWordNode.length).toBe(1);
   })
   test("check correct number of guess",()=>{
    const guessWordNode = findTestByAttribute(wrapper,'guess-word');
    expect(guessWordNode.length).toBe(guessWords.length);
   });
})