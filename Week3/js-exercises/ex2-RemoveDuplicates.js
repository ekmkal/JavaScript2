/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
function removeDuplicates(array){
  // Creating an object for the unique letters
  let uniqueObject = {};
  array.forEach(function(item){
    if(!uniqueObject[item]){
      uniqueObject[item] = true;
    };
  });
  // Convert the object to array
  const uniqueArray = Array.from(Object.keys(uniqueObject));
  // Make the array given as parameter empty
  array.splice(0);
  // Pushing the unique array's items into the empty array 
  for (let i = 0; i < uniqueArray.length; i++){
    array.push(uniqueArray[i]);
  };
  return array;
};

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);
console.log(letters);


if (letters === ['a', 'b', 'c', 'd', 'e', 'f']){
  console.log("Hooray!");
};