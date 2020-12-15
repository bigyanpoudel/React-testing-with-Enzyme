import React from 'react'
import Congrats from './Congrats';
import GuessWord from './Guessword';
const NewApp = () => {
    return (
        <div className="container my-4" style={{width:'800px'}}>
            <h1>Welcome to guess word game</h1>
            <Congrats success={true}/>
            <GuessWord guessWords={[{guessWord:'react',matchWordCount:3}]}/>
        </div>
    )
}


export default NewApp
