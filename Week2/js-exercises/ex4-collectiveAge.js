/**
 
 ** Exercise 4: Collective age **
 
 Have you ever wondered how old the HackYourFuture team members are ? Or better yet : what the collective age is ? Let 's find out!

 Write a function that calculates the combined age of every member
 Avoid using for loop or forEach.
 */

'use strict';

function collectiveAge(people) {
  // return the sum of age for all the people
  const totalAgeOfMembers = people.reduce(function(total, number){
    return total + number;
  }, 0);
  return totalAgeOfMembers;
};

function collectiveMembers(listOfPeople){
  const ages = listOfPeople.map(ageOfMember => ageOfMember.age);
  const total = collectiveAge(ages);
  console.log("The collective age of the HYF team is: " + total);
  return total;
};

const hackYourFutureMembers = [{
    name: 'Wouter',
    age: 33
  },
  {
    name: 'Federico',
    age: 32
  },
  {
    name: 'Noer',
    age: 27
  },
  {
    name: 'Tjebbe',
    age: 22
  },
];

console.log("The collective age of the HYF team is: " + collectiveMembers(hackYourFutureMembers));