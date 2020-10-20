/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
// We can manipulate x variable inside function scope but can not re-assign it. The output: 10.
console.log(x);
// The output: 9.


const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
// We can manipulate y variable inside function scope and can modify it. The output: 10.
console.log(y);
// This modifying affects the y variable declared in global scope. The output: {x: 10}.