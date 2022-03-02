import { createContext, useState } from 'react'

const CalculatorContext = createContext()

export const CalculatorProvider = ({ children }) => {

  const [result, setResult] = useState("");

  // Button eventleri

  const zero = () => {
    setResult(result + "0");
  };

  const one = () => {
    setResult(result + "1");
  };

  const two = () => {
    setResult(result + "2");
  };

  const three = () => {
    setResult(result + "3");
  };

  const four = () => {
    setResult(result + "4");
  };

  const five = () => {
    setResult(result + "5");
  };

  const six = () => {
    setResult(result + "6");
  };

  const seven = () => {
    setResult(result + "7");
  };

  const eight = () => {
    setResult(result + "8");
  };

  const nine = () => {
    setResult(result + "9");
  };

  const add = () => {
    setResult(result + "+");
  };

  const subtract = () => {
    setResult(result + "-");
  };

  const multiply = () => {
    setResult(result + "*");
  };

  const divide = () => {
    setResult(result + "/");
  };

  const clear = () => {
    setResult("");
  };

  const equal = () => {
    setResult(eval(result));
  };

  const mod = () => {
    setResult(result + "%");
  };

  const point = () => {
    setResult(result + ".");
  };

  // Klavye eventleri

  const keyDown = (e) => {
    if (e.key === "0") {
      zero();
    } else if (e.key === "1") {
      one();
    } else if (e.key === "2") {
      two();
    } else if (e.key === "3") {
      three();
    } else if (e.key === "4") {
      four();
    } else if (e.key === "5") {
      five();
    } else if (e.key === "6") {
      six();
    } else if (e.key === "7") {
      seven();
    } else if (e.key === "8") {
      eight();
    } else if (e.key === "9") {
      nine();
    } else if (e.key === "+") {
      add();
    } else if (e.key === "-") {
      subtract();
    } else if (e.key === "*") {
      multiply();
    } else if (e.key === "/") {
      divide();
    } else if (e.key === ".") {
      point();
    } else if (e.key === "%") {
      mod();
    } else if (e.key === "Enter") {
      equal();
    } else if (e.key === "Escape") {
      clear();
    }
  };




  return (
    <CalculatorContext.Provider value={{
      result,
      setResult,
      zero,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      add,
      subtract,
      multiply,
      divide,
      clear,
      equal,
      mod,
      point,
      keyDown
    }}>
      {children}
    </CalculatorContext.Provider>
  )


}

export default CalculatorContext