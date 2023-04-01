import { useState } from "react";
import questions from "./questionData";

export default function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finalScore, setFinalScore] = useState(false);

    const handleClick = (isCorrect) => {
        if(isCorrect) {
            setScore(score+1);
        }

        const nextQuestion = currentQuestion + 1;

        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setFinalScore(true);
        }
    }

    return (
        <div>
            <h1>Quiz</h1>
            <h2>Score {score}/{questions.length}</h2>
            <div className="main-app">
                <div className="display-score">
                    {
                        finalScore 
                            ? <h1>You scored {score} out of {questions.length}</h1> 
                            : <>
                                    <section className="question-section">
                                        <div className="question-count">
                                            <span>Question {currentQuestion + 1}</span>
                                        </div>

                                        <div className="question-text">
                                            {questions[currentQuestion].question}
                                        </div>
                                        <div className="answer-section">
                                            {questions[currentQuestion].options.map((option, idx) => {
                                                return (
                                                    <button key={idx+1} onClick={() => handleClick(option.isCorrect)}>{option.answerText}</button>
                                                )
                                            })}
                                        </div>
                                    </section>
                                </>
                    }
                </div>
                
            </div>
        </div>
    )
}