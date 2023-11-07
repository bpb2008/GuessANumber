import React from "react";

const Result = ({ userNum, computerNum }) => {
  let result;
  if (userNum) {
    if (computerNum > userNum) {
      result = "Your guess is too low!";
    } else if (computerNum < userNum) {
      result = "Your guess is too high";
    } else if (computerNum == userNum) {
      result = "Yay! You guessed correctly!";
    } else {
      result = "Enter valid input";
    }
  }
  return (
    <h3>
      You guessed: {userNum} {result}{" "}
    </h3>
  );
};

export default Result;