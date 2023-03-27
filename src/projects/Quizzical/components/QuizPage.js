import React, { useState, useEffect } from "react";
import Question from "./Question";
import { nanoid } from 'nanoid';

export default function QuizPage({ game, countPoints, endGame, changeIsStart, startGame }){
    const [questionsData, setQuestionsData] = useState([]);
    // const [correctCount, setCorrectCount] = useState(0);
    // const [answersData, setAnswersData] = useState([]);
    
    const quizLevel = {
        amount: 3,
        category: 9,
        difficulty: 'easy',
        type: 'multiple'
    }

    // function quizLevlData(){

    // }
    
    const { amount, category, difficulty, type } = quizLevel;
    
    const API_Url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    
    // fetch data
    useEffect(() => {
        fetch(API_Url)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setQuestionsData(data.results.map((item) => {
                    const { question, correct_answer, incorrect_answers} = item;
                    return {
                        id: nanoid(),
                        question,
                        correct_answer,
                        options: [correct_answer, ...incorrect_answers]
                    }
                }));
            })
    }, []);

    const questionComponents = questionsData.map((question, idx) => {
        return <Question 
                    number={idx+1}
                    key={question.id} 
                    questionData={question}
                    countPoints={countPoints}
                />;  
    });

    function checkAnswers(){
        endGame();
        console.log("check answers");
    }

    function restartGame(){
        // console.log("Game reload");
        changeIsStart();
        startGame();
    }

    return (
        <div className="quiz--container">
            <div className="questions">
                { questionComponents }
            </div>
            <button 
                className="questions--btn" 
                onClick={game.isOver ? restartGame : checkAnswers}
            >
                    {game.isOver ? "Play again" : "Check Answers"}
            </button>
        </div>
    )
}



    // const API_Url = https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple