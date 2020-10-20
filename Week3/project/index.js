// Your code goes in here
// Defining variables
const price = document.querySelector("#price");
const service = document.querySelector("#service");
const person = document.querySelector("#person");
const button = document.querySelector("#calculate-button");
const result = document.querySelector(".result");

// Calculating tip for each person
function calculateTip() {
    const priceVal = parseInt(price.value);
    const serviceVal = parseInt(service.value);
    const personVal = parseInt(person.value);
    const tip = (priceVal / 100 * serviceVal) / personVal;
    // Taking just two numbers after comma
    return tip.toFixed(2);
};

function showTip() {
    // Calling the function that evaluates the tip inside the message
    // If there is only one person, not written 'each' inside the message 
    const message = `
        <p>TIP AMOUNT</p>
        <p>$${calculateTip()}</p>
        <p>${person.value > 1 ? "each" : ""}</p>
    `;
    result.innerHTML = message;
};

// function checkValues() {
//     if (price.value === "" || service.value === "" || person.value === "") {
//         alert("You need to fill in all the fields!");
//     } else {
//         showTip();
//     };
// };

function checkValues(e) {
    if (price.value === "" || service.value === "" || person.value === "") {
        alert("You need to fill in all the fields!");
    } else {
        showTip();
        // Preventing refreshing the page after clicking to button
        e.preventDefault();
    };
};

button.addEventListener('click', checkValues);