/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

'use strict';

 document.body.style.fontFamily = "Arial, sans-serif";

 const myNick = document.querySelector('#nickname');
 myNick.innerHTML = 'ekmel';

 const myFavFood = document.querySelector('#fav-food');
 myFavFood.innerHTML = 'pizza';
 
 const myHometown = document.querySelector('#hometown');
 myHometown.innerHTML = 'Amsterdam';

 for (const liElement of document.getElementsByTagName('li')){
    liElement.className = 'list-item';
 }

 const myImg = document.createElement('img');
 myImg.setAttribute('src', 'IMG_2736.JPG');
 myImg.style.width = '30%';
 document.body.append(myImg);

