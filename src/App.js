import React, { useState } from 'react';
import './App.css';

function App() {
    const [result, setResult] = useState('')
    const [message, setMessage] = useState('')

    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }

    const clear = () => {
        setResult('')
    }

    const del = () => {
        setResult(result.slice(0, -1))
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (err) {
            setMessage('Invalid Expression')
        }
    }
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <h4 className='title'>calc</h4>
                    <div className='theme'>
                        <h5>theme</h5>
                        <div className='btn-toggler'>
                            <input type="radio" checked="checked" name="theme-toggle"/>
                            <input type="radio" name="theme-toggle"/>
                            <input type="radio" name="theme-toggle"/>
                        </div>
                    </div>
                </div>
                <div className='message-err'>
                    {message}
                </div>
                <div className='form-result'>
                    <input type="text" value={result}/>
                </div>
                <div className='form-event'>
                    <button name='7' onClick={handleClick} type='button'>7</button>
                    <button name='8' onClick={handleClick} type='button'>8</button>
                    <button name='9' onClick={handleClick} type='button'>9</button>
                    <button name='' onClick={del} type='button' className='blue'>Del</button>
                    <button name='4' onClick={handleClick} type='button'>4</button>
                    <button name='5' onClick={handleClick} type='button'>5</button>
                    <button name='6' onClick={handleClick} type='button'>6</button>
                    <button name='+' onClick={handleClick} type='button'>+</button>
                    <button name='1' onClick={handleClick} type='button'>1</button>
                    <button name='2' onClick={handleClick} type='button'>2</button>
                    <button name='3' onClick={handleClick} type='button'>3</button>
                    <button name='-' onClick={handleClick} type='button'>-</button>
                    <button name='.' onClick={handleClick} type='button'>.</button>
                    <button name='0' onClick={handleClick} type='button'>0</button>
                    <button name='/' onClick={handleClick} type='button'>/</button>
                    <button name='*' onClick={handleClick} type='button'>&times;</button>
                    <button onClick={clear} type='button' className='blue'>Reset</button>
                    <button name='=' onClick={calculate} type='button' className='red'>=</button>
                </div>
            </div>
        </>
    );
}

export default App;
