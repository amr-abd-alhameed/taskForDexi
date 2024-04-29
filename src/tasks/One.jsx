import React, { useState } from "react";const One = () => {
  const [inputString, setInputString] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const handleResult = () => {
    const indexToRemove = removeToMakePalindrome(inputString);
    if (indexToRemove === -1) {
      setResult("-1");
    } else {
      setResult(
        `Remove the character at index ${indexToRemove} to make a palindrome.`
      );
    }
  };

  function removeToMakePalindrome(string) {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
      if (string[left] === string[right]) {
        left++;
        right--;
      } else {
        // Check if removing left or right character makes a palindrome
        if (
          string.slice(left + 1, right + 1) ===
          string
            .slice(left + 1, right + 1)
            .split("")
            .reverse()
            .join("")
        ) {
          return left;
        } else if (
          string.slice(left, right) ===
          string.slice(left, right).split("").reverse().join("")
        ) {
          return right;
        } else {
          // Check if removing the character at left or right creates a palindrome
          if (
            string.slice(left + 1, right) ===
            string
              .slice(left + 1, right)
              .split("")
              .reverse()
              .join("")
          ) {
            return left;
          } else if (
            string.slice(left, right - 1) ===
            string
              .slice(left, right - 1)
              .split("")
              .reverse()
              .join("")
          ) {
            return right;
          } else {
            return -1;
          }
        }
      }
    }

    return -1;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputString}
          onChange={handleInputChange}
          placeholder="Enter a string"
        />
        <button onClick={handleResult}>Get Answer</button>
        <p>{result}</p>
      </div>
      {/* {console.log(removeToMakePalindrome("aaab"))} */}
      {/* {console.log(removeToMakePalindrome("acxycab"))} */}
    </div>
  );
};

export default One;
