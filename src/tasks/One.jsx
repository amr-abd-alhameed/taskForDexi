import React from "react";
const One = () => {
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
      {console.log(removeToMakePalindrome("aaab"))}
      {/* {console.log(removeToMakePalindrome("acxycab"))} */}
    </div>
  );
};

export default One;
