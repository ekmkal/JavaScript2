/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/

'use strict';

const catGif = document.querySelector('img');
const interval = setInterval(catWalk, 50);

// 'step' for adding 10 px to the left property
const step = 10;

// 'stopPoint' is where the cat stops
const stopPoint = window.innerWidth / 2 - catGif.width + (catGif.width % step);

catGif.style.left = '0px';

// I tried to define a recursive function, but the function isn't working with the same rhytym.
function catWalk(){
    const currentPosition = parseInt(catGif.style.left);
    catGif.style.left = (currentPosition + step) + 'px';
    if(currentPosition > window.innerWidth - catGif.width){
        catGif.style.left = '0px';
    };
    // After the second stop, function accelerates and 'clearInterval(interval)' doesn't work, I think.
    if(currentPosition === stopPoint){
        stopCat();
    };
};

function stopCat(){
    clearInterval(interval);
    catGif.src = 'https://media.tenor.com/images/b413d00f7c04ec226e2ffda388d322ae/tenor.gif';
    catGif.style.width = '15rem';
    setTimeout(continueCatWalk, 5000);
};

function continueCatWalk(){
    catGif.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    setInterval(catWalk, 50);
};

catWalk();