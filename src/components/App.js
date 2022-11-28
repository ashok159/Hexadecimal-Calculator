//Ashok Surujdeo
//Web Development Project 4
//Professor Ye Paing

/* NOTE::
I used the Math.js library to perform the calculation part of the assignment
so it is imported below
*/

import '../styles/App.css';
import Buttons from './Buttons';
import Input from './Input';
import { useState } from 'react';
import * as math from 'mathjs';

const App = () => {

  // Declare state variables for input and result
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');

  //Function that handles the input of the calculator
  const createInput = (value) => {
    //starting state of input is 0
    //if input is 0, replace it with value that is clicked
    if (input === '0') {
      setInput(value);
    }
    else {
    setInput( (input) => [...input, value]);
    }
  }

  //Function that clears input once 'Clear' button is clicked
  const clearInput = () => {
    setInput('0');
    setResult('');
  }

  //Function that handles the result of the calculator once '=' button is clicked
  const calculate = () => {
    //check if input has two operators in a row except for negative numbers
    //return error if true
    for (let i = 0; i < input.length; i++) {
      if (input[i] === '+' || input[i] === '-' || input[i] === '*' || input[i] === '/') {
        if (input[i+1] === '+' || input[i+1] === '-' || input[i+1] === '*' || input[i+1] === '/') {
          if (input[i+1] !== '-') {
            setResult('Error');
            return;
          }
        }
      }
    }
    //check if last character is an operator
    //return error if true
    if (input[input.length-1] === '+' || input[input.length-1] === '-' || input[input.length-1] === '*' || input[input.length-1] === '/') {
      setResult('Error');
      return;
    }
    //check if a divide by zero error will occur and return error if true
    for (let i = 0; i < input.length; i++) {
      if (input[i] === '/') {
        if (input[i+1] === '0') {
          setResult('Error');
          return;
        }
      }
    }
    //create a function that will evaluate the input and set the result
    //converting hex to decimal for calculation
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'A') {
          input[i] = '10';
        }
        else if (input[i] === 'B') {
          input[i] = '11';
        }
        else if (input[i] === 'C') {
          input[i] = '12';
        }
        else if (input[i] === 'D') {
          input[i] = '13';
        }
        else if (input[i] === 'E') {
          input[i] = '14';
        }
        else if (input[i] === 'F') {
          input[i] = '15';
        }
      }
      const expression = input.join("");
      //calculate the result using mathjs
      const answer = math.evaluate(expression);
      //if the answer is a 10, 11, 12, 13, 14, or 15, convert it to hex
      if (answer === 10) {
        setResult('A');
      }
      else if (answer === 11) {
        setResult('B');
      }
      else if (answer === 12) {
        setResult('C');
      }
      else if (answer === 13) {
        setResult('D');
      }
      else if (answer === 14) {
        setResult('E');
      }
      else if (answer === 15) {
        setResult('F');
      }
      //if answer is greater than max integer or less than min integer return error 
      else if (answer > Number.MAX_SAFE_INTEGER || answer < Number.MIN_SAFE_INTEGER) {
        setResult('Error');
      }
      //if no errors, set the result to the answer and display it
      else{
        setResult(answer);
      }
  }

  const operationColor = "#f2a33c";
  return (
    <div className="App">
      <div className ="Calculator">
        <Input input={input} result={result}/>
        <div className="row">
          <Buttons symbol="D" handleClick={createInput}/> 
          <Buttons symbol="E" handleClick={createInput}/> 
          <Buttons symbol="F" handleClick={createInput}/>
          <Buttons symbol="/" color={operationColor} handleClick={createInput}/>
        </div> 
        <div className="row">
          <Buttons symbol="A" handleClick={createInput}/> 
          <Buttons symbol="B" handleClick={createInput}/> 
          <Buttons symbol="C" handleClick={createInput}/>
          <Buttons symbol="*" color={operationColor} handleClick={createInput}/>
        </div> 
        <div className="row">
          <Buttons symbol="7" handleClick={createInput}/> 
          <Buttons symbol="8" handleClick={createInput}/> 
          <Buttons symbol="9" handleClick={createInput}/>
          <Buttons symbol="-" color={operationColor} handleClick={createInput}/>
        </div> 
        <div className="row">
          <Buttons symbol="4" handleClick={createInput}/> 
          <Buttons symbol="5" handleClick={createInput}/> 
          <Buttons symbol="6" handleClick={createInput}/>
          <Buttons symbol="+" color={operationColor} handleClick={createInput}/>
        </div> 
        <div className="row">
          <Buttons symbol="1" handleClick={createInput}/> 
          <Buttons symbol="2" handleClick={createInput}/> 
          <Buttons symbol="3" handleClick={createInput}/>
          <Buttons symbol="=" color={operationColor} handleClick={calculate}/>
        </div> 
        <div className="row">
          <Buttons symbol="0" handleClick={createInput} /> 
          <Buttons symbol="Clear" color="#6082b6" handleClick={clearInput}/>
        </div> 
      </div>
    </div>
  );
}

export default App;
