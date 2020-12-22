import React, { useState } from 'react';
import Big from 'big.js';

function App() {
  const [answer, setAnswer] = useState('0');
  const [calcTemp, setCalcTemp] = useState('');
  const [operatorTemp, setOperatorTemp] = useState('');
  const [clearAns, setClearAns] = useState(true);
  const [number] = useState(['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0']);
  const [controller] = useState(['/', '*', '+', '-']);

  const inputAnswer = (input) => {
    if (input === '.') {
      if (!clearAns && (answer.indexOf(input) === -1)) {
        setAnswer(answer + String(input));
        setClearAns(false);
      }
    } else {
      (clearAns || (answer === '0')) ? setAnswer(String(input)): setAnswer(answer + String(input));
      setClearAns(false);
    }
    // const x = new Big(255.5)
    // console.log(x.plus(5))
    // console.log(x.toFixed(5))
    // console.log(x.toPrecision(5))
  }

  const inputCaculate = (operator) => {
    setClearAns(true);
    if (calcTemp !== '') {
      let result;
      switch (operatorTemp) {
        case '+':
          result = Number(calcTemp) + Number(answer);
          break;
        case '-':
          result = Number(calcTemp) - Number(answer);
          break;
        case '*':
          result = Number(calcTemp) * Number(answer);
          break;
        case '/':
          result = Number(calcTemp) / Number(answer);
          break;
        default:
          break;
      }
      setAnswer(String(result));
      setCalcTemp(String(result));
    } else {
      setCalcTemp(String(answer));
    }
    if (operator !== '=') {
      setOperatorTemp(operator);
    } else {
      setCalcTemp('');
      setClearAns(true);
    }
  }

  const clearAll = () => {
    setAnswer('0');
    setCalcTemp('');
    setOperatorTemp('');
    setClearAns(true);
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="answer">
          <span>{answer}</span>
        </div>
        <div className="number">
          <ul>
            {number.map((element, index) =>
              <li onClick={() => inputAnswer(element)} key={index}><span>{element}</span></li>
            )}
            <li onClick={() => inputCaculate('=')}><span>=</span></li>
          </ul>
        </div>
        <div className="controller">
          <ul>
            <li onClick={clearAll}><span>AC</span></li>
            {controller.map((element, index) =>
              <li onClick={() => inputCaculate(element)} key={index}><span>{element}</span></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
