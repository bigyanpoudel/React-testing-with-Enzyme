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

