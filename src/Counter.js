import './App.css'
import { useState } from 'react';

const Counter = () => {
    const [countValue, setCountValue] = useState(0);       //useState(initial value for countValue)

    const handleOnClickSum = () => {
        setCountValue(countValue + 1);
    }
    const handleOnClickSub = () => {
        if (countValue==0) {
            alert('Value should not be below zero');
        }
        else {
            setCountValue(countValue - 1);
        }
    }
    const handleOnClickReset = () => {
        setCountValue(0);
    }

    return (
        <div>
            <h3>Counter</h3>
            <h1>{countValue}</h1>
            <button onClick={handleOnClickSum} className='btn'>+</button>
            <button onClick={handleOnClickSub} className='btn'>-</button>
            <button onClick={handleOnClickReset} className='btn'>Reset</button>
        </div>
    );
}

export default Counter;
