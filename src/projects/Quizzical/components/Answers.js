import React, {useState} from 'react';
import OptionBtn from './OptionBtn';
import { nanoid } from 'nanoid';
import { decode } from 'html-entities';

export default function Answers({ options, correct_answer }) {
    const data = options.map(option => {
        return {
            id: nanoid(),
            selected: false,
            value: decode(option)

        }
    })
    const [answersData, setAnswersData] = useState(data);

    const answerComponents = answersData.map(answer => {
        return <OptionBtn 
                    option={answer.value}
                    id={answer.id}
                />
    })
    
    return (
        <div>
            { answerComponents }
        </div>
    )
}