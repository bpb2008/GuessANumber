import { useRef } from "react";

const Result = ({ userNum }) => {
  const randomNum = useRef(Math.floor(Math.random() * 100) + 1);

  if (userNum < 0) {
    return <h3>Enter valid input</h3>;
  }

  let result = "";

  if (randomNum.current > userNum) {
    result = "Your guess is too low!";
  }
  if (randomNum.current < userNum) {
    result = "Your guess is too high";
  }
  if (randomNum.current === userNum) {
    result = "Yay! You guessed correctly!";
  }

  return (
    <h3>
      You guessed: {userNum} {result}
    </h3>
  );
};

export default Result;
