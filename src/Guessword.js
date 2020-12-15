import React from 'react';
import PropTypes from 'prop-types';
const GuessWord = () => {
    return (
        <div>
            
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
