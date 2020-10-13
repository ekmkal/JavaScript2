/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

'use strict';

function createHTMLList(arr) {
  // your code goes in here
  const body = document.querySelector('body');
  // Creating a 'ul' element
  const ul = document.createElement('ul');
  // Putting each item of array into that 'ul' as a 'li' element
  arr.forEach(function(item){
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
  });
  body.appendChild(ul);
};

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

createHTMLList(myHobbies);