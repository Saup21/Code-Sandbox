import React, { useRef, useState } from 'react';

const Header = (props) => {
    const { func, size } = props;
    const [changesize, setchangesize] = useState(size);
    const change = () => {
        func(Number(inputSize.current.value));
        setchangesize(Number(inputSize.current.value))
    }
    const increment = () => {
        func(changesize)
        setchangesize(Number(inputSize.current.value) + 1)
    }
    const decrement = () => {
        func(changesize)
        setchangesize(Number(inputSize.current.value) - 1)
    }
    const inputSize = useRef("");
    return (
        <div className='head'>
            <h2 className='header'>Code-Sandbox</h2>
            <div className='size'>
                <p>font size: </p>
                <button onClick={increment}><i className="bi bi-plus-lg"></i></button>
                <input type="number" min="10" max="40" ref={ inputSize } value={changesize} onInput={change} onChange={change}/>
                <button onClick={decrement}><i className="bi bi-dash-lg"></i></button>
            </div>
        </div>
    )
};
export default Header;