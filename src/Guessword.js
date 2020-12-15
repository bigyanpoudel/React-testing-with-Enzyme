import React from 'react';
import PropTypes from 'prop-types';
const GuessWord = ({guessWords}) => {
    let content;
    if(guessWords.length === 0)
    {
        content = <span data-test="component-guessWord-instruction">
            Start guessing the word!
        </span>
    }else{
        let tableContent = guessWords.map((ele,index)=>
        <tr key={index} data-test="guess-word">
            <td>{ele.guessWord}</td>
            <td>{ele.matchWordCount}</td>
        </tr>)
        content =
        <div data-test="guess-word-section">
        <table className="table table-md">
            <thead className="thead-light">
                <tr>
                    <td>GuessWord</td>
                    <td>Count</td>
                </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </table>
        </div>
    }
    return (
        <div data-test="component-guessWord">
            {content}
        </div>
    )
}
GuessWord.propTypes = {
    guessWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessWord : PropTypes.string.isRequired,
            matchWordCount : PropTypes.number.isRequired
        })
    )
}

export default GuessWord;
