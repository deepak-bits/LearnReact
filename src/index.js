// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './styleQuizzical.css';
// import './styleMeme.css';
// // import './styleJournal.css';
// import App from './projects/MemeGenerator/App';
// // import App from './projects/DigitalBusinessCard/App';
// // import App from './projects/TravelJournal/App';
// // import App from './projects/Quizzical/App';
// // ReactDOM.render(<App />, document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />);



// import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count+1);
    }
    const decrementCount = () => {
        if(count > 0) setCount(count-1);
    }
    const resetCount = () => {
        setCount(0);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            <button onClick={resetCount}>Reset</button>
            {/* //Mush u der? */}
        </div>
    )
}

root.render(<App />);


// h1 tag

// increment, decrement, reset