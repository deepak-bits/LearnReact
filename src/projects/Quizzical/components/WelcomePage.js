import React from 'react';

export default function WelcomePage(props){
    return (
        <div className="welcome">
            <h1 className="welcome--title">Quizzical</h1>
            <p className="welcome--subtitle">"The true sign of intelligence is not knowledge but imagination. Come, Let's test it."</p>
            <button className="welcome--btn" onClick={props.handleClick}>Start Quiz</button>
        </div>
    )
}

