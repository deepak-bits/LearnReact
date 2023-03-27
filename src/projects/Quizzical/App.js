import React, { useState } from 'react'; 
import WelcomePage from './components/WelcomePage';
import QuizPage from './components/QuizPage';
import SVGyellow from './components/SVGyellow';
import SVGblue from './components/SVGblue';

export default function App(){
    const [isStart, setIsStart] = useState(false);
    const [game, setGame] = useState({
        points: 0,
        isOver: false
    });
    
    function countPoints() {
        setGame(prevState => ({ ...prevState, points: prevState.points + 1 }));
    }

    function endGame(){
        setGame(prevState => ({ ...prevState, isOver: true }));
    }

    function handleClick() {
        setIsStart(prevVal => !prevVal);
    }

    function startGame(){
        setGame({ points: 0, isOver: false });
    }

    return (
        <div className="quiz--app">
            <SVGyellow />
            { 
                isStart 
                    ? <QuizPage 
                        game={game} 
                        countPoints={countPoints} 
                        endGame={endGame}
                        changeIsStart={handleClick}
                        startGame={startGame}
                      /> 
                    : <WelcomePage handleClick={handleClick} /> 
            }
            <SVGblue />
        </div>
    )
}
