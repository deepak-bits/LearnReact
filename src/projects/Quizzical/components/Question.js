// import { nanoid } from "nanoid";
import { decode } from 'html-entities';
import React, { useEffect, useState } from "react";
// import OptionBtn from "./OptionBtn";
import Answers from "./Answers";
// import Options from "./Options";


export default function Question({ questionData, number }) {
    const { id, question, correct_answer, options } = questionData;

    // const initialObj = {
    //     0: false,
    //     1: false,
    //     2: false,
    //     3: false
    // };

    // const [selectedObj, setSelectedObj] = useState(initialObj);
    const [defaultOption, setDefaultOption] = useState(options);
    
    useEffect(() => {
        setDefaultOption(prevState => shuffleOptions(prevState));
    }, []);

    // function handleSelect(idx){        
    //     setSelectedObj({ ...initialObj, [idx]: true });
    // }

    // const optionBtns = defaultOption.map((option, idx) => {
    //     const o_id = nanoid();

    //     return <OptionBtn 
    //                 id={ o_id }
    //                 option={ decode(option) } 
    //                 handleSelect={ () => handleSelect(idx) } 
    //                 isSelect={ selectedObj[idx] }
    //                 key={ o_id }
    //             />;    
    // });

    function shuffleOptions(optionsArr){
        const newOptions = [...optionsArr];
        const randNum = Math.floor(Math.random() * 4);
        const firstAnswer = newOptions.shift();
        newOptions.splice(randNum, 0, firstAnswer);
        return newOptions;
    }

    return (
        <>
            <div className="question--container">
                <h3 className="question" id={`${id}`}>{number}. {decode(question)}</h3>
                <Answers 
                    correct_answer={correct_answer}
                    options={defaultOption}
                />
            </div>
        </>
    )
}