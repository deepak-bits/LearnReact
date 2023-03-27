import React from "react";

export default function OptionBtn({ option, id }) {  
    return (
        <button 
            id={id}
            className='option'
            key={id}
            onClick={() => console.log('option clicked')}
        >
            { option }
        </button>
    )
}