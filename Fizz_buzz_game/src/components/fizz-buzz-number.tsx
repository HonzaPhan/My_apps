import { useEffect, useState } from "react";

const IncreaseNumberButton = (): JSX.Element => {
  const [fizzBuzzNumber, setFizzBuzzNumber] = useState<number>(0);

  const getFizzBuzzValue = (): string => {
    if (fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0) {
      return "FizzBuzz";
    } else if (fizzBuzzNumber % 3 === 0) {
      return "Fizz";
    } else if (fizzBuzzNumber % 5 === 0) {
      return "Buzz";
    } else {
      return fizzBuzzNumber.toString();
    }
  };

  const fizzBuzzIncrement = (): void => {
    setFizzBuzzNumber(fizzBuzzNumber + 1)
  }

  const fizzBuzzDecrease = (): void => {
    setFizzBuzzNumber(fizzBuzzNumber - 1)
  }
  
  return (
    <>
      <div className="fizz-buzz-number">{getFizzBuzzValue()}</div>
      <div className="btn-wrapper">
        <button onClick={fizzBuzzIncrement} className="increase-btn">Increase Number</button>
        <button onClick={fizzBuzzDecrease} className="decrease-btn">Decrease Number</button>
      </div>
    </>
  );
};

export default IncreaseNumberButton;
