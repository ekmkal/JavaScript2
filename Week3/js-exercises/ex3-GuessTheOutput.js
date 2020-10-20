/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

// The 'a' variable re-assigned in the function scope, so its value is 12 now.
// The 'x' variable stores the IIFE function's return value.
// When x() invoked, closure function checks for 'a' variable and finds it in the parent scope.
// It shows an alert message "12" in the page.