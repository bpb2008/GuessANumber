import { useRef } from "react";

const Result = ({ userNum }) => {
  const randomNum = useRef(Math.floor(Math.random() * 100) + 1);
  console.log(randomNum);

  if (userNum < 0) {
    return <h3>Enter valid input</h3>;
  }

  let result = "";

  if (randomNum.current > userNum) {
    result = "Your guess is too low!";
  } else if (randomNum.current < userNum) {
    result = "Your guess is too high";
  } else if (randomNum.current === userNum) {
    result = "Yay! You guessed correctly!";
  } else {
    result = "Enter valid input!";
  }

  return (
    <h3>
      You guessed: {userNum} {result}
    </h3>
  );
};

export default Result;
