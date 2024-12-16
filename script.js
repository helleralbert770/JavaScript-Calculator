import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("0"); // Tracks the current input
  const [formula, setFormula] = useState(""); // Tracks the full formula
  const [lastEvaluated, setLastEvaluated] = useState(false); // Tracks if '=' was pressed

  // Function to handle clear
  const clear = () => {
    setInput("0");
    setFormula("");
    setLastEvaluated(false);
  };

  // Function to handle numbers
  const handleNumber = (value) => {
    if (lastEvaluated) {
      setInput(value);
      setFormula(value);
      setLastEvaluated(false);
    } else {
      const updatedInput =
        input === "0" || /[+\-*/]/.test(input) ? value : input + value;
      setInput(updatedInput);
      setFormula((prev) => prev + value);
    }
  };

  // Function to handle operators
  const handleOperator = (operator) => {
    if (/[+\-*/]$/.test(formula)) {
      setFormula((prev) => prev.slice(0, -1) + operator);
    } else {
      setFormula((prev) => prev + operator);
    }
    setInput(operator);
    setLastEvaluated(false);
  };

  // Function to handle decimal
  const handleDecimal = () => {
    if (!input.includes(".")) {
      setInput(input + ".");
      setFormula((prev) => prev + ".");
    }
  };

  // Function to evaluate
  const evaluate = () => {
    try {
      const result = eval(formula); // Not ideal for production, better to use math.js
      setInput(result.toString());
      setFormula(result.toString());
      setLastEvaluated(true);
    } catch (error) {
      console.error("Invalid Expression");
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="display">{input}</div>
      <button id="clear" onClick={clear}>AC</button>
      <button id="divide" onClick={() => handleOperator("/")}>/</button>
      <button id="multiply" onClick={() => handleOperator("*")}>*</button>
      <button id="seven" onClick={() => handleNumber("7")}>7</button>
      <button id="eight" onClick={() => handleNumber("8")}>8</button>
      <button id="nine" onClick={() => handleNumber("9")}>9</button>
      <button id="subtract" onClick={() => handleOperator("-")}>-</button>
      <button id="four" onClick={() => handleNumber("4")}>4</button>
      <button id="five" onClick={() => handleNumber("5")}>5</button>
      <button id="six" onClick={() => handleNumber("6")}>6</button>
      <button id="add" onClick={() => handleOperator("+")}>+</button>
      <button id="one" onClick={() => handleNumber("1")}>1</button>
      <button id="two" onClick={() => handleNumber("2")}>2</button>
      <button id="three" onClick={() => handleNumber("3")}>3</button>
      <button id="equals" onClick={evaluate}>=</button>
      <button id="zero" onClick={() => handleNumber("0")}>0</button>
      <button id="decimal" onClick={handleDecimal}>.</button>
    </div>
  );
};

export default App;
